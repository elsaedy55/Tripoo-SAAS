import { TripsTable } from "@/components/trips/TripsTable";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Plus } from "lucide-react";

export default function TripsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">إدارة الرحلات</h1>
        <Button>
          <Plus className="ml-2 h-4 w-4" />
          إضافة رحلة جديدة
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة الرحلات</CardTitle>
        </CardHeader>
        <CardContent>
          <TripsTable />
        </CardContent>
      </Card>
    </div>
  );
}
