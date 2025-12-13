import { BusesTable } from "@/components/buses/BusesTable";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Plus } from "lucide-react";

export default function BusesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">إدارة الأتوبيسات</h1>
        <Button>
          <Plus className="ml-2 h-4 w-4" />
          إضافة أتوبيس جديد
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة الأتوبيسات</CardTitle>
        </CardHeader>
        <CardContent>
          <BusesTable />
        </CardContent>
      </Card>
    </div>
  );
}
