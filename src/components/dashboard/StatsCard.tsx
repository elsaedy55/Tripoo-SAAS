import { Card } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  color?: "blue" | "green" | "orange" | "purple";
}

export function StatsCard({ title, value, icon: Icon, trend, trendUp, color = "blue" }: StatsCardProps) {
  const colorStyles = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{value}</h3>
          </div>
          <div className={clsx("p-3 rounded-xl transition-colors", colorStyles[color])}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
        
        {trend && (
          <div className="mt-4 flex items-center gap-2">
            <span className={clsx(
              "text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1",
              trendUp ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            )}>
              {trendUp ? "↑" : "↓"} {trend}
            </span>
            <span className="text-xs text-gray-400">مقارنة بالشهر الماضي</span>
          </div>
        )}
      </div>
    </Card>
  );
}
