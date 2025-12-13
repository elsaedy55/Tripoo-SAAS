"use client";

import { Button } from "@/components/ui/Button";
import { Wifi, Tv, Wind, Coffee, Zap, Armchair, Edit, Trash2, MoreHorizontal, Map, Search, Plus, Filter } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { SeatMapPreview } from "./SeatMapPreview";

const classes = [
  {
    id: 1,
    name: "VIP",
    description: "أعلى مستويات الراحة والرفاهية",
    services: ["wifi", "wc", "screen", "ac", "meal", "charger"],
    defaultPrice: 350,
    seatCount: 30,
    layout: "1x2",
  },
  {
    id: 2,
    name: "First Class",
    description: "راحة مميزة بسعر مناسب",
    services: ["wifi", "ac", "screen", "charger"],
    defaultPrice: 250,
    seatCount: 45,
    layout: "2x2",
  },
  {
    id: 3,
    name: "Economy",
    description: "الخيار الاقتصادي للرحلات القصيرة",
    services: ["ac"],
    defaultPrice: 180,
    seatCount: 50,
    layout: "2x2",
  },
];

const serviceNames: Record<string, string> = {
  wifi: "WiFi",
  wc: "حمام",
  screen: "شاشة",
  ac: "تكييف",
  meal: "وجبة",
  charger: "شاحن"
};

export function ClassesList() {
  const [selectedClass, setSelectedClass] = useState<typeof classes[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");

  const allServices = Array.from(new Set(classes.flatMap(c => c.services)));

  const filteredClasses = classes.filter((cls) => {
    const matchesSearch = cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.description.includes(searchQuery);
    const matchesService = serviceFilter === "all" || cls.services.includes(serviceFilter);
    
    return matchesSearch && matchesService;
  });

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-1">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="بحث باسم الفئة..."
                className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Service Filter */}
            <div className="relative w-full sm:w-48">
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
              >
                <option value="all">كل الخدمات</option>
                {allServices.map(service => (
                  <option key={service} value={service}>{serviceNames[service] || service}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Add Button */}
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto shrink-0">
            <Plus className="h-4 w-4" />
            <span>إضافة فئة جديدة</span>
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">اسم الفئة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">التخطيط</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">عدد المقاعد</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">السعر الافتراضي</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الخدمات</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">إجراءات</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredClasses.length > 0 ? (
                filteredClasses.map((cls) => (
                  <tr key={cls.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-2 h-10 rounded-r-md -mr-6 ${
                          cls.name === "VIP" ? "bg-purple-600" : 
                          cls.name === "First Class" ? "bg-blue-600" : "bg-gray-400"
                        }`}></div>
                        <div className="mr-6">
                          <div className="text-sm font-bold text-gray-900">{cls.name}</div>
                          <div className="text-xs text-gray-500">{cls.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Armchair className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-700" dir="ltr">{cls.layout.replace('x', ' + ')}</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mr-2 text-blue-600 hover:bg-blue-50"
                          onClick={() => setSelectedClass(cls)}
                        >
                          <Map className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {cls.seatCount} كرسي
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                      {cls.defaultPrice} ج.م
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {cls.services.includes("wifi") && <ServiceIcon icon={Wifi} title="WiFi" />}
                        {cls.services.includes("ac") && <ServiceIcon icon={Wind} title="تكييف" />}
                        {cls.services.includes("screen") && <ServiceIcon icon={Tv} title="شاشة" />}
                        {cls.services.includes("wc") && <ServiceIcon icon={Coffee} title="حمام" />}
                        {cls.services.includes("charger") && <ServiceIcon icon={Zap} title="شاحن" />}
                        {cls.services.includes("meal") && <ServiceIcon icon={Coffee} title="وجبة" />}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-600 hover:bg-blue-50 rounded-full" title="تعديل">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 rounded-full" title="حذف">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد نتائج</h3>
                      <p className="text-sm">لم نتمكن من العثور على أي فئات تطابق بحثك.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Modal 
        isOpen={!!selectedClass} 
        onClose={() => setSelectedClass(null)} 
        title={`مخطط مقاعد: ${selectedClass?.name}`}
      >
        {selectedClass && (
          <div className="flex flex-col items-center">
            <div className="mb-4 text-sm text-gray-500">
              تخطيط {selectedClass.layout.replace('x', ' + ')} • {selectedClass.seatCount} مقعد
            </div>
            <SeatMapPreview layout={selectedClass.layout} seatCount={selectedClass.seatCount} />
          </div>
        )}
      </Modal>
    </div>
  );
}

function ServiceIcon({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="p-1.5 bg-gray-100 rounded-md text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors" title={title}>
      <Icon className="h-4 w-4" />
    </div>
  );
}
