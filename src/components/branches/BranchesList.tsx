"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Plus, MapPin, Phone, User, Warehouse, Navigation, Search, Edit, Trash2 } from "lucide-react";

const branches = [
  {
    id: 1,
    name: "فرع القاهرة الرئيسي",
    address: "15 شارع رمسيس، وسط البلد",
    phone: "02-25751234",
    manager: "محمد أحمد",
    stats: { garages: 2, stations: 2 },
  },
  {
    id: 2,
    name: "فرع الإسكندرية",
    address: "محطة سيدي جابر، الإسكندرية",
    phone: "03-54321678",
    manager: "محمود حسن",
    stats: { garages: 1, stations: 2 },
  },
  {
    id: 3,
    name: "فرع شرم الشيخ",
    address: "شارع السلام، شرم الشيخ",
    phone: "069-3661234",
    manager: "علي إبراهيم",
    stats: { garages: 0, stations: 2 },
  },
];

export function BranchesList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBranches = branches.filter((branch) =>
    branch.name.includes(searchQuery) ||
    branch.address.includes(searchQuery) ||
    branch.manager.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="بحث باسم الفرع، العنوان، أو المدير..."
              className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Add Button */}
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
            <Plus className="h-4 w-4" />
            <span>إضافة فرع</span>
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">اسم الفرع</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">العنوان</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">رقم الهاتف</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">المدير</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الإحصائيات</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredBranches.length > 0 ? (
                filteredBranches.map((branch) => (
                  <tr key={branch.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">{branch.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {branch.address}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span dir="ltr">{branch.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="h-4 w-4 text-gray-400" />
                        {branch.manager}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                          <Warehouse className="h-3 w-3 text-gray-400" />
                          <span>{branch.stats.garages} جراجات</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                          <Navigation className="h-3 w-3 text-gray-400" />
                          <span>{branch.stats.stations} محطات</span>
                        </div>
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
                      <p className="text-sm">لم نتمكن من العثور على أي فروع تطابق بحثك.</p>
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
