import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import SubscriptionsTable from "@/components/subscriptions/SubscriptionsTable";
import { Plus, Download, Search, Filter, CreditCard, Receipt, Calendar, ChevronDown } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function SubscriptionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">إدارة الاشتراكات</h1>
            <p className="text-gray-500 mt-2">متابعة الاشتراكات، الفواتير، وحالة الدفع للشركات المشتركة.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="gap-2 shadow-lg shadow-blue-500/20">
              <Plus className="size-4" />
              إضافة اشتراك
            </Button>
            <Button variant="outline" className="gap-2 bg-white">
              <Download className="size-4" />
              تصدير التقرير
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
                  placeholder="بحث باسم الشركة أو رقم الفاتورة..."
                  className="w-full h-10 pr-10 pl-4 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                 {/* Plan Filter */}
                 <div className="relative w-full md:w-[160px]">
                    <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                    <select className="h-10 w-full appearance-none bg-white border border-gray-200 rounded-lg pr-10 pl-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-blue-300">
                        <option value="">كل الخطط</option>
                        <option value="basic">Basic</option>
                        <option value="pro">Pro</option>
                        <option value="enterprise">Enterprise</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                 </div>

                 {/* Status Filter */}
                 <div className="relative w-full md:w-[160px]">
                    <Receipt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                    <select className="h-10 w-full appearance-none bg-white border border-gray-200 rounded-lg pr-10 pl-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-blue-300">
                        <option value="">حالة الاشتراك</option>
                        <option value="active">نشط</option>
                        <option value="expired">منتهي</option>
                        <option value="pending">معلق</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                 </div>
                 
                  {/* Period Filter */}
                 <div className="relative w-full md:w-[160px]">
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                    <select className="h-10 w-full appearance-none bg-white border border-gray-200 rounded-lg pr-10 pl-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-blue-300">
                        <option value="">فترة الفوترة</option>
                        <option value="monthly">شهري</option>
                        <option value="yearly">سنوي</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                 </div>

                 <Button variant="outline" className="gap-2 bg-white w-full md:w-auto hover:bg-gray-50 hover:text-blue-600 transition-colors">
                  <Filter className="size-4" />
                  فلتر
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Section (Optional - Good for dashboard feel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <Card className="border-gray-100 shadow-sm p-4 flex items-center gap-4">
                <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CreditCard className="size-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">إجمالي الإيرادات (السنوية)</p>
                    <p className="text-xl font-bold text-gray-900">450,000 ج.م</p>
                </div>
             </Card>
             <Card className="border-gray-100 shadow-sm p-4 flex items-center gap-4">
                <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Receipt className="size-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">الاشتراكات النشطة</p>
                    <p className="text-xl font-bold text-gray-900">24 شركة</p>
                </div>
             </Card>
             <Card className="border-gray-100 shadow-sm p-4 flex items-center gap-4">
                <div className="size-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <Calendar className="size-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">منتهي الصلاحية قريبًا</p>
                    <p className="text-xl font-bold text-gray-900">3 شركات</p>
                </div>
             </Card>
        </div>

        {/* Subscriptions Table */}
        <div>
           <SubscriptionsTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
