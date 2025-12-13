import { RoutesList } from "@/components/routes/RoutesList";

export default function RoutesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">الخطوط والمحطات</h1>
      </div>

      <RoutesList />
    </div>
  );
}
