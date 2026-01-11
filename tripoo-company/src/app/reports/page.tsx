import { ReportsTable } from "@/components/reports/ReportsTable";
import { ReportsStats } from "@/components/reports/ReportsStats";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">التقارير والإحصائيات</h1>
          <p className="text-sm text-gray-500 mt-1">متابعة الأداء المالي والتشغيلي للشركة</p>
        </div>
        <Button variant="outline" className="gap-2 bg-white">
          <Download className="h-4 w-4" />
          تصدير ملخص الشهر
        </Button>
      </div>

      {/* Stats Overview */}
      <ReportsStats />

      {/* Reports Table */}
      <ReportsTable />
    </div>
  );
}
