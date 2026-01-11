# خطة النظام ومنصة الـ SaaS (Tripoo)

## 1. نظرة عامة
منصة إدارة حجوزات وأساطيل أتوبيسات تعمل كـ **SaaS متعدد المستأجرين**. كل شركة (مستأجر) معزولة بالبيانات بكامل جداولها عبر مفتاح `organization_id` داخل قاعدة بيانات واحدة مشتركة. يتم توفير **فترة تجريبية 14 يوم**، ثم يتم الإغلاق تلقائياً حتى تفعيل الاشتراك يدوياً من جهة دعم العملاء. توجد 3 خطط:
- **Limited (خطة محدودة):** حدود على الأتوبيسات/الموظفين/الرحلات.
- **Unlimited (غير محدودة):** بدون حدود عملياتية.
- **White Label:** غير محدود + تخصيص ألوان/شعار/دومين.

## 2. تدفق العمل (Onboarding & Access)
1) Landing Page → تسجيل بريد/كلمة مرور.
2) إدخال بيانات الشركة الأساسية → يبدأ Trial (14 يوم).
3) داخل الـ Dashboard: يظهر عدّ تنازلي للأيام المتبقية.
4) عند انتهاء التجربة: يتم قفل الحساب تلقائياً (status = trial_expired) ما لم يُفعّل الاشتراك.
5) فريقك يفعّل الاشتراك يدوياً (دفع خارج المنظومة حالياً) → status = active.
6) الخطة الثالثة (White Label): إعداد لوجو/ألوان/دومين مخصص + اسم النظام.

## 3. نموذج العزل متعدد المستأجرين
- قاعدة بيانات واحدة، كل جدول يحتوي `organization_id` (FK) + فهارس مركّبة تبدأ به.
- القيود: `UNIQUE(organization_id, email)` للمستخدمين، `UNIQUE(organization_id, booking_reference)` للحجوزات، إلخ.
- إمكانية نقل مستقبلي إلى Schemas منفصلة إن لزم.

## 4. جداول المنصة (Shared Platform)
- **Organizations:** بيانات الشركة، حالة الوصول (active|trial_active|trial_expired|suspended)، trial_start_date.
- **Plans:** تعريف الخطط (Trial/Limited/Unlimited/White-Label) وحدود الاستخدام وخصائص الـ white label.
- **Subscriptions:** ربط الشركة بالخطة الحالية، فترة الفوترة، حالة الاشتراك.
- **Invoices:** فواتير لكل اشتراك (draft|sent|paid|overdue|cancelled).
- **WhiteLabelConfig:** ألوان، لوجو، فافيكون، دومين مخصص، اسم النظام المعروض، روابط الشروط والخصوصية.
- **Invitations:** دعوات موظفين عبر البريد، صلاحية، حالة الدعوة.

## 5. جداول الهوية والصلاحيات (Per Org)
- **Users:** الاسم، البريد، الهاتف، الدور (admin|manager|agent|driver)، الحالة (active|inactive|invited)، 2FA، last_login.
- **Permissions (اختياري للتخصيص):** user_id + module + (read|create|update|delete).
- **User Audit Log:** action، entity_type/id، قبل/بعد (JSON)، ip، user_agent، timestamp.

## 6. جداول التشغيل (Per Org)
- **Branches:** الاسم، العنوان، الهاتف، manager_id.
- **Garages:** الاسم، الفرع، الموقع، capacity، active_buses.
- **Stations:** الاسم، الفرع، المدينة، النوع (رئيسية|فرعية).
- **Routes:** الاسم (من - إلى)، قائمة محطات مرتبة، station_count.
- **BusClasses:** (VIP|First|Economy)، seat_count، layout (1x2 أو 2x2)، default_price، الخدمات (wifi, ac, screen, wc, meal, charger).
- **Buses:** plate، class، branch، garage، status (active|maintenance|stopped)، capacity، last_trip، next_maintenance.
- **Seats:** seat_number، status (available|booked|reserved)، مرتبط بـ bus.
- **Trips:** route، bus، date، departure/arrival، duration_display، class، status (active|scheduled|finished|delayed|cancelled)، capacity، booked_seats، occupancy%، price_per_seat.
- **Bookings:** booking_reference، trip، passenger_name/phone، seat_numbers[]، total_seats، price_per_seat، total_price، payment_method (cash|vodafone_cash|credit_card)، status (confirmed|pending|cancelled)، booking_date/time.
- **Passengers (اختياري):** بيانات العميل للـ re-use.
- **Maintenance:** bus، type، date، status (completed|in-progress|scheduled)، estimated_cost، actual_cost، next_due.
- **Reports:** title، category (financial|operational|maintenance|bookings)، date_range، file_type (pdf|excel)، size، status (ready|archived).

