const branches = [
  { id: 1, name: "فرع رمسيس", city: "القاهرة", revenue: "150,000" },
  { id: 2, name: "فرع محرم بك", city: "الإسكندرية", revenue: "120,000" },
  { id: 3, name: "فرع أسيوط", city: "أسيوط", revenue: "80,000" },
];

export function BranchesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الاسم</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المدينة</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">إجمالي الإيراد (EGP)</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {branches.map((branch) => (
            <tr key={branch.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{branch.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch.city}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">{branch.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
