"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Search, Filter, MoreVertical, Edit, Trash2, UserPlus, Shield, Mail, Phone, UserCog } from "lucide-react";
import clsx from "clsx";

const users = [
  { id: 1, name: "أحمد محمد", email: "ahmed@tripoo.com", role: "admin", phone: "01012345678", status: "active", lastLogin: "منذ 2 ساعة" },
  { id: 2, name: "سارة علي", email: "sara@tripoo.com", role: "manager", phone: "01123456789", status: "active", lastLogin: "منذ 5 ساعات" },
  { id: 3, name: "محمود حسن", email: "mahmoud@tripoo.com", role: "agent", phone: "01234567890", status: "inactive", lastLogin: "منذ يومين" },
  { id: 4, name: "خالد إبراهيم", email: "khaled@tripoo.com", role: "driver", phone: "01555555555", status: "active", lastLogin: "منذ 30 دقيقة" },
  { id: 5, name: "منى السيد", email: "mona@tripoo.com", role: "agent", phone: "01098765432", status: "active", lastLogin: "منذ 1 ساعة" },
];

export function UsersList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.includes(searchQuery) ||
      user.email.includes(searchQuery) ||
      user.phone.includes(searchQuery);

    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin": return <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">مدير النظام</span>;
      case "manager": return <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">مدير فرع</span>;
      case "agent": return <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">موظف حجز</span>;
      case "driver": return <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">سائق</span>;
      default: return <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700">مستخدم</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between">
          
          {/* Search */}
          <div className="relative w-full xl:w-64 shrink-0">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="بحث بالاسم، البريد، أو الهاتف..."
              className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Middle Filters: Role */}
          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto flex-1">
            <div className="relative flex-1">
              <UserCog className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="all">كل الأدوار</option>
                <option value="admin">مدير النظام</option>
                <option value="manager">مدير فرع</option>
                <option value="agent">موظف حجز</option>
                <option value="driver">سائق</option>
              </select>
            </div>
          </div>
          
          {/* Right Filters: Status & Add Button */}
          <div className="flex gap-3 w-full xl:w-auto shrink-0">
            <div className="relative flex-1 xl:flex-none">
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full xl:w-40 pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">كل الحالات</option>
                <option value="active">نشط</option>
                <option value="inactive">غير نشط</option>
              </select>
            </div>
            
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shrink-0">
              <UserPlus className="h-4 w-4" />
              <span className="hidden sm:inline">إضافة مستخدم</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">المستخدم</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الدور الوظيفي</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">معلومات الاتصال</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الحالة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">آخر ظهور</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-sm border border-gray-200">
                          {user.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getRoleBadge(user.role)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <Mail className="w-3 h-3" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <Phone className="w-3 h-3" />
                          {user.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={clsx(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                        user.status === "active" ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"
                      )}>
                        <span className={clsx("w-1.5 h-1.5 rounded-full", user.status === "active" ? "bg-green-500" : "bg-red-500")} />
                        {user.status === "active" ? "نشط" : "غير نشط"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.lastLogin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-600 hover:bg-blue-50 rounded-full" title="تعديل">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 rounded-full" title="حذف">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:bg-gray-100 rounded-full" title="المزيد">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد نتائج</h3>
                      <p className="text-sm">لم نتمكن من العثور على أي مستخدمين يطابقون بحثك.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
