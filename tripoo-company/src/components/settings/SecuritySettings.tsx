"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { Shield, Key, Lock, Smartphone, Laptop, History } from "lucide-react";
import clsx from "clsx";

export function SecuritySettings() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          الأمان وكلمة المرور
        </h2>
      </div>

      <div className="space-y-8">
        {/* Change Password */}
        <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Key className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">تغيير كلمة المرور</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">كلمة المرور الحالية</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  type="password" 
                  className="pr-10 bg-white border-gray-200 focus:bg-gray-50 transition-colors h-11 rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">كلمة المرور الجديدة</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  type="password" 
                  className="pr-10 bg-white border-gray-200 focus:bg-gray-50 transition-colors h-11 rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">تأكيد كلمة المرور الجديدة</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  type="password" 
                  className="pr-10 bg-white border-gray-200 focus:bg-gray-50 transition-colors h-11 rounded-xl"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              تحديث كلمة المرور
            </Button>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm mt-1">
                <Smartphone className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">المصادقة الثنائية (2FA)</h3>
                <p className="text-gray-500 mt-1 max-w-xl leading-relaxed">
                  أضف طبقة حماية إضافية لحسابك. عند تفعيل هذه الميزة، سنطلب رمزاً إضافياً عند تسجيل الدخول من جهاز جديد.
                </p>
              </div>
            </div>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800">
              تفعيل المصادقة الثنائية
            </Button>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Laptop className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">الجلسات النشطة</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">WIN</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Windows PC - Chrome</p>
                  <p className="text-sm text-gray-500">القاهرة، مصر • نشط الآن</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                الجهاز الحالي
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 opacity-75">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-xs">IPH</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">iPhone 13 - Safari</p>
                  <p className="text-sm text-gray-500">القاهرة، مصر • منذ 3 ساعات</p>
                </div>
              </div>
              <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 text-sm">
                تسجيل الخروج
              </Button>
            </div>
          </div>
        </div>

        {/* Login History */}
        <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <History className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">سجل الدخول</h3>
          </div>
          
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm text-right">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-6 py-3 font-medium">التاريخ والوقت</th>
                  <th className="px-6 py-3 font-medium">الجهاز</th>
                  <th className="px-6 py-3 font-medium">الموقع</th>
                  <th className="px-6 py-3 font-medium">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { date: "13/12/2025 10:30 AM", device: "Chrome on Windows", location: "192.168.1.1", status: "success" },
                  { date: "12/12/2025 08:15 PM", device: "Safari on iPhone", location: "192.168.1.5", status: "success" },
                  { date: "10/12/2025 03:45 PM", device: "Firefox on Mac", location: "10.0.0.12", status: "failed" },
                ].map((log, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-medium">{log.date}</td>
                    <td className="px-6 py-4 text-gray-600">{log.device}</td>
                    <td className="px-6 py-4 text-gray-500 font-mono text-xs">{log.location}</td>
                    <td className="px-6 py-4">
                      <span className={clsx(
                        "px-2.5 py-1 rounded-full text-xs font-bold",
                        log.status === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                      )}>
                        {log.status === "success" ? "ناجح" : "فشل"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
