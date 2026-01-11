const garages = [
  { id: 1, name: "جراج عبود", branch: "فرع رمسيس" },
  { id: 2, name: "جراج المنيب", branch: "فرع الجيزة" },
  { id: 3, name: "جراج السلام", branch: "فرع مدينة السلام" },
];

export function GaragesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الاسم</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الفرع التابع</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {garages.map((garage) => (
            <tr key={garage.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{garage.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{garage.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
