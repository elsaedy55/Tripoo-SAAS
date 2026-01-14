import { Building2, Users, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react'

interface StatCardProps {
    title: string
    value: string
    change?: string
    isPositive?: boolean
    icon: any
    color: string
}

function StatCard({ title, value, change, isPositive, icon: Icon, color }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100 flex items-start justify-between">
            <div className="space-y-4">
                <div className={`size-10 rounded-lg flex items-center justify-center ${color}`}>
                    <Icon className="size-5 text-white" />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                </div>
            </div>
            {change && (
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                    isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}>
                    {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {change}
                </div>
            )}
        </div>
    )
}

export default function StatsCards() {
  const stats = [
    {
        title: 'إجمالي الشركات',
        value: '124',
        change: '+12%',
        isPositive: true,
        icon: Building2,
        color: 'bg-blue-600'
    },
    {
        title: 'المستخدمين النشطين',
        value: '8,549',
        change: '+5.2%',
        isPositive: true,
        icon: Users,
        color: 'bg-teal-500'
    },
    {
        title: 'إيرادات الشهر',
        value: '$45,231',
        change: '+18%',
        isPositive: true,
        icon: Activity,
        color: 'bg-indigo-600'
    },
    {
        title: 'شركات تحت التجربة',
        value: '18',
        change: '-2%',
        isPositive: false,
        icon: Building2,
        color: 'bg-orange-500'
    }
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
        ))}
    </div>
  )
}
