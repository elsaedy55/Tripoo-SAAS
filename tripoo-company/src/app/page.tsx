import { Bus, Wrench, Map, Ticket, Plus, Calendar, Users, ArrowUpRight, Bell } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ActiveBusesTable } from "@/components/dashboard/ActiveBusesTable";
import { OngoingTripsTable } from "@/components/dashboard/OngoingTripsTable";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">لوحة التحكم</h1>
          <p className="text-gray-500 mt-2">مرحباً بك، إليك ملخص أداء الأسطول اليوم.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/bookings">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-sm hover:shadow-md transition-all">
              <Plus className="h-4 w-4" />
              حجز جديد
            </Button>
          </Link>
          <Button variant="outline" className="gap-2 bg-white hover:bg-gray-50">
            <Calendar className="h-4 w-4" />
            جدول الرحلات
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="عدد الأتوبيسات الشغالة"
          value="42"
          icon={Bus}
          trend="2"
          trendUp={true}
          color="blue"
        />
        <StatsCard
          title="أتوبيسات في الصيانة"
          value="3"
          icon={Wrench}
          trend="1"
          trendUp={true}
          color="orange"
        />
        <StatsCard
          title="رحلات النهارده"
          value="18"
          icon={Map}
          color="purple"
        />
        <StatsCard
          title="حجوزات النهارده"
          value="156"
          icon={Ticket}
          trend="12%"
          trendUp={true}
          color="green"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Right Column (2/3 width) */}
        <div className="xl:col-span-2 space-y-8">
          <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Map className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">الرحلات الجارية الآن</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-xs gap-1">
                عرض الكل <ArrowUpRight className="h-3 w-3" />
              </Button>
            </CardHeader>
            <CardContent className="pt-4">
              <OngoingTripsTable />
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Bus className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">حالة الأسطول</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-xs gap-1">
                إدارة الأسطول <ArrowUpRight className="h-3 w-3" />
              </Button>
            </CardHeader>
            <CardContent className="pt-4">
              <ActiveBusesTable />
            </CardContent>
          </Card>
        </div>

        {/* Left Column (1/3 width) - Quick Actions & Summary */}
        <div className="space-y-8">
          {/* Quick Actions Card */}
          <section>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">إجراءات سريعة</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-3 bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-sm">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                        <Plus className="h-6 w-6" />
                    </div>
                    <span className="font-medium">رحلة جديدة</span>
                </Button>
                <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-3 bg-white border-gray-200 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all shadow-sm">
                    <div className="p-3 bg-green-100 text-green-600 rounded-full">
                        <Users className="h-6 w-6" />
                    </div>
                    <span className="font-medium">سائق جديد</span>
                </Button>
                <Button variant="outline" className="h-auto py-6 flex flex-col items-center gap-3 bg-white border-gray-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-700 transition-all shadow-sm col-span-2">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-full">
                        <Wrench className="h-6 w-6" />
                    </div>
                    <span className="font-medium">تسجيل طلب صيانة</span>
                </Button>
            </div>
          </section>

          {/* Recent Activity / Notifications Placeholder */}
          <Card className="border-gray-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <Bell className="h-5 w-5 text-gray-600" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">آخر التحديثات</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-6">
                {[
                  { text: "تم اكتمال حجز رحلة القاهرة - الإسكندرية", time: "منذ 15 دقيقة", color: "bg-green-500", ring: "ring-green-100" },
                  { text: "أتوبيس رقم 154 دخل الصيانة", time: "منذ ساعة", color: "bg-orange-500", ring: "ring-orange-100" },
                  { text: "تم إضافة سائق جديد: محمد أحمد", time: "منذ ساعتين", color: "bg-blue-500", ring: "ring-blue-100" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start relative">
                    {i !== 2 && <div className="absolute top-2 right-1.25 w-0.5 h-full bg-gray-100 -z-10" />}
                    <div className={`mt-1.5 w-3 h-3 rounded-full shrink-0 ${item.color} ring-4 ${item.ring}`} />
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
  );
}
