import { Badge } from "@/components/ui/Badge";

const buses = [
  { id: "BUS-101", plate: "أ ب ج 123", status: "active", route: "القاهرة - الإسكندرية" },
  { id: "BUS-102", plate: "س ص ع 456", status: "maintenance", route: "-" },
  { id: "BUS-103", plate: "م ن ه 789", status: "active", route: "القاهرة - أسوان" },
  { id: "BUS-104", plate: "د ذ ر 321", status: "active", route: "الغردقة - القاهرة" },
];

export function ActiveBusesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-100">
        <thead className="bg-gray-50/50">
          <tr>
            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
              رقم اللوحة
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
              الخط
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
              الحالة
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {buses.map((bus) => (
            <tr key={bus.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {bus.plate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {bus.route}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Badge variant={bus.status === "active" ? "success" : "warning"}>
                  {bus.status === "active" ? "شغال" : "في الصيانة"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
