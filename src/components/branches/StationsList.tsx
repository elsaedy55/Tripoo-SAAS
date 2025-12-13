"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Plus, MapPin, Search, Edit, Trash2, Building2 } from "lucide-react";

const stations = [
  { id: 1, name: "محطة رمسيس", branch: "فرع القاهرة الرئيسي", city: "القاهرة", type: "رئيسية" },
  { id: 2, name: "محطة عبود", branch: "فرع القاهرة الرئيسي", city: "القاهرة", type: "فرعية" },
  { id: 3, name: "محطة سيدي جابر", branch: "فرع الإسكندرية", city: "الإسكندرية", type: "رئيسية" },
  { id: 4, name: "محطة محرم بك", branch: "فرع الإسكندرية", city: "الإسكندرية", type: "فرعية" },
  { id: 5, name: "محطة شرم الشيخ", branch: "فرع شرم الشيخ", city: "شرم الشيخ", type: "رئيسية" },
  { id: 6, name: "محطة الطور", branch: "فرع شرم الشيخ", city: "جنوب سيناء", type: "فرعية" },
];

export function StationsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [branchFilter, setBranchFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // Extract unique branches and types
  const branches = Array.from(new Set(stations.map(s => s.branch)));
  const types = Array.from(new Set(stations.map(s => s.type)));

  const filteredStations = stations.filter((station) => {
    const matchesSearch = 
      station.name.includes(searchQuery) ||
      station.branch.includes(searchQuery) ||
      station.city.includes(searchQuery);
    
    const matchesBranch = branchFilter === "all" || station.branch === branchFilter;
    const matchesType = typeFilter === "all" || station.type === typeFilter;

    return matchesSearch && matchesBranch && matchesType;
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
              placeholder="بحث باسم المحطة، الفرع، أو المدينة..."
              className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Middle Filters: Branch & Type */}
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
            <div className="relative flex-1">
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">كل الأنواع</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Add Button */}
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full xl:w-auto shrink-0">
            <Plus className="h-4 w-4" />
            <span>إضافة محطة</span>
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">اسم المحطة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الفرع التابع له</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">المدينة / المنطقة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">النوع</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStations.length > 0 ? (
                filteredStations.map((station) => (
                  <tr key={station.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-gray-900">{station.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                        <Building2 className="h-4 w-4" />
                        {station.branch}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {station.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        station.type === "رئيسية" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"
                      }`}>
                        {station.type}
                      </span>
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
                  <td colSpan={5} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد نتائج</h3>
                      <p className="text-sm">لم نتمكن من العثور على أي محطات تطابق بحثك.</p>
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
