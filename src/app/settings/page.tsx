"use client";

import { useState } from "react";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { CompanySettings } from "@/components/settings/CompanySettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { User, Building2, Bell, Shield, ChevronLeft } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "profile", label: "الملف الشخصي", description: "معلوماتك الشخصية وكلمة المرور", icon: User, component: ProfileSettings },
  { id: "company", label: "إعدادات الشركة", description: "شعار الشركة وبيانات التواصل", icon: Building2, component: CompanySettings },
  { id: "notifications", label: "الإشعارات", description: "تفضيلات البريد والرسائل", icon: Bell, component: NotificationSettings },
  { id: "security", label: "الأمان والصلاحيات", description: "المصادقة الثنائية والجلسات", icon: Shield, component: SecuritySettings },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.component || ProfileSettings;
  const activeTabInfo = tabs.find((t) => t.id === activeTab);

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">الإعدادات</h1>
        <p className="text-gray-500 mt-2 text-lg">إدارة إعدادات النظام وتفضيلات الحساب</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-72 shrink-0 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "w-full flex items-center gap-4 px-4 py-4 text-right rounded-xl transition-all duration-200 group",
                activeTab === tab.id
                  ? "bg-white text-blue-700 shadow-sm ring-1 ring-gray-200"
                  : "text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm"
              )}
            >
              <div className={clsx(
                "p-2 rounded-lg transition-colors",
                activeTab === tab.id ? "bg-blue-50 text-blue-600" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600"
              )}>
                <tab.icon className="h-5 w-5" />
              </div>
              
              <div className="flex-1">
                <span className="block font-bold text-sm">{tab.label}</span>
              </div>

              {activeTab === tab.id && (
                <ChevronLeft className="h-4 w-4 text-blue-600" />
              )}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <main className="flex-1 w-full">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 min-h-[500px]">
            <ActiveComponent />
          </div>
        </main>
      </div>
    </div>
  );
}
