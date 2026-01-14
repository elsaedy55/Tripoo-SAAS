import DashboardLayout from "@/components/layout/DashboardLayout";
import SettingsContainer from "@/components/settings/SettingsContainer";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">إعدادات المنصة</h1>
          <p className="text-gray-500 mt-2">تخصيص الخيارات العامة، الأمان، والإشعارات للنظام.</p>
        </div>
        <SettingsContainer />
      </div>
    </DashboardLayout>
  );
}
