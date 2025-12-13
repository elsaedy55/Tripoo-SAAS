import React from 'react';
import { Armchair } from 'lucide-react';

interface SeatMapPreviewProps {
  layout: string; // "1x2" or "2x2"
  seatCount: number;
}

export function SeatMapPreview({ layout, seatCount }: SeatMapPreviewProps) {
  // Parse layout
  const [leftStr, rightStr] = layout.split('x');
  const leftSeats = parseInt(leftStr);
  const rightSeats = parseInt(rightStr);
  const seatsPerRow: number = leftSeats + rightSeats;
  
  // Calculate rows needed (excluding the last row which might be a full back row)
  // For simplicity in this MVP, we'll just fill rows.
  // A real bus usually has 5 seats at the back.
  
  const rows = Math.ceil(seatCount / seatsPerRow);

  const renderSeat = (seatNum: number) => (
    <div 
      key={seatNum}
      className="w-10 h-10 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-500 transition-colors cursor-pointer"
      title={`Seat ${seatNum}`}
    >
      <Armchair className="w-6 h-6" />
    </div>
  );

  const renderRow = (rowNum: number) => {
    const rowSeats = [];
    let currentSeatCount = rowNum * seatsPerRow;

    // Left side
    for (let i = 0; i < leftSeats; i++) {
      currentSeatCount++;
      if (currentSeatCount <= seatCount) {
        rowSeats.push(renderSeat(currentSeatCount));
      } else {
         rowSeats.push(<div key={`empty-l-${i}`} className="w-10 h-10" />);
      }
    }

    // Aisle
    rowSeats.push(<div key="aisle" className="w-8" />);

    // Right side
    for (let i = 0; i < rightSeats; i++) {
      currentSeatCount++;
      if (currentSeatCount <= seatCount) {
        rowSeats.push(renderSeat(currentSeatCount));
      } else {
        rowSeats.push(<div key={`empty-r-${i}`} className="w-10 h-10" />);
      }
    }

    return (
      <div key={rowNum} className="flex gap-2 mb-2 justify-center">
        {rowSeats}
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-md mx-auto">
      <div className="mb-6 text-center">
        <div className="w-full h-12 bg-gray-100 rounded-t-3xl border-b-2 border-gray-200 flex items-center justify-center mb-4">
          <span className="text-gray-400 text-sm font-medium">مقدمة الأتوبيس (السائق)</span>
        </div>
      </div>
      
      <div className="space-y-2">
        {Array.from({ length: rows }).map((_, idx) => renderRow(idx))}
      </div>

      <div className="mt-6 text-center">
        <div className="w-full h-4 bg-gray-100 rounded-b-xl"></div>
      </div>
    </div>
  );
}
