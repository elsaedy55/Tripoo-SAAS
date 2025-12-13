import { MaintenanceTable } from "@/components/maintenance/MaintenanceTable";

export default function MaintenancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">الصيانة</h1>
      </div>

      <MaintenanceTable />
    </div>
  );
}
