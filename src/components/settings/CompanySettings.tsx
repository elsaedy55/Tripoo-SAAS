"use client";

import { Button } from "@/components/ui/Button";
import { Building2, MapPin, Globe, Mail, Upload } from "lucide-react";

export function CompanySettings() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Building2 className="h-5 w-5 text-blue-600" />
          بيانات الشركة
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Logo Upload */}
        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">شعار الشركة</label>
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-blue-50/50 hover:border-blue-200 transition-all cursor-pointer group h-64">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-sm font-bold text-gray-900">اضغط لرفع الشعار</h4>
            <p className="text-xs text-gray-500 mt-1">أو اسحب وأفلت الصورة هنا</p>
            <p className="text-[10px] text-gray-400 mt-4 bg-gray-50 px-2 py-1 rounded-full">PNG, JPG حتى 2 ميجابايت</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">اسم الشركة</label>
              <div className="relative group">
                <Building2 className="absolute right-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  defaultValue="شركة تريبو للنقل البري"
                  className="block w-full pr-10 pl-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">البريد الإلكتروني الرسمي</label>
              <div className="relative group">
                <Mail className="absolute right-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  defaultValue="contact@tripoo.com"
                  className="block w-full pr-10 pl-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">العنوان الرئيسي</label>
              <div className="relative group">
                <MapPin className="absolute right-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  defaultValue="15 شارع التسعين، التجمع الخامس، القاهرة"
                  className="block w-full pr-10 pl-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">الموقع الإلكتروني</label>
              <div className="relative group">
                <Globe className="absolute right-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="url"
                  defaultValue="https://tripoo.com"
                  className="block w-full pr-10 pl-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 bg-gray-50/50 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              حفظ بيانات الشركة
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
