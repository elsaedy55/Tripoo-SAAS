import { Button } from "@/components/ui/Button";
import { User, Phone, CreditCard, Ticket } from "lucide-react";

interface PassengerFormProps {
  selectedSeats: number[];
  trip: any;
}

export function PassengerForm({ selectedSeats, trip }: PassengerFormProps) {
  const totalAmount = trip ? trip.price * selectedSeats.length : 0;

  return (
    <div className="space-y-6">
      {/* Trip Summary */}
      {trip && (
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <h4 className="text-sm font-bold text-blue-800 mb-3 flex items-center gap-2">
            <Ticket className="h-4 w-4" />
            ملخص الحجز
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>الرحلة:</span>
              <span className="font-medium text-gray-900">{trip.from} - {trip.to}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>الموعد:</span>
              <span className="font-medium text-gray-900">{trip.date} | {trip.time}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>المقاعد المحددة:</span>
              <span className="font-medium text-gray-900">
                {selectedSeats.length > 0 ? selectedSeats.join(", ") : "-"}
              </span>
            </div>
            <div className="pt-2 mt-2 border-t border-blue-200 flex justify-between items-center">
              <span className="font-bold text-blue-800">الإجمالي:</span>
              <span className="text-lg font-bold text-blue-600">{totalAmount} ج.م</span>
            </div>
          </div>
        </div>
      )}

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            الاسم بالكامل
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              className="block w-full pr-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border"
              placeholder="أدخل اسم الراكب"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            رقم الموبايل
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              className="block w-full pr-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border"
              placeholder="01xxxxxxxxx"
            />
          </div>
        </div>

        <div>
          <label htmlFor="payment" className="block text-sm font-medium text-gray-700 mb-1">
            طريقة الدفع
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <CreditCard className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="payment"
              className="block w-full pr-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 border bg-white"
            >
              <option>كاش (في الفرع)</option>
              <option>فودافون كاش</option>
              <option>بطاقة ائتمان</option>
            </select>
          </div>
        </div>

        <Button 
          className="w-full h-12 text-lg mt-6" 
          disabled={!trip || selectedSeats.length === 0}
        >
          تأكيد الحجز ({totalAmount} ج.م)
        </Button>
      </form>
    </div>
  );
}

