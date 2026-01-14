import { MoreHorizontal } from 'lucide-react'

export default function RecentCompaniesTable() {
  const companies = [
    {
        id: 1,
        name: 'شركة النور للنقل',
        email: 'contact@alnoor.com',
        plan: 'بريميوم',
        status: 'نشط',
        date: '2024-01-12',
    },
    {
        id: 2,
        name: 'الجزيرة باص',
        email: 'info@aljazeera-bus.com',
        plan: 'أساسي',
        status: 'تحت التجربة',
        date: '2024-01-10',
    },
    {
        id: 3,
        name: 'سوبر جيت اكسبريس',
        email: 'sohag@superjet.net',
        plan: 'شركات',
        status: 'غير نشط',
        date: '2023-12-28',
    },
    {
        id: 4,
        name: 'الذهبية للسياحة',
        email: 'goldentour@gmail.com',
        plan: 'بريميوم',
        status: 'نشط',
        date: '2023-12-25',
    },
    {
        id: 5,
        name: 'مواصلات مصر',
        email: 'ops@mwaslat.eg',
        plan: 'مخصص',
        status: 'نشط',
        date: '2023-12-20',
    }
  ]
  return (
    <div className="overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-right">
                <thead className="bg-gray-50/50">
                    <tr>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الشركة</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الخطة</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الحالة</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">تاريخ التسجيل</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {companies.map((company) => (
                        <tr key={company.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded bg-gray-100 flex items-center justify-center font-bold text-gray-500 text-xs">
                                        {company.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">{company.name}</div>
                                        <div className="text-xs text-gray-500">{company.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-sm font-medium text-gray-700">{company.plan}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    company.status === 'نشط' ? 'bg-green-100 text-green-800' :
                                    company.status === 'تحت التجربة' ? 'bg-orange-100 text-orange-800' :
                                    'bg-gray-100 text-gray-800'
                                }`}>
                                    {company.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {company.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
