# Tripoo — Multi‑Tenant SaaS for Bus Booking & Fleet Management

مختصر وواضح: هذه منصة لإدارة الحجوزات والأتوبيسات لشركات متعددة، كل شركة بياناتها معزولة داخل نفس القاعدة عبر `organization_id`. فيه تجربة مجانية 14 يوم، وبعدها يتقفل الحساب لحد ما فريق الدعم يفعّله.

---

## العربية (مختصر)

### ما هي Tripoo؟
منصة SaaS لإدارة الرحلات والحجوزات والأسطول. الشركات (المستأجرين) منفصلة منطقيًا داخل قاعدة مشتركة.

### الخطط
- Limited: حدود تشغيلية (عدد الأتوبيسات/الموظفين/الرحلات).
- Unlimited: بدون حدود تشغيلية.
- White Label: نفس Unlimited + تخصيص شعار/ألوان/دومين.

### كيف تشتغل العزل؟
- كل جدول فيه `organization_id` + فهارس تبدأ به.
- قيود فريدة لكل شركة، مثل البريد للمستخدمين ورقم الحجز.

### التجربة والإغلاق (Trial Lock)
- يبدأ Trial لمدة 14 يوم.
- Job كل 6 ساعات: لو التجربة انتهت ومفيش اشتراك فعّال → الحالة `trial_expired`.
- Middleware يمنع الوصول لو الحالة `trial_expired` أو `suspended`.

### أهم الكيانات
- Organizations, Plans, Subscriptions, Invoices, WhiteLabelConfig, Invitations.
- Per Org: Users/Permissions/Audit, Branches/Garages/Stations/Routes, BusClasses/Buses/Seats, Trips/Bookings/Passengers, Maintenance, Reports.

### قواعد مبسطة
- الحجز يحتاج مقاعد؛ الإجمالي = السعر × عدد المقاعد.
- مقعد محجوز لا يتحدد.
- الرحلة لازم يكون لها Bus و Route صالحين؛ الباص حالته `active`.
- ممنوع حذف آخر `admin`.

### الواجهة (Enums) بإيجاز
رحلة: active/scheduled/finished/delayed/cancelled — حجز: confirmed/pending/cancelled — باص: active/maintenance/stopped — صيانة: completed/in‑progress/scheduled — مستخدم: admin/manager/agent/driver + active/inactive/invited — محطة: رئيسية/فرعية — تقرير: ready/archived — دفع: cash/vodafone_cash/credit_card.

### تشغيل المشروع محليًا (Windows)
1) المتطلبات: Node.js 18+، حساب Supabase (لـ URL و ANON KEY).
2) أنشئ ملف بيئة في مجلد التطبيق: `tripoo-company/.env.local`
	- `NEXT_PUBLIC_SUPABASE_URL=your-url`
	- `NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key`
3) تثبيت وتشغيل:

```powershell
Push-Location "e:\Projects\tripoo_project\tripoo_tech\tripoo-saas\tripoo-company"
npm install
npm run dev
Pop-Location
```

يفترض أن الواجهة تفتح على http://localhost:3000.

### هيكلة المستودع
- [docs](docs): مستندات عامة (أضف هنا أي شروحات).
- [infra](infra): إعدادات البنية التحتية/سكربتات النشر.
- [shared](shared): `types`, `constants`, `utils` مشتركة.
- [tripoo-company](tripoo-company): تطبيق Next.js للواجهة.
- [supabase](supabase): ترحيلات وقواعد الوصول والوظائف.

---

## English (Concise)

### What is Tripoo?
Multi‑tenant SaaS for bus bookings and fleet. Tenants are isolated by `organization_id` in a single shared DB.

### Plans
- Limited: operational caps.
- Unlimited: no caps.
- White Label: Unlimited + custom branding/domain.

### Isolation & Trial Lock
- Composite indexes starting with `organization_id` + per‑org unique constraints.
- 14‑day trial; scheduled job marks `trial_expired` when due; middleware blocks expired/suspended tenants.

