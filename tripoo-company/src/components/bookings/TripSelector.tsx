"use client";

import { useState, useEffect } from "react";
import { MapPin, Calendar, Search, ArrowLeft, CheckCircle2, Wifi, Coffee, Tv, Bus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";

// Mock Data
const cities = ["القاهرة", "الإسكندرية", "شرم الشيخ", "الغردقة", "أسوان", "الأقصر", "مرسى مطروح"];

const allTrips = [
  { 
    id: 1, 
    from: "القاهرة", 
    to: "الإسكندرية", 
    date: "2025-12-15", 
    departureTime: "08:00 AM", 
    arrivalTime: "11:00 AM",
    duration: "3 ساعات", 
    price: 150, 
    type: "VIP", 
    seatsAvailable: 12,
    amenities: ["wifi", "usb"]
  },
  { 
    id: 2, 
    from: "القاهرة", 
    to: "شرم الشيخ", 
    date: "2025-12-15", 
    departureTime: "10:00 AM", 
    arrivalTime: "04:00 PM",
    duration: "6 ساعات", 
    price: 250, 
    type: "First Class", 
    seatsAvailable: 5,
    amenities: ["wifi", "meal", "tv"]
  },
  { 
    id: 3, 
    from: "القاهرة", 
    to: "أسوان", 
    date: "2025-12-15", 
    departureTime: "09:00 PM", 
    arrivalTime: "09:00 AM",
    duration: "12 ساعة", 
    price: 400, 
    type: "VIP", 
    seatsAvailable: 20,
    amenities: ["wifi", "usb", "meal", "tv"]
  },
  { 
    id: 4, 
    from: "الإسكندرية", 
    to: "القاهرة", 
    date: "2025-12-15", 
    departureTime: "07:00 AM", 
    arrivalTime: "10:00 AM",
    duration: "3 ساعات", 
    price: 140, 
    type: "Economy", 
    seatsAvailable: 8,
    amenities: ["usb"]
  },
  { 
    id: 5, 
    from: "شرم الشيخ", 
    to: "القاهرة", 
    date: "2025-12-15", 
    departureTime: "02:00 PM", 
    arrivalTime: "08:00 PM",
    duration: "6 ساعات", 
    price: 260, 
    type: "First Class", 
    seatsAvailable: 15,
    amenities: ["wifi", "tv"]
  },
];

interface TripSelectorProps {
  onSelect: (trip: any) => void;
}

export function TripSelector({ onSelect }: TripSelectorProps) {
  const [selectedTripId, setSelectedTripId] = useState<number | null>(null);
  const [filters, setFilters] = useState({ from: "", to: "", date: "" });
  const [filteredTrips, setFilteredTrips] = useState(allTrips);

  const handleSearch = () => {
    const results = allTrips.filter((trip) => {
      const matchFrom = filters.from ? trip.from === filters.from : true;
      const matchTo = filters.to ? trip.to === filters.to : true;
      const matchDate = filters.date ? trip.date === filters.date : true;
      return matchFrom && matchTo && matchDate;
    });
    setFilteredTrips(results);
  };

  useEffect(() => {
    handleSearch();
  }, [filters]);

  const handleSelect = (trip: any) => {
    setSelectedTripId(trip.id);
    onSelect(trip);
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-3 h-3" />;
      case "meal": return <Coffee className="w-3 h-3" />;
      case "tv": return <Tv className="w-3 h-3" />;
      case "usb": return <div className="text-[10px] font-bold">USB</div>;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Bar - Compact & Clean */}
      <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* From */}
          <div className="relative bg-gray-50 rounded-xl px-4 py-2 hover:bg-gray-100 transition-colors">
            <label className="text-xs font-medium text-gray-500 block mb-1">من</label>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-blue-500 ml-2 shrink-0" />
              <select
                className="w-full bg-transparent border-none p-0 text-sm font-semibold text-gray-900 focus:ring-0 cursor-pointer"
                value={filters.from}
                onChange={(e) => setFilters({ ...filters, from: e.target.value })}
              >
                <option value="">كل المحطات</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {/* To */}
          <div className="relative bg-gray-50 rounded-xl px-4 py-2 hover:bg-gray-100 transition-colors">
            <label className="text-xs font-medium text-gray-500 block mb-1">إلى</label>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-red-500 ml-2 shrink-0" />
              <select
                className="w-full bg-transparent border-none p-0 text-sm font-semibold text-gray-900 focus:ring-0 cursor-pointer"
                value={filters.to}
                onChange={(e) => setFilters({ ...filters, to: e.target.value })}
              >
                <option value="">كل المحطات</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Date */}
          <div className="relative bg-gray-50 rounded-xl px-4 py-2 hover:bg-gray-100 transition-colors">
            <label className="text-xs font-medium text-gray-500 block mb-1">تاريخ السفر</label>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-gray-500 ml-2 shrink-0" />
              <input
                type="date"
                className="w-full bg-transparent border-none p-0 text-sm font-semibold text-gray-900 focus:ring-0 cursor-pointer"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1">
        <h3 className="text-base font-bold text-gray-900">
          الرحلات المتاحة
        </h3>
        <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
          {filteredTrips.length} رحلة
        </span>
      </div>

      {/* Results List */}
      <div className="space-y-4 max-h-150 overflow-y-auto pr-2 custom-scrollbar pb-4">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip) => {
            const isSelected = selectedTripId === trip.id;
            return (
              <div
                key={trip.id}
                onClick={() => handleSelect(trip)}
                className={clsx(
                  "group relative cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden",
                  isSelected
                    ? "border-blue-600 bg-white shadow-lg ring-1 ring-blue-600 transform scale-[1.01]"
                    : "border-gray-100 bg-white hover:border-blue-300 hover:shadow-md"
                )}
              >
                <div className="p-5">
                  <div className="flex flex-col md:flex-row gap-6">
                    
                    {/* Time & Route Section */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 rounded-md bg-gray-100 text-xs font-medium text-gray-600">
                            {trip.type}
                          </span>
                          <div className="flex gap-1">
                            {trip.amenities?.map((a, i) => (
                              <div key={i} className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-400" title={a}>
                                {getAmenityIcon(a)}
                              </div>
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 font-medium">{trip.date}</span>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Departure */}
                        <div className="text-center min-w-20">
                          <div className="text-xl font-bold text-gray-900">{trip.departureTime}</div>
                          <div className="text-sm font-medium text-gray-500 mt-1">{trip.from}</div>
                        </div>

                        {/* Duration Line */}
                        <div className="flex-1 flex flex-col items-center px-2">
                          <div className="text-xs text-gray-400 mb-1">{trip.duration}</div>
                          <div className="relative w-full h-px bg-gray-200">
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full border-2 border-gray-300 bg-white"></div>
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full border-2 border-gray-300 bg-white"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                              <Bus className="w-4 h-4 text-gray-300" />
                            </div>
                          </div>
                        </div>

                        {/* Arrival */}
                        <div className="text-center min-w-20">
                          <div className="text-xl font-bold text-gray-900">{trip.arrivalTime}</div>
                          <div className="text-sm font-medium text-gray-500 mt-1">{trip.to}</div>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px bg-gray-100 mx-2"></div>

                    {/* Price & Action Section */}
                    <div className="flex md:flex-col items-center justify-between md:justify-center gap-4 min-w-35">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {trip.price} <span className="text-sm font-medium text-gray-500">ج.م</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">للفرد الواحد</div>
                      </div>

                      <Button 
                        className={clsx(
                          "w-full rounded-xl transition-all duration-300",
                          isSelected 
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md" 
                            : "bg-gray-50 hover:bg-blue-50 text-blue-600 hover:text-blue-700 border border-blue-100"
                        )}
                      >
                        {isSelected ? (
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            تم الاختيار
                          </span>
                        ) : (
                          "اختر الرحلة"
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Footer Status Bar */}
                <div className={clsx(
                  "px-5 py-2 text-xs flex items-center justify-between border-t transition-colors",
                  isSelected ? "bg-blue-50/50 border-blue-100" : "bg-gray-50/50 border-gray-100"
                )}>
                  <span className={trip.seatsAvailable < 5 ? "text-red-600 font-medium" : "text-gray-500"}>
                    {trip.seatsAvailable < 5 ? `🔥 متبقي ${trip.seatsAvailable} مقاعد فقط` : `متبقي ${trip.seatsAvailable} مقعد`}
                  </span>
                  {isSelected && <span className="text-blue-700 font-medium">سيتم تأكيد الحجز في الخطوة التالية</span>}
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">لا توجد رحلات متاحة</h3>
            <p className="text-sm text-gray-500 max-w-xs mx-auto mb-6">
              لم نتمكن من العثور على رحلات تطابق معايير البحث الخاصة بك. جرب تغيير التاريخ أو المحطة.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setFilters({ from: "", to: "", date: "" });
                setFilteredTrips(allTrips);
              }}
              className="bg-white hover:bg-gray-50"
            >
              عرض كل الرحلات المتاحة
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}