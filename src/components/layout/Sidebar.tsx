"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  Ticket,
  Bus,
  Star,
  MapPin,
  Building2,
  Wrench,
  BarChart3,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import clsx from "clsx";

const navigation = [
  { name: "لوحة التحكم", href: "/", icon: LayoutDashboard },
  { name: "الحجوزات", href: "/bookings", icon: Ticket },
  { name: "الرحلات", href: "/trips", icon: Map },
  { name: "الأتوبيسات", href: "/buses", icon: Bus },
  { name: "الصيانة", href: "/maintenance", icon: Wrench },
  { name: "الخطوط والمحطات", href: "/routes", icon: MapPin },
  { name: "الفروع والمحطات", href: "/branches", icon: Building2 },
  { name: "الفئات والخدمات", href: "/classes", icon: Star },
  { name: "المستخدمين", href: "/users", icon: Users },
  { name: "التقارير", href: "/reports", icon: BarChart3 },
  { name: "الإعدادات", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={clsx(
        "flex h-full flex-col bg-white border-l border-gray-100 shadow-xl shadow-gray-200/50 transition-all duration-300 relative z-50",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -left-3 top-8 z-50 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm hover:bg-gray-50 text-gray-500 hover:text-blue-600 transition-colors"
      >
        {isCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>

      {/* Header / Logo */}
      <div
        className={clsx(
          "flex h-20 items-center border-b border-gray-50 transition-all duration-300",
          isCollapsed ? "justify-center px-2" : "justify-center px-6"
        )}
      >
        {isCollapsed ? (
          <div className="relative h-10 w-10 transition-opacity duration-300">
            <Image 
              src="/images/Tripoo_icon.jpg" 
              alt="Tripoo Icon" 
              fill 
              className="object-contain object-center rounded-lg"
              priority
            />
          </div>
        ) : (
          <div className="relative h-12 w-32 transition-opacity duration-300">
            <Image 
              src="/images/logo.png" 
              alt="Tripoo Logo" 
              fill 
              className="object-contain object-center"
              priority
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1.5 px-3 py-6 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "group flex items-center rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 relative overflow-hidden",
                isActive
                  ? "bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                isCollapsed && "justify-center px-2"
              )}
              title={isCollapsed ? item.name : undefined}
            >
              <item.icon
                className={clsx(
                  "h-5 w-5 shrink-0 transition-colors duration-200",
                  isActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-600",
                  !isCollapsed && "ml-3"
                )}
                aria-hidden="true"
              />
              {!isCollapsed && (
                <>
                  <span className={clsx("whitespace-nowrap transition-opacity duration-200", isActive ? "font-bold" : "font-medium")}>
                    {item.name}
                  </span>
                  {isActive && (
                    <div className="mr-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                  )}
                </>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t border-gray-50 p-4 bg-gray-50/50">
        <div className={clsx(
          "flex items-center p-2 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-sm cursor-pointer group",
          isCollapsed && "justify-center"
        )}>
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shrink-0 shadow-sm ring-2 ring-white">
              أ
            </div>
            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          
          {!isCollapsed && (
            <div className="mr-3 flex-1 overflow-hidden transition-opacity duration-300">
              <p className="text-sm font-bold text-gray-800 truncate group-hover:text-blue-700 transition-colors">أحمد محمد</p>
              <p className="text-xs text-gray-500 truncate">مدير النظام</p>
            </div>
          )}
          
          {!isCollapsed && (
            <LogOut className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" />
          )}
        </div>
      </div>
    </div>
  );
}
