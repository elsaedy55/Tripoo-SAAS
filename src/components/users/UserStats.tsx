"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Users, UserCheck, UserX, ShieldCheck } from "lucide-react";
import clsx from "clsx";

const stats = [
  {
    title: "إجمالي المستخدمين",
    value: "24",
    change: "+2 هذا الشهر",
    icon: Users,
    color: "blue",
  },
  {
    title: "المستخدمين النشطين",
    value: "18",
    change: "75% من الإجمالي",
    icon: UserCheck,
    color: "green",
  },
  {
    title: "حسابات معطلة",
    value: "2",
    change: "يحتاج مراجعة",
    icon: UserX,
    color: "red",
  },
  {
    title: "مدراء النظام",
    value: "4",
    change: "صلاحيات كاملة",
    icon: ShieldCheck,
    color: "purple",
  },
];

export function UserStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={clsx("p-3 rounded-xl", {
                "bg-blue-50 text-blue-600": stat.color === "blue",
                "bg-green-50 text-green-600": stat.color === "green",
                "bg-red-50 text-red-600": stat.color === "red",
                "bg-purple-50 text-purple-600": stat.color === "purple",
              })}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <p className="text-xs text-gray-400 mt-2">{stat.change}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
