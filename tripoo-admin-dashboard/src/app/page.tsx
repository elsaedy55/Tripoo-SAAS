import DashboardLayout from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import RecentCompaniesTable from "@/components/dashboard/RecentCompaniesTable";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { 
    Building2, 
    Users, 
    Activity, 
    CreditCard, 
    Plus, 
    Download,
    Bell,
    Settings,
    Shield,
    FileText,
    ArrowUpRight
} from "lucide-react";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">لوحة التحكم الرئيسية</h1>
            <p className="text-gray-500 mt-2">نظرة عامة على أداء نظام Tripoo والشركات المشتركة.</p>
            </div>
            <div className="flex items-center gap-3">
            <Button className="gap-2 shadow-lg shadow-blue-500/20">
                <Plus className="size-4" />
                إضافة شركة جديدة
            </Button>
            <Button variant="outline" className="gap-2 bg-white">
                <Download className="size-4" />
                تصدير التقرير
            </Button>
            </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <StatCard
                title="إجمالي الشركات"
                value="124"
                change="+12%"
                isPositive={true}
                icon={Building2}
                color="blue"
            />
            <StatCard
                title="المستخدمين النشطين"
                value="8,549"
                change="+5.2%"
                isPositive={true}
                icon={Users}
                color="teal"
            />
            <StatCard
                title="إيرادات الشهر"
                value="$45,231"
                change="+18%"
                isPositive={true}
                icon={CreditCard}
                color="indigo"
            />
            <StatCard
                title="حالة النظام"
                value="99.9%"
                icon={Activity}
                color="green"
            />
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Right Column (2/3) */}
          <div className="xl:col-span-2 space-y-8">
             <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 pb-4">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-50 rounded-lg">
                        <Building2 className="size-5 text-blue-600" />
                        </div>
                        <CardTitle>آخر الشركات المنضمة</CardTitle>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-xs gap-1">
                        عرض الكل <ArrowUpRight className="size-3" />
                    </Button>
                </CardHeader>
                <div className="p-0">
                    <RecentCompaniesTable />
                </div>
             </Card>
          </div>

          {/* Left Column (1/3) */}
          <div className="space-y-8">
            {/* Quick Actions */}
             <section>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">إجراءات سريعة</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-3 bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-sm">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                            <Settings className="size-6" />
                        </div>
                        <span className="font-medium">إعدادات النظام</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-3 bg-white border-gray-200 hover:border-purple-500 hover:bg-purple-50 hover:text-purple-700 transition-all shadow-sm">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
                            <Shield className="size-6" />
                        </div>
                        <span className="font-medium">صلاحيات الأدمن</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-3 bg-white border-gray-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-700 transition-all shadow-sm col-span-2">
                        <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
                            <FileText className="size-6" />
                        </div>
                        <span className="font-medium">مراجعة سجلات النظام (Logs)</span>
                    </Button>
                </div>
             </section>

             {/* Notifications */}
             <Card className="border-gray-100 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 pb-4">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-50 rounded-lg">
                    <Bell className="size-5 text-gray-600" />
                    </div>
                    <CardTitle>تنبيهات النظام</CardTitle>
                </div>
                </CardHeader>
                <CardContent className="pt-4">
                <div className="space-y-6">
                    {[
                    { text: "تم تسجيل شركة جديدة: سوبر جيت", time: "منذ 10 دقائق", color: "bg-green-500", ring: "ring-green-100" },
                    { text: "ارتفاع في تحميل السيرفر (85%)", time: "منذ 45 دقيقة", color: "bg-red-500", ring: "ring-red-100" },
                    { text: "فشل في عملية دفع اشتراك #9921", time: "منذ 3 ساعات", color: "bg-orange-500", ring: "ring-orange-100" },
                    { text: "تم تحديث النظام للإصدار v2.4.0", time: "بالأمس", color: "bg-blue-500", ring: "ring-blue-100" },
                    ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start relative">
                        {i !== 3 && <div className="absolute top-2 right-1.5 w-0.5 h-full bg-gray-100 -z-10" />}
                        <div className={`mt-1.5 size-3 rounded-full shrink-0 ${item.color} ring-4 ${item.ring}`} />
                        <div>
                        <p className="text-sm text-gray-800 font-medium leading-none">{item.text}</p>
                        <p className="text-xs text-gray-400 mt-1.5">{item.time}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
