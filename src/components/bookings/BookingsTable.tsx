"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Search, Filter, Calendar, User, MapPin, CheckCircle, XCircle, Eye, Edit, Trash2, Plus, Bus } from "lucide-react";

const bookings = [
  { id: "BK-1001", passenger: "أحمد محمد", trip: "القاهرة - الإسكندرية", date: "14/12/2025", time: "08:00 ص", seats: ["1A", "1B"], price: "450 ج.م", status: "confirmed" },
  { id: "BK-1002", passenger: "سارة علي", trip: "القاهرة - شرم الشيخ", date: "15/12/2025", time: "10:00 م", seats: ["5C"], price: "350 ج.م", status: "pending" },
  { id: "BK-1003", passenger: "محمود حسن", trip: "الإسكندرية - القاهرة", date: "14/12/2025", time: "02:00 م", seats: ["3A"], price: "225 ج.م", status: "cancelled" },
  { id: "BK-1004", passenger: "خالد جمال", trip: "القاهرة - أسيوط", date: "16/12/2025", time: "07:00 ص", seats: ["2B", "2C"], price: "600 ج.م", status: "confirmed" },
  { id: "BK-1005", passenger: "منى السيد", trip: "الغردقة - القاهرة", date: "18/12/2025", time: "01:00 م", seats: ["4A"], price: "300 ج.م", status: "confirmed" },
];

interface BookingsTableProps {
  onCreateNew: () => void;
}

export function BookingsTable({ onCreateNew }: BookingsTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [tripFilter, setTripFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  // Extract unique values
  const trips = Array.from(new Set(bookings.map(b => b.trip)));
  const dates = Array.from(new Set(bookings.map(b => b.date)));

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.passenger.includes(searchQuery) ||
      booking.id.includes(searchQuery) ||
      booking.trip.includes(searchQuery);

    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    const matchesTrip = tripFilter === "all" || booking.trip === tripFilter;
    const matchesDate = dateFilter === "all" || booking.date === dateFilter;

    return matchesSearch && matchesStatus && matchesTrip && matchesDate;
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
              placeholder="بحث برقم الحجز، اسم الراكب، أو الرحلة..."
              className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Middle Filters: Trip & Date */}
          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto flex-1">
            {/* Trip Filter */}
            <div className="relative flex-1">
              <Bus className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={tripFilter}
                onChange={(e) => setTripFilter(e.target.value)}
              >
                <option value="all">كل الرحلات</option>
                {trips.map(trip => (
                  <option key={trip} value={trip}>{trip}</option>
                ))}
              </select>
            </div>

            {/* Date Filter */}
            <div className="relative flex-1">
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="all">كل التواريخ</option>
                {dates.map(date => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Filters & Actions */}
          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto shrink-0">
            <div className="relative flex-1 sm:flex-none">
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full sm:w-40 pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">كل الحالات</option>
                <option value="confirmed">مؤكد</option>
                <option value="pending">قيد الانتظار</option>
                <option value="cancelled">ملغي</option>
              </select>
            </div>

            <Button onClick={onCreateNew} className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shrink-0">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">حجز جديد</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">رقم الحجز</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الراكب</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الرحلة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">المقاعد</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">السعر</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الحالة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-bold text-gray-900 font-mono">{booking.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                          <User className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{booking.passenger}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">{booking.trip}</span>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                          <Calendar className="h-3 w-3" />
                          <span>{booking.date}</span>
                          <span className="mx-1">•</span>
                          <span>{booking.time}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-1">
                        {booking.seats.map(seat => (
                          <span key={seat} className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">
                            {seat}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      {booking.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={booking.status === "confirmed" ? "success" : booking.status === "pending" ? "warning" : "danger"} className="shadow-sm">
                        {booking.status === "confirmed" ? "مؤكد" : booking.status === "pending" ? "قيد الانتظار" : "ملغي"}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-600 hover:bg-gray-100 rounded-full" title="التفاصيل">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-600 hover:bg-blue-50 rounded-full" title="تعديل">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {booking.status !== "cancelled" && (
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 rounded-full" title="إلغاء الحجز">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد نتائج</h3>
                      <p className="text-sm">لم نتمكن من العثور على أي حجوزات تطابق بحثك.</p>
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