### Key Entities
Platform: Organizations, Plans, Subscriptions, Invoices, WhiteLabelConfig, Invitations.
Per Org: Users/Permissions/Audit, Branches/Garages/Stations/Routes, BusClasses/Buses/Seats, Trips/Bookings/Passengers, Maintenance, Reports.

### Simple Rules
Bookings require seats; total = price × seat_count. Booked seats aren’t selectable. Trips need valid Bus/Route with `active` bus. Don’t delete the last `admin`.

### Run Locally (Windows)
1) Prereqs: Node.js 18+, Supabase URL/Anon key.
2) Create `tripoo-company/.env.local` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3) Install & start:

```powershell
Push-Location "e:\Projects\tripoo_project\tripoo_tech\tripoo-saas\tripoo-company"
npm install
npm run dev
Pop-Location
```

App runs on http://localhost:3000.

### Repo Structure
[docs](docs), [infra](infra), [shared](shared), [tripoo-company](tripoo-company), [supabase](supabase).

---

## Contributing
PRs/issues welcome. Keep tenant isolation and indexes in mind when proposing schema changes.

# Tripoo – SaaS Platform for Bus Fleet & Booking Management

هذه الوثيقة توضح خطة النظام ومنصة Tripoo بصيغة عربية/إنجليزية لتكون مرجعًا واحدًا للبنية العامة، قواعد العمل، ونموذج العزل متعدد المستأجرين (Multi-tenant SaaS).

---

## العربية

### 1) نظرة عامة
منصة إدارة حجوزات وأساطيل أتوبيسات تعمل كـ SaaS متعدد المستأجرين. كل شركة (مستأجر) معزولة بالبيانات عبر `organization_id` داخل قاعدة بيانات واحدة مشتركة. يتم توفير فترة تجريبية 14 يوم، ثم يتم الإغلاق تلقائياً حتى تفعيل الاشتراك يدوياً من جهة دعم العملاء.

الخطط:
- Limited (محدودة): حدود على الأتوبيسات/الموظفين/الرحلات.
- Unlimited (غير محدودة): بدون حدود عملياتية.
- White Label: غير محدود + تخصيص ألوان/شعار/دومين.

### 2) تدفق العمل (Onboarding & Access)
1. Landing Page → تسجيل بريد/كلمة مرور.
2. إدخال بيانات الشركة الأساسية → يبدأ Trial (14 يوم).
3. داخل الـ Dashboard: يظهر عدّ تنازلي للأيام المتبقية.
4. عند انتهاء التجربة: يتم قفل الحساب تلقائياً (status = `trial_expired`) ما لم يُفعّل الاشتراك.
5. فريقك يفعّل الاشتراك يدوياً (الدفع خارج المنظومة حالياً) → status = `active`.
6. White Label: إعداد لوجو/ألوان/دومين مخصص + اسم النظام.

### 3) نموذج العزل متعدد المستأجرين
- قاعدة بيانات واحدة، كل جدول يحتوي `organization_id (FK)` + فهارس مركّبة تبدأ به.
- قيود أمثلة: `UNIQUE(organization_id, email)` للمستخدمين، `UNIQUE(organization_id, booking_reference)` للحجوزات.
- إمكانية نقل مستقبلي إلى Schemas منفصلة إن لزم.

### 4) جداول المنصة (Shared Platform)
- Organizations: بيانات الشركة، حالة الوصول (active|trial_active|trial_expired|suspended)، `trial_start_date`.
- Plans: تعريف الخطط (Trial/Limited/Unlimited/White-Label)، حدود الاستخدام وخصائص الـ white label.
- Subscriptions: ربط الشركة بالخطة الحالية، فترة الفوترة، حالة الاشتراك.
- Invoices: فواتير لكل اشتراك (draft|sent|paid|overdue|cancelled).
- WhiteLabelConfig: ألوان، لوجو، فافيكون، دومين مخصص، اسم النظام المعروض، روابط الشروط والخصوصية.
- Invitations: دعوات موظفين عبر البريد، صلاحية، حالة الدعوة.

