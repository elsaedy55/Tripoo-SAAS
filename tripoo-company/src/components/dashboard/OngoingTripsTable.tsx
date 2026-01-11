import { Badge } from "@/components/ui/Badge";

const trips = [
  { id: "TR-501", from: "القاهرة", to: "الإسكندرية", time: "08:00 AM", bus: "أ ب ج 123", status: "on-road" },
  { id: "TR-502", from: "القاهرة", to: "شرم الشيخ", time: "09:30 AM", bus: "م ن ه 789", status: "on-road" },
  { id: "TR-503", from: "أسيوط", to: "القاهرة", time: "07:00 AM", bus: "ك ل م 555", status: "delayed" },
];

export function OngoingTripsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-100">
        <thead className="bg-gray-50/50">
          <tr>
            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
              من
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
              إلى
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
              وقت التحرك
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
              الأتوبيس
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
              الحالة
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {trips.map((trip) => (
            <tr key={trip.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {trip.from}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {trip.to}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {trip.time}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {trip.bus}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Badge variant={trip.status === "on-road" ? "info" : "danger"}>
                  {trip.status === "on-road" ? "في الطريق" : "متأخرة"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
