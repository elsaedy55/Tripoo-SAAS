"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react";
import clsx from "clsx";

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailBooking: true,
    emailCancel: true,
    smsBooking: false,
    smsDelay: true,
    pushNewTrip: true,
    pushSystem: false,
  });

  const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      dir="ltr"
      className={clsx(
        "relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        checked ? "bg-blue-600" : "bg-gray-200"
      )}
    >
      <span
        className={clsx(
          "inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Bell className="h-5 w-5 text-blue-600" />
          تفضيلات الإشعارات
        </h2>
      </div>

      <div className="space-y-8">
        {/* Email Notifications */}
        <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Mail className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">إشعارات البريد الإلكتروني</h3>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-medium text-gray-900">تأكيد الحجز</p>
                <p className="text-sm text-gray-500 mt-0.5">استلام بريد إلكتروني عند حجز رحلة جديدة</p>
              </div>
              <Toggle 
                checked={settings.emailBooking} 
                onChange={() => setSettings({...settings, emailBooking: !settings.emailBooking})} 
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-medium text-gray-900">إلغاء الرحلات</p>
                <p className="text-sm text-gray-500 mt-0.5">تنبيه عند إلغاء أي رحلة</p>
              </div>
              <Toggle 
                checked={settings.emailCancel} 
                onChange={() => setSettings({...settings, emailCancel: !settings.emailCancel})} 
              />
            </div>
          </div>
        </div>

        {/* SMS Notifications */}
        <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <MessageSquare className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">رسائل SMS</h3>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-medium text-gray-900">تأكيد الحجز للعميل</p>
                <p className="text-sm text-gray-500 mt-0.5">إرسال رسالة نصية للعميل تلقائياً</p>
              </div>
              <Toggle 
                checked={settings.smsBooking} 
                onChange={() => setSettings({...settings, smsBooking: !settings.smsBooking})} 
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-medium text-gray-900">تأخير الرحلات</p>
                <p className="text-sm text-gray-500 mt-0.5">إبلاغ الركاب عند تأخر الرحلة</p>
              </div>
              <Toggle 
                checked={settings.smsDelay} 
                onChange={() => setSettings({...settings, smsDelay: !settings.smsDelay})} 
              />
            </div>
          </div>
        </div>

        {/* Push Notifications */}
        <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Smartphone className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">إشعارات النظام</h3>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-medium text-gray-900">رحلات جديدة</p>
                <p className="text-sm text-gray-500 mt-0.5">تنبيه عند إضافة رحلات جديدة للجدول</p>
              </div>
              <Toggle 
                checked={settings.pushNewTrip} 
                onChange={() => setSettings({...settings, pushNewTrip: !settings.pushNewTrip})} 
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-medium text-gray-900">تحديثات النظام</p>
                <p className="text-sm text-gray-500 mt-0.5">أخبار وتحديثات حول لوحة التحكم</p>
              </div>
              <Toggle 
                checked={settings.pushSystem} 
                onChange={() => setSettings({...settings, pushSystem: !settings.pushSystem})} 
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            حفظ التفضيلات
          </Button>
        </div>
      </div>
    </div>
  );
}
