import { ArrowUpRight, ArrowDownRight, type LucideIcon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/Card"

interface StatCardProps {
    title: string
    value: string
    change?: string
    isPositive?: boolean
    icon: LucideIcon
    color: string
}

export function StatCard({ title, value, change, isPositive, icon: Icon, color }: StatCardProps) {
    const colorClasses: Record<string, string> = {
        blue: "bg-blue-600",
        teal: "bg-teal-500",
        indigo: "bg-indigo-600",
        orange: "bg-orange-500",
        purple: "bg-purple-600",
        green: "bg-green-600",
        red: "bg-red-600",
    }
    
    // Fallback if color name is passed directly as class
    const bgClass = colorClasses[color] || color

    return (
        <Card className="hover:shadow-md transition-shadow duration-200 border-gray-100">
            <CardContent className="p-6 flex items-start justify-between">
                <div className="space-y-4">
                    <div className={`size-10 rounded-lg flex items-center justify-center ${bgClass}`}>
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
            </CardContent>
        </Card>
    )
}