### 5) جداول الهوية والصلاحيات (Per Org)
- Users: الاسم، البريد، الهاتف، الدور (admin|manager|agent|driver)، الحالة (active|inactive|invited)، 2FA، last_login.
- Permissions (اختياري): `user_id + module + (read|create|update|delete)`.
- User Audit Log: action، entity_type/id، قبل/بعد (JSON)، ip، user_agent، timestamp.

### 6) جداول التشغيل (Per Org)
- Branches، Garages، Stations، Routes.
- BusClasses: (VIP|First|Economy)، seat_count، layout (1x2 أو 2x2)، default_price، خدمات (wifi, ac, screen, wc, meal, charger).
- Buses: plate، class، branch، garage، status (active|maintenance|stopped)، capacity، last_trip، next_maintenance.
- Seats: seat_number، status (available|booked|reserved)، مرتبط بـ bus.
- Trips: route، bus، date، departure/arrival، duration_display، class، status (active|scheduled|finished|delayed|cancelled)، capacity، booked_seats، occupancy%، price_per_seat.
- Bookings: booking_reference، trip، passenger_name/phone، seat_numbers[]، total_seats، price_per_seat، total_price، payment_method (cash|vodafone_cash|credit_card)، status (confirmed|pending|cancelled)، booking_date/time.
- Passengers (اختياري)، Maintenance، Reports.

### 7) الحالات (Enums) في الواجهة
- Trip: active | scheduled | finished | delayed | cancelled
- Booking: confirmed | pending | cancelled
- Bus: active | maintenance | stopped
- Maintenance: completed | in-progress | scheduled
- User Role: admin | manager | agent | driver
- User Status: active | inactive | invited
- Station: رئيسية | فرعية
- Report: ready | archived
- Payment: cash | vodafone_cash | credit_card

### 8) القيود وقواعد العمل
- الحجز: لا تأكيد بدون مقاعد مختارة؛ `total_price = price_per_seat × عدد المقاعد`.
- المقاعد: `booked` لا يمكن اختيارها؛ `selected` يعود إلى `available` بالتبديل.
- السعة: `available_seats = capacity - booked_seats ≥ 0`.
- الرحلات: لا تشغيل بدون bus و route صالحين؛ حالة bus يجب `active`.
- الصيانة: عند `in-progress` يفضّل وضع bus في `maintenance`؛ إتمام الصيانة يملأ `actual_cost`.
- المستخدمون: بريد فريد داخل الشركة؛ لا يُحذف آخر `admin`.
- التقارير: فلاتر + تنزيل PDF/Excel + أرشفة.

### 9) الفهارس الموصى بها (per organization_id)
- bookings(organization_id, trip_id, status, booking_date)
- trips(organization_id, trip_date, status)
- buses(organization_id, branch, garage, status)
- maintenance(organization_id, bus_id, status, date)
- users(organization_id, email)
- security_log(organization_id, user_id, login_datetime)

### 10) منطق الإغلاق التجريبي (Trial Lock)
- Job دوري (كل 6 ساعات): إذا `trial_start + 14 يوم ≤ اليوم` و `subscription.status != active` → `organization.status = trial_expired`.
- Middleware: يرفض الطلبات إذا `status ∈ {trial_expired, suspended}` ويعرض رسالة تفعيل.

### 11) White Label
- تخصيص ألوان، شعار، اسم النظام، ودومين مخصص (DNS/CNAME).
- ملفات قانونية مخصصة (Terms/Privacy) عند اللزوم.

### 12) الشاشات (من الكود الحالي)
- Dashboard، Bookings، Trips، Routes، Buses، Branches، Classes، Maintenance، Reports، Users، Settings.

