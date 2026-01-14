"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  Settings, 
  Shield, 
  Bell, 
  Globe, 
  Mail, 
  Lock, 
  Smartphone, 
  Save, 
  Server,
  CloudCog,
  Palette,
  Eye,
  Languages
} from "lucide-react";
import { Input } from "@/components/ui/Input";

type SettingsTab = 'general' | 'security' | 'notifications' | 'system';

export default function SettingsContainer() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Sidebar Navigation */}
      <Card className="w-full lg:w-64 shrink-0 border-gray-100 shadow-sm overflow-hidden sticky top-4">
        <CardContent className="p-2">
            <nav className="flex flex-col gap-1">
                <button 
                    onClick={() => setActiveTab('general')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'general' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    <Settings className="size-4" />
                    عام
                </button>
                <button 
                    onClick={() => setActiveTab('security')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'security' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    <Shield className="size-4" />
                    الأمان والصلاحيات
                </button>
                <button 
                    onClick={() => setActiveTab('notifications')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'notifications' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    <Bell className="size-4" />
                    الإشعارات
                </button>
                <button 
                    onClick={() => setActiveTab('system')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'system' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                    <Server className="size-4" />
                    النظام
                </button>
            </nav>
        </CardContent>
      </Card>

      {/* Content Area */}
      <div className="flex-1 w-full space-y-6">
        {activeTab === 'general' && (
            <div className="space-y-6">
                <Card className="border-gray-100 shadow-sm">
                    <div className="p-6 border-b border-gray-50">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <Palette className="size-5 text-gray-500" />
                            هوية المنصة
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">تخصيص اسم المنصة، الشعار، والألوان الرئيسية.</p>
                    </div>
                    <CardContent className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">اسم المنصة</label>
                                <Input defaultValue="Tripoo Admin" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">الرابط الأساسي (Base URL)</label>
                                <Input defaultValue="https://admin.tripoo.com" dir="ltr" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">وصف المنصة (Mata Description)</label>
                            <textarea className="w-full min-h-[100px] p-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" defaultValue="نظام إدارة النقل الجماعي الذكي - لوحة تحكم الإدارة" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-gray-100 shadow-sm">
                     <div className="p-6 border-b border-gray-50">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <Languages className="size-5 text-gray-500" />
                            الإعدادات الإقليمية
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">اللغة الافتراضية، المنطقة الزمنية، والعملات.</p>
                    </div>
                    <CardContent className="p-6 space-y-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">اللغة الافتراضية</label>
                                <select className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                                    <option>العربية (Arabic)</option>
                                    <option>English</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">المنطقة الزمنية</label>
                                <select className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                                    <option>(GMT+02:00) Cairo</option>
                                    <option>(GMT+03:00) Riyadh</option>
                                    <option>(GMT+04:00) Dubai</option>
                                </select>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )}

        {activeTab === 'security' && (
             <div className="space-y-6">
                <Card className="border-gray-100 shadow-sm">
                    <div className="p-6 border-b border-gray-50">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <Lock className="size-5 text-gray-500" />
                            سياسات كلمات المرور
                        </h2>
                    </div>
                    <CardContent className="p-6 space-y-6">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="space-y-0.5">
                                <div className="font-medium text-sm text-gray-900">فرض تعقيد كلمة المرور</div>
                                <div className="text-xs text-gray-500">يتطلب أرقام، رموز، وحروف كبيرة وصغيرة</div>
                            </div>
                            <div className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 bg-blue-600">
                                <span className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5 rtl:-translate-x-5" />
                            </div>
                        </div>
                         <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="space-y-0.5">
                                <div className="font-medium text-sm text-gray-900">تغيير كلمة المرور دورياً</div>
                                <div className="text-xs text-gray-500">إجبار المستخدمين على تغيير كلمة المرور كل 90 يوم</div>
                            </div>
                             <div className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 bg-gray-200">
                                <span className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card className="border-gray-100 shadow-sm">
                    <div className="p-6 border-b border-gray-50">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <Shield className="size-5 text-gray-500" />
                            المصادقة الثنائية (2FA)
                        </h2>
                    </div>
                    <CardContent className="p-6 space-y-6">
                        <div className="flex items-center justify-between p-4 border border-blue-100 bg-blue-50/50 rounded-lg">
                            <div className="space-y-0.5">
                                <div className="font-medium text-sm text-blue-900">تفعيل 2FA للإداريين</div>
                                <div className="text-xs text-blue-600">مطلوب من جميع حسابات Admin تفعيل المصادقة الثنائية</div>
                            </div>
                             <Badge variant="success" className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-transparent">مفعل</Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )}

        {activeTab === 'notifications' && (
             <div className="space-y-6">
                <Card className="border-gray-100 shadow-sm">
                    <div className="p-6 border-b border-gray-50">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <Mail className="size-5 text-gray-500" />
                            إعدادات البريد الإلكتروني (SMTP)
                        </h2>
                    </div>
                    <CardContent className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">SMTP Host</label>
                                <Input defaultValue="smtp.sendgrid.net" dir="ltr" />
                            </div>
                             <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Port</label>
                                <Input defaultValue="587" dir="ltr" />
                            </div>
                             <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Username</label>
                                <Input defaultValue="apikey" dir="ltr" />
                            </div>
                             <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Password</label>
                                <Input type="password" value="************************" dir="ltr" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button variant="outline" className="gap-2">
                                Send Test Email
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )}
        
         {activeTab === 'system' && (
             <div className="space-y-6">
                <Card className="border-gray-100 shadow-sm">
                     <div className="p-6 border-b border-gray-50">
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <CloudCog className="size-5 text-gray-500" />
                            الصيانة والنسخ الاحتياطي
                        </h2>
                    </div>
                     <CardContent className="p-6 space-y-6">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="space-y-0.5">
                                <div className="font-bold text-sm text-gray-900">وضع الصيانة (Maintenance Mode)</div>
                                <div className="text-xs text-gray-500">إيقاف النظام مؤقتاً لجميع المستخدمين باستثناء الأدمن</div>
                            </div>
                            <Button variant="danger" size="sm">تفعيل وضع الصيانة</Button>
                        </div>

                         <div className="space-y-4 pt-4 border-t border-gray-100">
                            <div className="font-medium text-sm text-gray-900">جدولة النسخ الاحتياطي</div>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-3 border border-blue-200 bg-blue-50 rounded-lg cursor-pointer text-center">
                                    <div className="text-sm font-bold text-blue-700">يومي</div>
                                    <div className="text-xs text-blue-500 mt-1">الساعة 00:00</div>
                                </div>
                                <div className="p-3 border border-gray-200 rounded-lg cursor-pointer text-center hover:border-blue-200 hover:bg-gray-50 transition-colors">
                                    <div className="text-sm font-bold text-gray-700">أسبوعي</div>
                                    <div className="text-xs text-gray-500 mt-1">الجمعة 02:00</div>
                                </div>
                                <div className="p-3 border border-gray-200 rounded-lg cursor-pointer text-center hover:border-blue-200 hover:bg-gray-50 transition-colors">
                                    <div className="text-sm font-bold text-gray-700">شهري</div>
                                    <div className="text-xs text-gray-500 mt-1">يوم 1 من كل شهر</div>
                                </div>
                             </div>
                         </div>
                    </CardContent>
                </Card>
            </div>
        )}

        <div className="flex justify-end pt-4 border-t border-gray-100">
             <Button className="gap-2 min-w-[120px]">
                <Save className="size-4" />
                حفظ التغييرات
            </Button>
        </div>
      </div>
    </div>
  );
}
