import DashboardLayout from "@/components/layout/DashboardLayout";
import SystemStatus from "@/components/system/SystemStatus";

export default function SystemHealthPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">حالة النظام والبنية التحتية</h1>
          <p className="text-gray-500 mt-2">مراقبة حية لأداء الخوادم، الخدمات، والشبكات.</p>
        </div>
        <SystemStatus />
      </div>
    </DashboardLayout>
  );
}
