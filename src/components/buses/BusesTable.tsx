"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Edit, Trash2, Eye, Settings, MapPin, Search, Filter, Bus, Building2 } from "lucide-react";
import { useState } from "react";

const buses = [
  { 
    id: 101, 
    plate: "أ ب ج 123", 
    class: "VIP", 
    branch: "فرع القاهرة",
    garage: "جراج المنيب", 
    status: "active",
    lastTrip: "القاهرة - شرم الشيخ (أمس)",
    nextMaintenance: "2023-12-20"
  },
  { 
    id: 102, 
    plate: "س ص ع 456", 
    class: "First Class", 
    branch: "فرع الإسكندرية",
    garage: "جراج العامرية", 
    status: "maintenance",
    lastTrip: "الإسكندرية - القاهرة (منذ يومين)",
    nextMaintenance: "2023-12-15"
  },
  { 
    id: 103, 
    plate: "م ن ه 789", 
    class: "VIP", 
    branch: "فرع القاهرة",
    garage: "جراج المنيب", 
    status: "active",
    lastTrip: "القاهرة - الغردقة (اليوم)",
    nextMaintenance: "2024-01-05"
  },
  { 
    id: 104, 
    plate: "د ذ ر 321", 
    class: "Economy", 
    branch: "فرع شرم الشيخ",
    garage: "جراج الرويسات", 
    status: "stopped",
    lastTrip: "شرم الشيخ - القاهرة (منذ أسبوع)",
    nextMaintenance: "2023-12-10"
  },
  { 
    id: 105, 
    plate: "ك ل م 555", 
    class: "First Class", 
    branch: "فرع القاهرة",
    garage: "جراج السلام", 
    status: "active",
    lastTrip: "القاهرة - أسيوط (أمس)",
    nextMaintenance: "2023-12-25"
  },
];

export function BusesTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [classFilter, setClassFilter] = useState("all");
  const [branchFilter, setBranchFilter] = useState("all");

  // Extract unique branches
  const branches = Array.from(new Set(buses.map(b => b.branch)));

  const filteredBuses = buses.filter((bus) => {
    const matchesSearch =
      bus.plate.includes(searchQuery) ||
      bus.id.toString().includes(searchQuery) ||
      bus.garage.includes(searchQuery);

    const matchesStatus = statusFilter === "all" || bus.status === statusFilter;
    const matchesClass = classFilter === "all" || bus.class === classFilter;
    const matchesBranch = branchFilter === "all" || bus.branch === branchFilter;

    return matchesSearch && matchesStatus && matchesClass && matchesBranch;
  });

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between">
          
          {/* Search */}
          <div className="relative w-full xl:w-64 shrink-0">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="بحث برقم اللوحة أو الجراج..."
              className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Middle Filters: Branch */}
          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto flex-1">
            <div className="relative flex-1">
              <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={branchFilter}
                onChange={(e) => setBranchFilter(e.target.value)}
              >
                <option value="all">كل الفروع</option>
                {branches.map(branch => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Right Filters: Status, Class */}
          <div className="flex gap-3 w-full xl:w-auto shrink-0">
            <div className="relative flex-1 xl:flex-none">
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full xl:w-40 pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">كل الحالات</option>
                <option value="active">شغال</option>
                <option value="maintenance">في الصيانة</option>
                <option value="stopped">متوقف</option>
              </select>
            </div>

            <div className="relative flex-1 xl:flex-none">
              <Bus className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full xl:w-40 pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
              >
                <option value="all">كل الفئات</option>
                <option value="VIP">VIP</option>
                <option value="First Class">First Class</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">رقم الأتوبيس</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">رقم اللوحة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الفئة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الفرع / الجراج</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">آخر رحلة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الصيانة القادمة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الحالة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredBuses.length > 0 ? (
                filteredBuses.map((bus) => (
                  <tr key={bus.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">#{bus.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bus.plate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        bus.class === "VIP" ? "bg-purple-50 text-purple-700 border-purple-200" :
                        bus.class === "First Class" ? "bg-blue-50 text-blue-700 border-blue-200" :
                        "bg-gray-50 text-gray-700 border-gray-200"
                      }`}>
                        {bus.class}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">{bus.branch}</span>
                        <span className="text-xs text-gray-500">{bus.garage}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bus.lastTrip}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bus.nextMaintenance}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={bus.status === "active" ? "success" : bus.status === "maintenance" ? "warning" : "danger"} className="shadow-sm">
                        {bus.status === "active" ? "شغال" : bus.status === "maintenance" ? "في الصيانة" : "متوقف"}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-600 hover:bg-blue-50 rounded-full" title="التفاصيل">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-orange-600 hover:bg-orange-50 rounded-full" title="تغيير الحالة">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-green-600 hover:bg-green-50 rounded-full" title="تغيير الجراج">
                          <MapPin className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد نتائج</h3>
                      <p className="text-sm">لم نتمكن من العثور على أي أتوبيسات تطابق بحثك.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
