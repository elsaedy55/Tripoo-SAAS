"use client";

import { Button } from "@/components/ui/Button";
import { User, Mail, Phone, Lock, Camera } from "lucide-react";

export function ProfileSettings() {
  return (
    <div className="space-y-10">
      {/* Personal Info Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <User className="h-5 w-5 text-blue-600" />
            المعلومات الشخصية
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-4 shrink-0 mx-auto md:mx-0">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 text-4xl font-bold border-4 border-white shadow-md ring-1 ring-gray-100">
                MA
              </div>
              <button className="absolute bottom-1 right-1 p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg hover:scale-110 ring-2 ring-white">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900">محمد أحمد</h3>
              <p className="text-sm text-gray-500">مدير النظام</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">الاسم بالكامل</label>
              <div className="relative group">
                <User className="absolute right-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  defaultValue="محمد أحمد"
                  className="block w-full pr-10 pl-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
              <div className="relative group">
                <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  defaultValue="admin@tripoo.com"
                  className="block w-full pr-10 pl-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">رقم الهاتف</label>
              <div className="relative group">
                <Phone className="absolute right-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="tel"
                  defaultValue="+20 123 456 7890"
                  className="block w-full pr-10 pl-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-all"
                />
              </div>
            </div>
            
            <div className="md:col-span-2 flex justify-end pt-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                حفظ التغييرات
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Password Section */}
      <section className="space-y-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Lock className="h-5 w-5 text-blue-600" />
            تغيير كلمة المرور
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">كلمة المرور الحالية</label>
            <input
              type="password"
              className="block w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">كلمة المرور الجديدة</label>
            <input
              type="password"
              className="block w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">تأكيد كلمة المرور</label>
            <input
              type="password"
              className="block w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-all"
            />
          </div>
          <div className="md:col-span-2 flex justify-end pt-2">
            <Button variant="outline" className="text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-gray-900">
              تحديث كلمة المرور
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
