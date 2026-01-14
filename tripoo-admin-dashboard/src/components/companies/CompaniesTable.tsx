import { 
    MoreHorizontal, 
    MapPin, 
    Phone, 
    Bus, 
    Users, 
    Calendar,
    ShieldCheck,
    Eye,
    Pencil,
    Trash2,
    Lock
} from 'lucide-react'
import { Button } from "@/components/ui/Button"

export default function CompaniesTable() {
  const companies = [
    {
        id: 1,
        name: 'شركة النور للنقل',
        domain: 'alnoor-travel.tripoo.com',
        email: 'contact@alnoor.com',
        phone: '+20 100 123 4567',
        city: 'القاهرة',
        plan: 'بريميوم',
        subscriptionEnd: '2024-12-31',
        status: 'نشط',
        busesCount: 45,
        usersCount: 12,
        joinDate: '2024-01-12',
    },
    {
        id: 2,
        name: 'الجزيرة باص',
        domain: 'aljazeera.tripoo.com',
        email: 'info@aljazeera-bus.com',
        phone: '+20 111 987 6543',
        city: 'الإسكندرية',
        plan: 'أساسي',
        subscriptionEnd: '2024-02-15',
        status: 'تحت التجربة',
        busesCount: 12,
        usersCount: 4,
        joinDate: '2024-01-10',
    },
    {
        id: 3,
        name: 'سوبر جيت اكسبريس',
        domain: 'superjet.tripoo.com',
        email: 'sohag@superjet.net',
        phone: '+20 122 333 4444',
        city: 'سوهاج',
        plan: 'شركات',
        subscriptionEnd: '2023-12-28',
        status: 'منتهي',
        busesCount: 28,
        usersCount: 8,
        joinDate: '2023-12-28',
    },
    {
        id: 4,
        name: 'الذهبية للسياحة',
        domain: 'golden.tripoo.com',
        email: 'goldentour@gmail.com',
        phone: '+20 106 555 8888',
        city: 'الغردقة',
        plan: 'بريميوم',
        subscriptionEnd: '2026-06-30',
        status: 'نشط',
        busesCount: 65,
        usersCount: 18,
        joinDate: '2023-12-25',
    },
    {
        id: 5,
        name: 'مواصلات مصر',
        domain: 'mwaslat.tripoo.com',
        email: 'ops@mwaslat.eg',
        phone: '+20 109 777 2222',
        city: 'القاهرة',
        plan: 'مخصص',
        subscriptionEnd: '2024-11-20',
        status: 'نشط',
        busesCount: 120,
        usersCount: 45,
        joinDate: '2023-12-20',
    },
    {
        id: 6,
        name: 'الصحراوي',
        domain: 'alsahrawi.tripoo.com',
        email: 'info@alsahrawi.com',
        phone: '+20 101 111 2222',
        city: 'أسيوط',
        plan: 'أساسي',
        subscriptionEnd: '2026-01-31',
        status: 'نشط',
        busesCount: 8,
        usersCount: 3,
        joinDate: '2024-01-15',
    },
    {
        id: 7,
        name: 'المارد للنقل',
        domain: 'almared.tripoo.com',
        email: 'contact@almared.net',
        phone: '+20 112 333 4444',
        city: 'المنصورة',
        plan: 'بريميوم',
        subscriptionEnd: '2026-02-10',
        status: 'نشط',
        busesCount: 32,
        usersCount: 10,
        joinDate: '2024-01-18',
    },
    {
        id: 8,
        name: 'رويال باص',
        domain: 'royal.tripoo.com',
        email: 'booking@royalbus.eg',
        phone: '+20 105 666 7777',
        city: 'القاهرة',
        plan: 'شركات',
        subscriptionEnd: '2026-01-20',
        status: 'تحت التجربة',
        busesCount: 15,
        usersCount: 5,
        joinDate: '2024-01-20',
    },
    {
        id: 9,
        name: 'وسط الدلتا',
        domain: 'deltamiddle.tripoo.com',
        email: 'info@mid-delta.com',
        phone: '+20 40 123 4567',
        city: 'طنطا',
        plan: 'أساسي',
        subscriptionEnd: '2023-11-15',
        status: 'منتهي',
        busesCount: 50,
        usersCount: 20,
        joinDate: '2023-05-10',
    },
    {
        id: 10,
        name: 'جو باص',
        domain: 'gobus.tripoo.com',
        email: 'support@go-bus.com',
        phone: '+20 19345',
        city: 'القاهرة',
        plan: 'مخصص',
        subscriptionEnd: '2025-12-31',
        status: 'نشط',
        busesCount: 250,
        usersCount: 120,
        joinDate: '2023-01-01',
    },
    {
        id: 11,
        name: 'اتوبيسات الوجه القبلي',
        domain: 'upper-egypt.tripoo.com',
        email: 'contact@upperegypt.gov.eg',
        phone: '+20 88 123 4567',
        city: 'أسوان',
        plan: 'شركات',
        subscriptionEnd: '2026-01-28',
        status: 'نشط',
        busesCount: 80,
        usersCount: 25,
        joinDate: '2023-08-15',
    },
    {
        id: 12,
        name: 'ترافيل إيجيبت',
        domain: 'travelegypt.tripoo.com',
        email: 'sales@travelegypt.com',
        phone: '+20 100 888 9999',
        city: 'شرم الشيخ',
        plan: 'بريميوم',
        subscriptionEnd: '2026-01-25',
        status: 'نشط',
        busesCount: 18,
        usersCount: 6,
        joinDate: '2024-01-05',
    }
  ]

  return (
    <div className="overflow-hidden bg-white rounded-xl border border-gray-100 shadow-xs">
        <div className="overflow-x-auto">
            <table className="w-full text-right">
                <thead className="bg-gray-50/50 border-b border-gray-100">
                    <tr>
                        <th className="w-12 px-6 py-4">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        </th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الشركة</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">بيانات الاتصال</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الاشتراك</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الإحصائيات</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">تاريخ الانضمام</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الحالة</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">الإجراءات</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {companies.map((company) => (
                        <tr key={company.id} className="hover:bg-blue-50/30 transition-colors group">
                             <td className="px-6 py-4">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-gray-500 text-sm shadow-sm">
                                        {company.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">{company.name}</div>
                                        <div className="text-xs text-blue-600 font-medium dir-ltr text-right">{company.domain}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                                        <Phone className="size-3.5 text-gray-400" />
                                        <span dir="ltr" className="text-right">{company.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                                        <MapPin className="size-3.5 text-gray-400" />
                                        <span>{company.city}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-sm font-bold text-gray-900">{company.plan}</span>
                                    {(() => {
                                        const now = new Date();
                                        const end = new Date(company.subscriptionEnd);
                                        const diffTime = end.getTime() - now.getTime();
                                        const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                        
                                        let styleClass = "text-green-700 bg-green-50 border-green-200";
                                        let text = `متبقي ${days} يوم`;
                                        
                                        if (days <= 0) {
                                            styleClass = "text-red-700 bg-red-50 border-red-200 font-bold";
                                            text = "اشتراك منتهي";
                                        } else if (days <= 30) {
                                            styleClass = "text-orange-700 bg-orange-50 border-orange-200 font-medium";
                                        }

                                        return (
                                            <div className={`flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-md border w-fit ${styleClass}`}>
                                                <Calendar className="size-3" />
                                                {text}
                                            </div>
                                        );
                                    })()}
                                </div>
                            </td>
                             <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                        <Bus className="size-3.5 text-blue-500" />
                                        <span>{company.busesCount}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                        <Users className="size-3.5 text-purple-500" />
                                        <span>{company.usersCount}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {company.joinDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                                    company.status === 'نشط' ? 'bg-green-50 text-green-700 border-green-100' :
                                    company.status === 'تحت التجربة' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                    'bg-red-50 text-red-700 border-red-100'
                                }`}>
                                    <span className={`size-1.5 rounded-full ${
                                         company.status === 'نشط' ? 'bg-green-500' :
                                         company.status === 'تحت التجربة' ? 'bg-blue-500' :
                                         'bg-red-500'
                                    }`}></span>
                                    {company.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600 hover:bg-blue-50" title="تفاصيل">
                                        <Eye size={16} />
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-orange-600 hover:bg-orange-50" title="تعديل">
                                        <Pencil size={16} />
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-purple-600 hover:bg-purple-50" title="الدخول كأدمن">
                                        <Lock size={16} />
                                    </Button>
                                    <div className="w-px h-4 bg-gray-200 mx-1"></div>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-red-600 hover:bg-red-50" title="خيارات إضافية">
                                        <MoreHorizontal size={16} />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <p className="text-xs text-gray-500">تم عرض {companies.length} من أصل 124 شركة</p>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 text-xs bg-white" disabled>السابق</Button>
                <Button variant="outline" size="sm" className="h-8 text-xs bg-white">التالي</Button>
            </div>
        </div>
    </div>
  )
}
