"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Edit, Trash2, Eye, Users, Search, Filter, Calendar, Bus, MapPin } from "lucide-react";
import { useState } from "react";

const trips = [
  { 
    id: 1, 
    route: "القاهرة - الإسكندرية", 
    date: "13/12/2025", 
    time: "08:00 AM", 
    bus: "أ ب ج 123", 
    class: "VIP",
    booked: 28, 
    capacity: 30,
    status: "active" 
  },
  { 
    id: 2, 
    route: "القاهرة - شرم الشيخ", 
    date: "13/12/2025", 
    time: "09:30 AM", 
    bus: "م ن ه 789", 
    class: "First Class",
    booked: 15, 
    capacity: 45,
    status: "scheduled" 
  },
  { 
    id: 3, 
    route: "أسيوط - القاهرة", 
    date: "13/12/2025", 
    time: "07:00 AM", 
    bus: "ك ل م 555", 
    class: "Economy",
    booked: 50, 
    capacity: 50,
    status: "finished" 
  },
  { 
    id: 4, 
    route: "الغردقة - القاهرة", 
    date: "14/12/2025", 
    time: "10:00 AM", 
    bus: "د ذ ر 321", 
    class: "VIP",
    booked: 0, 
    capacity: 30,
    status: "cancelled" 
  },
];

export function TripsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [classFilter, setClassFilter] = useState("all");
  const [fromFilter, setFromFilter] = useState("all");
  const [toFilter, setToFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");

  // Extract unique origins and destinations
  const origins = Array.from(new Set(trips.map(t => t.route.split(" - ")[0])));
  const destinations = Array.from(new Set(trips.map(t => t.route.split(" - ")[1])));

  const filteredTrips = trips.filter((trip) => {
    const [origin, destination] = trip.route.split(" - ");
    
    const matchesSearch =
      trip.route.includes(searchQuery) ||
      trip.bus.includes(searchQuery) ||
      trip.class.includes(searchQuery) ||
      trip.date.includes(searchQuery);

    const matchesStatus = statusFilter === "all" || trip.status === statusFilter;
    const matchesClass = classFilter === "all" || trip.class === classFilter;
    const matchesFrom = fromFilter === "all" || origin === fromFilter;
    const matchesTo = toFilter === "all" || destination === toFilter;
    
    // Simple date string matching for MVP (assuming format DD/MM/YYYY)
    // In a real app, use proper date objects/libraries
    const matchesDate = !dateFilter || trip.date.split('/').reverse().join('-') === dateFilter;

    return matchesSearch && matchesStatus && matchesClass && matchesFrom && matchesTo && matchesDate;
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
              placeholder="بحث عن رحلة..."
              className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Middle Filters: From, To, Date */}
          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto flex-1">
            <div className="relative flex-1">
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={fromFilter}
                onChange={(e) => setFromFilter(e.target.value)}
              >
                <option value="all">من (الكل)</option>
                {origins.map(origin => (
                  <option key={origin} value={origin}>{origin}</option>
                ))}
              </select>
            </div>

            <div className="relative flex-1">
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={toFilter}
                onChange={(e) => setToFilter(e.target.value)}
              >
                <option value="all">إلى (الكل)</option>
                {destinations.map(dest => (
                  <option key={dest} value={dest}>{dest}</option>
                ))}
              </select>
            </div>

            <div className="relative flex-1">
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="date"
                className="w-full pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm hover:bg-gray-50 transition-colors text-gray-600"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
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
                <option value="active">جارية الآن</option>
                <option value="scheduled">مجدولة</option>
                <option value="finished">انتهت</option>
                <option value="cancelled">ملغاة</option>
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
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">خط السير</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">التاريخ والوقت</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الأتوبيس</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الفئة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">نسبة الإشغال</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الحالة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTrips.length > 0 ? (
                filteredTrips.map((trip) => {
                  const remaining = trip.capacity - trip.booked;
                  const occupancy = (trip.booked / trip.capacity) * 100;
                  
                  return (
                    <tr key={trip.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-gray-900">{trip.route}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-900">{trip.time}</span>
                          <span className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <Calendar className="w-3 h-3" />
                            {trip.date}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono bg-gray-50 rounded w-fit mx-6">
                        {trip.bus}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          trip.class === "VIP" ? "bg-purple-50 text-purple-700 border-purple-200" :
                          trip.class === "First Class" ? "bg-blue-50 text-blue-700 border-blue-200" :
                          "bg-gray-50 text-gray-700 border-gray-200"
                        }`}>
                          {trip.class}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full max-w-35">
                          <div className="flex justify-between text-xs mb-1.5">
                            <span className="font-medium text-gray-700">{trip.booked} / {trip.capacity}</span>
                            <span className="text-gray-500">{Math.round(occupancy)}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-500 ${
                                occupancy > 90 ? "bg-red-500" : occupancy > 50 ? "bg-green-500" : "bg-blue-500"
                              }`} 
                              style={{ width: `${occupancy}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge variant={
                          trip.status === "active" ? "success" : 
                          trip.status === "scheduled" ? "info" : 
                          trip.status === "finished" ? "default" : "danger"
                        } className="shadow-sm">
                          {trip.status === "active" ? "جارية الآن" : 
                           trip.status === "scheduled" ? "مجدولة" : 
                           trip.status === "finished" ? "انتهت" : "ملغاة"}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-600 hover:bg-blue-50 rounded-full" title="التفاصيل">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-600 hover:bg-gray-100 rounded-full" title="تعديل">
                            <Edit className="h-4 w-4" />
                          </Button>
                          {trip.status === "scheduled" && (
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 rounded-full" title="إلغاء">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد نتائج</h3>
                      <p className="text-sm">لم نتمكن من العثور على أي رحلات تطابق بحثك.</p>
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
