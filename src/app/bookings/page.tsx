"use client";

import { useState } from "react";
import { BusLayout } from "@/components/bookings/BusLayout";
import { PassengerForm } from "@/components/bookings/PassengerForm";
import { TripSelector } from "@/components/bookings/TripSelector";
import { BookingsTable } from "@/components/bookings/BookingsTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function BookingsPage() {
  const [view, setView] = useState<"list" | "create">("list");
  const [selectedTrip, setSelectedTrip] = useState<any>(null);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  if (view === "list") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">سجل الحجوزات</h1>
        </div>
        <BookingsTable onCreateNew={() => setView("create")} />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => setView("list")} className="text-gray-500 hover:text-gray-900">
          <ArrowRight className="h-4 w-4 ml-1" />
          عودة للسجل
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">حجز تذكرة جديدة</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Right Column: Trip Selection & Bus Layout */}
        <div className="lg:col-span-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. اختر الرحلة</CardTitle>
            </CardHeader>
            <CardContent>
              <TripSelector onSelect={(trip) => {
                setSelectedTrip(trip);
                setSelectedSeats([]); // Reset seats when trip changes
              }} />
            </CardContent>
          </Card>

          {selectedTrip && (
            <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CardHeader>
                <CardTitle>2. اختر المقاعد</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center bg-gray-50 py-8 rounded-b-lg">
                <BusLayout onSeatSelect={setSelectedSeats} />
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Left Column: Passenger Details & Summary (Sticky) */}
        <div className="lg:col-span-4">
          <div className="sticky top-6">
            <Card className={!selectedTrip ? "opacity-50 pointer-events-none" : ""}>
              <CardHeader>
                <CardTitle>3. بيانات الحجز</CardTitle>
              </CardHeader>
              <CardContent>
                <PassengerForm selectedSeats={selectedSeats} trip={selectedTrip} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

