import { UsersList } from "@/components/users/UsersList";
import { UserStats } from "@/components/users/UserStats";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إدارة المستخدمين</h1>
          <p className="text-sm text-gray-500 mt-1">إدارة حسابات الموظفين والصلاحيات</p>
        </div>
        <Button variant="outline" className="gap-2 bg-white">
          <Download className="h-4 w-4" />
          تصدير القائمة
        </Button>
      </div>

      {/* Stats Overview */}
      <UserStats />

      {/* Users List */}
      <UsersList />
    </div>
  );
}