### 13) خطوات التنفيذ
1. إنشاء جداول المنصة (Organizations, Plans, Subscriptions, Invoices, WhiteLabelConfig, Invitations).
2. إضافة `organization_id` إلى كل جداول التشغيل مع قيود `UNIQUE` مركّبة للفريد.
3. تطبيق Trial Lock + Middleware.
4. بناء Admin Endpoints للتفعيل/التعليق والفوترة.
5. تفعيل إعدادات White Label لكل شركة.
6. إعداد فهارس الأداء والأرشفة/التقسيم لاحقاً (Bookings, Security Log).
7. اختبار تحميل: 100 شركة × 1K حجز.

---

## English

### 1) Overview
Tripoo is a multi-tenant SaaS for bus fleet and booking management. Tenants are isolated by `organization_id` within a single shared database. A 14-day trial is provided; after expiry, access is locked until support manually activates the subscription.

Plans:
- Limited: operational limits on buses/employees/trips.
- Unlimited: no operational limits.
- White Label: unlimited + custom branding (colors/logo/domain).

### 2) Onboarding & Access
1. Landing Page → email/password signup.
2. Company basics → trial starts (14 days).
3. Dashboard shows trial countdown.
4. When trial ends: auto-lock (`trial_expired`) unless activated.
5. Support manually activates subscription → status `active`.
6. White Label: configure logo/colors/custom domain + system display name.

### 3) Multi-tenant Isolation Model
- Single database; all tables include `organization_id (FK)` and composite indexes starting with it.
- Examples: `UNIQUE(organization_id, email)` for users; `UNIQUE(organization_id, booking_reference)` for bookings.
- Optional future migration to per-schema isolation.

### 4) Shared Platform Tables
- Organizations, Plans, Subscriptions, Invoices, WhiteLabelConfig, Invitations.

### 5) Identity & Authorization (Per Org)
- Users, optional granular Permissions, User Audit Log.

### 6) Operational Tables (Per Org)
- Branches, Garages, Stations, Routes, BusClasses, Buses, Seats, Trips, Bookings, Passengers (optional), Maintenance, Reports.

### 7) UI Enums
Trip: `active|scheduled|finished|delayed|cancelled`; Booking: `confirmed|pending|cancelled`; Bus: `active|maintenance|stopped`; Maintenance: `completed|in-progress|scheduled`; User Role: `admin|manager|agent|driver`; User Status: `active|inactive|invited`; Station: `main|branch`; Report: `ready|archived`; Payment: `cash|vodafone_cash|credit_card`.

### 8) Business Rules
- Booking requires selected seats; `total_price = price_per_seat × seat_count`.
- Booked seats are not selectable; toggling returns to `available`.
- Capacity: `available_seats = capacity - booked_seats ≥ 0`.
- Trips require valid bus & route; bus must be `active`.
- Maintenance: `in-progress` implies bus is in `maintenance`; completion fills `actual_cost`.
- Users: email unique per org; cannot delete last `admin`.
- Reports: filters + export PDF/Excel + archive.

### 9) Recommended Indexes (per organization_id)
Bookings, Trips, Buses, Maintenance, Users, Security Log as listed above.

### 10) Trial Lock Logic
- Scheduled job (every 6h): if `trial_start + 14d ≤ today` and `subscription.status != active` → `organization.status = trial_expired`.
- Middleware blocks requests when status ∈ {`trial_expired`, `suspended`} with activation message.

### 11) White Label
Brand colors, logo/favicon, display name, custom domain (DNS/CNAME), and optional legal docs per client.

### 12) Current Screens (from code)
Dashboard, Bookings, Trips, Routes, Buses, Branches, Classes, Maintenance, Reports, Users, Settings.

### 13) Implementation Steps
Platform tables → add `organization_id` + composite uniques → trial lock middleware → admin endpoints → white label settings → performance indexes and archiving strategy → load test.

---

## Repository Structure (selected)
- [docs](docs) — project documentation.
- [infra](infra) — infrastructure notes and scripts.
- [shared](shared) — shared constants, types, and utils.
- [tripoo-company](tripoo-company) — Next.js app for company dashboard.
- [supabase](supabase) — migrations, policies, and functions.

## Contributing
Open issues and PRs are welcome. Please keep tenant isolation and index design in mind when proposing schema changes.
