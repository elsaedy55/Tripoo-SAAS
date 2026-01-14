"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  CreditCard,
  Settings,
  Activity,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  LogOut,
  FileText
} from "lucide-react";
import clsx from "clsx";

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (value: boolean) => void;
}

const navigation = [
  { name: "الرئيسية", href: "/", icon: LayoutDashboard },
  { name: "الشركات", href: "/companies", icon: Building2 },
  { name: "المستخدمين", href: "/users", icon: Users },
  { name: "الاشتراكات", href: "/subscriptions", icon: CreditCard },
  { name: "سجلات النظام", href: "/logs", icon: FileText },
  { name: "حالة النظام", href: "/system-health", icon: Activity },
  { name: "الإعدادات", href: "/settings", icon: Settings },
];

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "fixed top-0 right-0 h-full flex flex-col bg-white border-l border-gray-100 shadow-xl shadow-gray-200/50 transition-all duration-300 z-50",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -left-3 top-8 z-50 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm hover:bg-gray-50 text-gray-500 hover:text-blue-600 transition-colors"
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      {/* Header / Logo */}
      <div
        className={clsx(
          "flex h-20 items-center border-b border-gray-50 transition-all duration-300",
          isCollapsed ? "justify-center px-2" : "justify-start px-6"
        )}
      >
        <div className={clsx("flex items-center overflow-hidden transition-all duration-300", isCollapsed ? "gap-0" : "gap-3")}>
            <div className="size-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-blue-200 shadow-lg">
                <ShieldCheck size={24} />
            </div>
            <div className={clsx("transition-all duration-300 overflow-hidden", isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto")}>
                <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">Tripoo Admin</h1>
                <p className="text-xs text-blue-500 font-medium whitespace-nowrap">سوبر أدمن</p>
            </div>
        </div>
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

      {/* Footer / Logout */}
      <div className="border-t border-gray-50 p-4 bg-gray-50/50">
        <button
          className={clsx(
            "w-full flex items-center p-2 rounded-xl transition-all duration-200 hover:bg-red-50 hover:text-red-600 group text-gray-500",
            isCollapsed && "justify-center"
          )}
          title={isCollapsed ? "تسجيل الخروج" : undefined}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!isCollapsed && (
            <span className="mr-3 font-medium">تسجيل الخروج</span>
          )}
        </button>
      </div>
    </div>
  );
}
