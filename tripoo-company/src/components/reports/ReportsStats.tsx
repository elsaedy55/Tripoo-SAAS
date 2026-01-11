import { Card, CardContent } from "@/components/ui/Card";
import { TrendingUp, Users, CreditCard, Calendar } from "lucide-react";
import clsx from "clsx";

const stats = [
  {
    title: "إجمالي الإيرادات",
    value: "1,250,000 ج.م",
    change: "+15%",
    trend: "up",
    icon: CreditCard,
    color: "blue",
  },
  {
    title: "التذاكر المباعة",
    value: "3,450",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "green",
  },
  {
    title: "متوسط نسبة الإشغال",
    value: "85%",
    change: "-2%",
    trend: "down",
    icon: TrendingUp,
    color: "orange",
  },
  {
    title: "الرحلات المكتملة",
    value: "120",
    change: "+5%",
    trend: "up",
    icon: Calendar,
    color: "purple",
  },
];

export function ReportsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={clsx("p-3 rounded-xl", {
                "bg-blue-50 text-blue-600": stat.color === "blue",
                "bg-green-50 text-green-600": stat.color === "green",
                "bg-orange-50 text-orange-600": stat.color === "orange",
                "bg-purple-50 text-purple-600": stat.color === "purple",
              })}>
                <stat.icon className="h-6 w-6" />
              </div>
              <span className={clsx("text-xs font-medium px-2 py-1 rounded-full", {
                "bg-green-50 text-green-700": stat.trend === "up",
                "bg-red-50 text-red-700": stat.trend === "down",
              })}>
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
