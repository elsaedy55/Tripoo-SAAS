import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import DashboardLayout from "@/components/layout/DashboardLayout";
import LogsTable from "@/components/logs/LogsTable";
import { Download, Search, Filter, ShieldAlert, AlertCircle, CheckCircle, ChevronDown, Calendar, FileText, Building2 } from "lucide-react";

export default function LogsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">سجلات النظام</h1>
            <p className="text-gray-500 mt-2">مراقبة نشاط النظام، عمليات تسجيل الدخول، والأحداث الأمنية.</p>
          </div>
          <div className="flex items-center gap-3">
             <Button variant="outline" className="gap-2 bg-white">
              <Download className="size-4" />
              تصدير السجلات (CSV)
            </Button>
          </div>
        </div>

        {/* Filters & Search */}
        <Card className="border-gray-100 shadow-sm">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                <input
                  type="text"
                  placeholder="بحث في السجلات بالكود، المستخدم، أو IP..."
                  className="w-full h-10 pr-10 pl-4 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                 {/* Company Filter */}
                 <div className="relative w-full md:w-[180px]">
                    <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                    <select className="h-10 w-full appearance-none bg-white border border-gray-200 rounded-lg pr-10 pl-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-blue-300">
                        <option value="">جميع الشركات</option>
                        <option value="tripoo">Tripoo</option>
                        <option value="alnoor">شركة النور للنقل</option>
                        <option value="gobus">جو باص</option>
                        <option value="royal">رويال باص</option>
                        <option value="mowasalat">مواصلات مصر</option>
                        <option value="golden">الذهبية للسياحة</option>
                        <option value="eastdelta">شرق الدلتا</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                 </div>

                 {/* Module Filter */}
                 <div className="relative w-full md:w-[160px]">
                    <FileText className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                    <select className="h-10 w-full appearance-none bg-white border border-gray-200 rounded-lg pr-10 pl-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-blue-300">
                        <option value="">كل الوحدات</option>
                        <option value="auth">المصادقة</option>
                        <option value="system">النظام</option>
                        <option value="security">الأمان</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                 </div>

                 {/* Status Filter */}
                 <div className="relative w-full md:w-[160px]">
                    <ShieldAlert className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                    <select className="h-10 w-full appearance-none bg-white border border-gray-200 rounded-lg pr-10 pl-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-blue-300">
                        <option value="">كل الحالات</option>
                        <option value="success">ناجح</option>
                        <option value="warning">تحذير</option>
                        <option value="error">خطأ</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                 </div>
                 
                  {/* Date Filter */}
                 <div className="relative w-full md:w-[160px]">
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                     <select className="h-10 w-full appearance-none bg-white border border-gray-200 rounded-lg pr-10 pl-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-blue-300">
                        <option value="">الفترة الزمنية</option>
                        <option value="today">اليوم</option>
                        <option value="week">آخر أسبوع</option>
                        <option value="month">آخر شهر</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                 </div>

                 <Button variant="outline" className="gap-2 bg-white w-full md:w-auto hover:bg-gray-50 hover:text-blue-600 transition-colors">
                  <Filter className="size-4" />
                  خيارات
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             <Card className="border-gray-100 shadow-sm p-4 flex items-center gap-4 border-r-4 border-r-transparent hover:border-r-blue-500 transition-all">
                <div className="size-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <FileText className="size-5" />
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-medium">إجمالي السجلات</p>
                    <p className="text-lg font-bold text-gray-900">12,543</p>
                </div>
             </Card>
             <Card className="border-gray-100 shadow-sm p-4 flex items-center gap-4 border-r-4 border-r-transparent hover:border-r-green-500 transition-all">
                <div className="size-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                    <CheckCircle className="size-5" />
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-medium">عمليات ناجحة</p>
                    <p className="text-lg font-bold text-gray-900">12,400</p>
                </div>
             </Card>
             <Card className="border-gray-100 shadow-sm p-4 flex items-center gap-4 border-r-4 border-r-transparent hover:border-r-yellow-500 transition-all">
                <div className="size-10 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600">
                    <AlertCircle className="size-5" />
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-medium">تحذيرات أمنية</p>
                    <p className="text-lg font-bold text-gray-900">120</p>
                </div>
             </Card>
             <Card className="border-gray-100 shadow-sm p-4 flex items-center gap-4 border-r-4 border-r-transparent hover:border-r-red-500 transition-all">
                <div className="size-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                    <ShieldAlert className="size-5" />
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-medium">أخطاء حرجة</p>
                    <p className="text-lg font-bold text-gray-900">23</p>
                </div>
             </Card>
        </div>

        {/* Logs Table */}
        <div>
           <LogsTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
