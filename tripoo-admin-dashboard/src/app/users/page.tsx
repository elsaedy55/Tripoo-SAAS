import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import UsersTable from "@/components/users/UsersTable";
import { Plus, Download, Search, Filter, UserPlus, ChevronDown, Building2, ShieldCheck, Activity } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">إدارة المستخدمين</h1>
            <p className="text-gray-500 mt-2">إدارة حسابات المستخدمين، الصلاحيات، والوصول للنظام.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="gap-2 shadow-lg shadow-blue-500/20">
              <UserPlus className="size-4" />
              إضافة مستخدم
            </Button>
            <Button variant="outline" className="gap-2 bg-white">
              <Download className="size-4" />
              تصدير البيانات
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
                  placeholder="بحث عن الاسم، البريد، أو رقم الهاتف..."
                  className="w-full h-10 pr-10 pl-4 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                 {/* Company Filter */}
                 <div className="relative w-full md:w-[180px]">
                    <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                    <select className="h-10 w-full appearance-none bg-white border border-gray-200 rounded-lg pr-10 pl-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-blue-300">
                        <option value="">كل الشركات</option>
                        <option value="alnoor">شركة النور للنقل</option>
                        <option value="tripoo">Tripoo</option>
                        <option value="golden">الذهبية للسياحة</option>
                        <option value="gobus">جو باص</option>
                        <option value="royal">رويال باص</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                 </div>

                 {/* Role Filter */}
                 <div className="relative w-full md:w-[160px]">
                    <ShieldCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                    <select className="h-10 w-full appearance-none bg-white border border-gray-200 rounded-lg pr-10 pl-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-blue-300">
                        <option value="">كل الأدوار</option>
                        <option value="admin">سوبر أدمن</option>
                        <option value="manager">مدير شركة</option>
                        <option value="employee">موظف</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                 </div>

                 {/* Status Filter */}
                 <div className="relative w-full md:w-[160px]">
                    <Activity className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                    <select className="h-10 w-full appearance-none bg-white border border-gray-200 rounded-lg pr-10 pl-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-blue-300">
                        <option value="">كل الحالات</option>
                        <option value="active">نشط</option>
                        <option value="inactive">غير نشط</option>
                        <option value="banned">محظور</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
                 </div>

                 <Button variant="outline" className="gap-2 bg-white w-full md:w-auto hover:bg-gray-50 hover:text-blue-600 transition-colors">
                  <Filter className="size-4" />
                  فلتر متقدم
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <div>
           <UsersTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
