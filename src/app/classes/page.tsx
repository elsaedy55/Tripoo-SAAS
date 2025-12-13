import { ClassesList } from "@/components/classes/ClassesList";

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">الفئات والخدمات</h1>
      </div>

      <ClassesList />
    </div>
  );
}
