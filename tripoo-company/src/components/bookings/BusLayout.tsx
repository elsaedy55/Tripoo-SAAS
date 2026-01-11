"use client";

import { useState } from "react";
import clsx from "clsx";
import { Armchair } from "lucide-react";

interface Seat {
  id: number;
  status: "available" | "booked" | "selected";
}

interface BusLayoutProps {
  onSeatSelect?: (selectedSeats: number[]) => void;
}

export function BusLayout({ onSeatSelect }: BusLayoutProps) {
  const [seats, setSeats] = useState<Seat[]>(
    Array.from({ length: 49 }, (_, i) => ({
      id: i + 1,
      status: Math.random() > 0.8 ? "booked" : "available",
    }))
  );

  const toggleSeat = (id: number) => {
    const newSeats = seats.map((seat) => {
      if (seat.id === id) {
        if (seat.status === "available") return { ...seat, status: "selected" as const };
        if (seat.status === "selected") return { ...seat, status: "available" as const };
      }
      return seat;
    });

    setSeats(newSeats);

    const selectedIds = newSeats
      .filter((s) => s.status === "selected")
      .map((s) => s.id);

    if (onSeatSelect) {
      onSeatSelect(selectedIds);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-gray-100 rounded-[3rem] border-2 border-gray-300 p-8 pb-12 shadow-xl w-fit">
        {/* Front of Bus */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-linear-to-b from-gray-200 to-gray-100 rounded-b-3xl border-b border-gray-300 flex items-end justify-center pb-4 mb-8">
          <div className="flex flex-col items-center gap-1">
            <div className="w-16 h-1 bg-gray-400 rounded-full"></div>
            <span className="text-xs font-bold text-gray-500">السائق</span>
            <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center">
               <div className="w-6 h-1 bg-gray-400 rounded-full transform rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-3">
          {/* Rows */}
          {Array.from({ length: 12 }).map((_, rowIndex) => {
             // Last row usually has 5 seats
             const isLastRow = rowIndex === 11;
             if (isLastRow) {
                 return (
                    <div key={rowIndex} className="flex gap-3 justify-center">
                        <SeatButton seat={seats[rowIndex * 4]} onClick={() => toggleSeat(seats[rowIndex * 4].id)} />
                        <SeatButton seat={seats[rowIndex * 4 + 1]} onClick={() => toggleSeat(seats[rowIndex * 4 + 1].id)} />
                        <SeatButton seat={seats[48]} onClick={() => toggleSeat(seats[48].id)} />
                        <SeatButton seat={seats[rowIndex * 4 + 2]} onClick={() => toggleSeat(seats[rowIndex * 4 + 2].id)} />
                        <SeatButton seat={seats[rowIndex * 4 + 3]} onClick={() => toggleSeat(seats[rowIndex * 4 + 3].id)} />
                    </div>
                 )
             }

             return (
                <div key={rowIndex} className="flex gap-3">
                    <div className="flex gap-3">
                    <SeatButton seat={seats[rowIndex * 4]} onClick={() => toggleSeat(seats[rowIndex * 4].id)} />
                    <SeatButton seat={seats[rowIndex * 4 + 1]} onClick={() => toggleSeat(seats[rowIndex * 4 + 1].id)} />
                    </div>
                    <div className="w-8 flex items-center justify-center text-xs text-gray-300 font-mono">
                        {rowIndex + 1}
                    </div> {/* Aisle */}
                    <div className="flex gap-3">
                    <SeatButton seat={seats[rowIndex * 4 + 2]} onClick={() => toggleSeat(seats[rowIndex * 4 + 2].id)} />
                    <SeatButton seat={seats[rowIndex * 4 + 3]} onClick={() => toggleSeat(seats[rowIndex * 4 + 3].id)} />
                    </div>
                </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-gray-400">
            <Armchair className="w-4 h-4" />
          </div>
          <span className="text-gray-600">متاح</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-200 border border-gray-300 rounded flex items-center justify-center text-gray-400">
            <Armchair className="w-4 h-4" />
          </div>
          <span className="text-gray-600">محجوز</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 border border-blue-700 rounded flex items-center justify-center text-white">
            <Armchair className="w-4 h-4" />
          </div>
          <span className="text-gray-900 font-medium">محدد</span>
        </div>
      </div>
    </div>
  );
}

function SeatButton({ seat, onClick }: { seat: Seat; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={seat.status === "booked"}
      className={clsx(
        "group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200",
        seat.status === "available" && "bg-white border border-gray-300 hover:border-blue-500 hover:shadow-md text-gray-500 hover:text-blue-600",
        seat.status === "booked" && "bg-gray-200 border border-gray-300 text-gray-400 cursor-not-allowed opacity-70",
        seat.status === "selected" && "bg-blue-600 border border-blue-700 text-white shadow-md transform scale-105"
      )}
      title={`Seat ${seat.id}`}
    >
      <Armchair className="w-5 h-5" strokeWidth={2.5} />
      <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-gray-100 border border-gray-200 rounded-full w-4 h-4 flex items-center justify-center text-gray-600 group-hover:border-blue-500 group-hover:text-blue-600">
        {seat.id}
      </span>
    </button>
  );
}
