import { 
    MoreHorizontal, 
    Mail, 
    Phone, 
    Shield, 
    CheckCircle2,
    XCircle,
    Building2,
    Lock
} from 'lucide-react'
import { Button } from "@/components/ui/Button"

export default function UsersTable() {
  const users = [
    {
        id: 1,
        name: 'أحمد محمد',
        email: 'ahmed.mohamed@alnoor.com',
        phone: '+20 100 123 4567',
        role: 'مدير شركة',
        company: 'شركة النور للنقل',
        status: 'نشط',
        lastLogin: 'منذ 5 دقائق',
        avatarColor: 'bg-blue-100 text-blue-600'
    },
    {
        id: 2,
        name: 'محمود علي',
        email: 'm.ali@tripoo.com',
        phone: '+20 111 987 6543',
        role: 'سوبر أدمن',
        company: 'Tripoo',
        status: 'نشط',
        lastLogin: 'منذ ساعة',
        avatarColor: 'bg-purple-100 text-purple-600'
    },
    {
        id: 3,
        name: 'سارة حسن',
        email: 'sara@golden.com',
        phone: '+20 122 333 4444',
        role: 'موظف حجوزات',
        company: 'الذهبية للسياحة',
        status: 'غير نشط',
        lastLogin: 'منذ يومين',
        avatarColor: 'bg-pink-100 text-pink-600'
    },
    {
        id: 4,
        name: 'خالد إبراهيم',
        email: 'khaled@gobus.com',
        phone: '+20 106 555 8888',
        role: 'مدير فرع',
        company: 'جو باص',
        status: 'نشط',
        lastLogin: 'منذ 3 ساعات',
        avatarColor: 'bg-green-100 text-green-600'
    },
    {
        id: 5,
        name: 'مصطفى كمال',
        email: 'mostafa@royalbus.eg',
        phone: '+20 109 777 2222',
        role: 'محاسب',
        company: 'رويال باص',
        status: 'محظور',
        lastLogin: 'منذ أسبوع',
        avatarColor: 'bg-orange-100 text-orange-600'
    },
    {
        id: 6,
        name: 'نادية يوسف',
        email: 'nadia@mwaslat.eg',
        phone: '+20 101 222 3333',
        role: 'مدير تشغيل',
        company: 'مواصلات مصر',
        status: 'نشط',
        lastLogin: 'منذ 15 دقيقة',
        avatarColor: 'bg-teal-100 text-teal-600'
    },
    {
        id: 7,
        name: 'كريم عادل',
        email: 'kareem@superjet.net',
        phone: '+20 102 333 4444',
        role: 'سائق',
        company: 'سوبر جيت اكسبريس',
        status: 'نشط',
        lastLogin: 'منذ 30 دقيقة',
        avatarColor: 'bg-indigo-100 text-indigo-600'
    },
    {
        id: 8,
        name: 'منى فاروق',
        email: 'mona@aljazeera.com',
        phone: '+20 114 555 6666',
        role: 'موظف خدمة عملاء',
        company: 'الجزيرة باص',
        status: 'نشط',
        lastLogin: 'منذ 4 ساعات',
        avatarColor: 'bg-red-100 text-red-600'
    },
    {
        id: 9,
        name: 'عمرو دياب',
        email: 'amr@alsahrawi.com',
        phone: '+20 100 777 8888',
        role: 'مدير حركة',
        company: 'الصحراوي',
        status: 'غير نشط',
        lastLogin: 'منذ 3 أيام',
        avatarColor: 'bg-cyan-100 text-cyan-600'
    },
    {
        id: 10,
        name: 'هالة صدقي',
        email: 'hala@almared.net',
        phone: '+20 120 999 0000',
        role: 'سكرتارية',
        company: 'المارد للنقل',
        status: 'نشط',
        lastLogin: 'منذ 10 دقائق',
        avatarColor: 'bg-yellow-100 text-yellow-600'
    },
    {
        id: 11,
        name: 'ياسر جلال',
        email: 'yasser@upperegypt.gov.eg',
        phone: '+20 111 222 3333',
        role: 'مشرف محطة',
        company: 'اتوبيسات الوجه القبلي',
        status: 'نشط',
        lastLogin: 'منذ ساعتين',
        avatarColor: 'bg-lime-100 text-lime-600'
    },
    {
        id: 12,
        name: 'رانيا يوسف',
        email: 'rania@travelegypt.com',
        phone: '+20 106 444 5555',
        role: 'موظف مبيعات',
        company: 'ترافيل إيجيبت',
        status: 'محظور',
        lastLogin: 'منذ شهر',
        avatarColor: 'bg-rose-100 text-rose-600'
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
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">المستخدم</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الدور الوظيفي</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الشركة التابع لها</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">آخر ظهور</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الحالة</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">الإجراءات</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-blue-50/30 transition-colors group">
                             <td className="px-6 py-4">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${user.avatarColor}`}>
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">{user.name}</div>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                                            <Mail className="size-3" />
                                            <span dir="ltr" className="text-right">{user.email}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5 md:hidden">
                                            <Phone className="size-3" />
                                            <span dir="ltr" className="text-right">{user.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-1.5">
                                    <Shield className="size-3.5 text-blue-500" />
                                    <span className="text-sm font-medium text-gray-700">{user.role}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-1.5">
                                    <div className="p-1 bg-gray-100 rounded">
                                        <Building2 className="size-3.5 text-gray-500" />
                                    </div>
                                    <span className="text-sm text-gray-700">{user.company}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.lastLogin}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                                    user.status === 'نشط' ? 'bg-green-50 text-green-700 border-green-200' :
                                    user.status === 'غير نشط' ? 'bg-gray-50 text-gray-700 border-gray-200' :
                                    'bg-red-50 text-red-700 border-red-200'
                                }`}>
                                    {user.status === 'نشط' ? <CheckCircle2 className="size-3.5" /> : 
                                     user.status === 'محظور' ? <Lock className="size-3.5" /> :
                                     <XCircle className="size-3.5" />}
                                    {user.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <Button variant="outline" size="sm" className="h-8 text-xs bg-white text-gray-700 hover:text-blue-600 hover:border-blue-200">
                                        تعديل
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-red-600 hover:bg-red-50">
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
            <p className="text-xs text-gray-500">تم عرض {users.length} من أصل 2,451 مستخدم</p>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 text-xs bg-white" disabled>السابق</Button>
                <Button variant="outline" size="sm" className="h-8 text-xs bg-white">التالي</Button>
            </div>
        </div>
    </div>
  )
}