## 7. الحالات (Enums) المستعملة في الواجهة
- **رحلة (Trip):** active | scheduled | finished | delayed | cancelled
- **حجز (Booking):** confirmed | pending | cancelled
- **أتوبيس (Bus):** active | maintenance | stopped
- **صيانة (Maintenance):** completed | in-progress | scheduled
- **مستخدم:** admin | manager | agent | driver ، وحالة active | inactive | invited
- **محطة:** رئيسية | فرعية
- **تقرير:** ready | archived (و category كما بالأعلى)
- **دفع:** cash | vodafone_cash | credit_card

## 8. القيود وقواعد العمل المستخلصة من الـ UI
- الحجز: لا يمكن تأكيد بدون مقاعد مختارة؛ total_price = price_per_seat × عدد المقاعد.
- المقاعد: booked لا يمكن اختيارها؛ selected يتغير إلى available بالتبديل.
- السعة: available_seats = capacity - booked_seats ≥ 0.
- الرحلات: لا تُشغّل بدون bus و route صالحين؛ حالة bus يجب أن تكون active.
- الصيانة: عند in-progress يفضّل وضع bus في maintenance؛ إتمام الصيانة يملأ actual_cost.
- المستخدمون: بريد فريد داخل الشركة؛ أدوار مميزة؛ لا يُحذف آخر admin.
- التقارير: فلاتر تصنيف/حالة، تنزيل PDF/Excel، أرشفة.
- المحطات/الخطوط: تسلسل محطات، عدّ المحطات.

## 9. الفهارس الموصى بها (per org_id)
- bookings(organization_id, trip_id, status, booking_date)
- trips(organization_id, trip_date, status)
- buses(organization_id, branch, garage, status)
- maintenance(organization_id, bus_id, status, date)
- users(organization_id, email)
- security_log(organization_id, user_id, login_datetime)

## 10. منطق الإغلاق التجريبي (Trial Lock)
- job دوري (كل 6 ساعات): إذا `trial_start + 14 يوم ≤ اليوم` و `subscription.status != active` → organization.status = trial_expired.
- Middleware على كل طلب: يرفض إذا status ∈ {trial_expired, suspended} ويعرض رسالة تفعيل.

## 11. White Label (الخطة الثالثة)
- تخصيص primary/secondary colors، logo/fav، اسم النظام المعروض.
- دومين مخصص: custom_domain + إثبات ملكية (DNS/CNAME).
- ملفات قانونية مخصصة (Terms/Privacy) لكل عميل عند اللزوم.

## 12. خارطة الشاشات الحالية (من الكود)
- Dashboard: إحصاءات أسطول، رحلات جارية، حالة أتوبيسات، إجراءات سريعة.
- Bookings: جدول حجوزات + إنشاء حجز (اختيار رحلة، مقاعد، بيانات راكب، دفع).
- Trips: جدول رحلات مع فلاتر من/إلى/تاريخ/حالة/فئة.
- Routes: خطوط ومحطات مع فلاتر من/إلى + عدّ المحطات.
- Buses: إدارة أتوبيسات مع فلاتر حالة/فئة/فرع.
- Branches: تبويب فروع، جراجات، محطات مع فلاتر وبحث.
- Classes: فئات الخدمة (VIP/First/Economy) مع خدمات وتخطيط مقاعد.
- Maintenance: سجلات صيانة بفلاتر نوع/حالة.
- Reports: إحصاءات + جدول تقارير + استخراج تقرير.
- Users: إحصاءات مستخدمين + جدول أدوار/حالات + إضافة/تعديل/حذف.
- Settings: ملف شخصي، بيانات شركة، إشعارات، أمان (2FA، جلسات نشطة، سجل دخول).

## 13. خطوات التنفيذ
1) إنشاء جداول المنصة (Organizations, Plans, Subscriptions, Invoices, WhiteLabelConfig, Invitations).
2) إضافة organization_id إلى كل جداول التشغيل، مع قيود UNIQUE مركّبة للفريد.
3) تطبيق منطق الـ Trial Lock + middleware للتحقق من الوصول.
4) بناء Admin Endpoints لتفعيل/تعليق الاشتراكات وإصدار الفواتير.
5) تفعيل إعدادات White Label (ألوان/دومين/شعار) في الإعدادات لكل شركة.
6) إعداد فهارس الأداء والتهيئة للأرشفة/التقسيم لاحقاً للبيانات الضخمة (Bookings, Security Log).
7) اختبار تحميل: 100 شركة × 1K حجز (100K سجل) للتأكد من الأداء.

## 14. أسئلة مفتوحة (للتأكيد)
- حدود كل خطة بالتحديد (buses, employees, trips/month)؟
- آلية تفعيل الدومين المخصص (DNS فقط أم شهادة TLS مُدارة)؟
- هل نحتاج Webhooks/API Keys للعملاء؟
- سياسة الاحتفاظ بالبيانات (Bookings/Logs) قبل الأرشفة؟
- هل الدفع سيُدمج لاحقاً (Stripe/Fawry) أم يبقى يدوي؟
