import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import CompaniesTable from "@/components/companies/CompaniesTable";
import { Plus, Download, Search, Filter } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function CompaniesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">إدارة الشركات</h1>
            <p className="text-gray-500 mt-2">عرض وإدارة جميع شركات النقل المشتركة في النظام.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="gap-2 shadow-lg shadow-blue-500/20">
              <Plus className="size-4" />
              إضافة شركة
            </Button>
            <Button variant="outline" className="gap-2 bg-white">
              <Download className="size-4" />
              تصدير
            </Button>
          </div>
        </div>

        {/* Filters & Search - Keeping existing filters */}
        <Card className="border-gray-100 shadow-sm">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                <input
                  type="text"
                  placeholder="بحث عن اسم الشركة، البريد الإلكتروني..."
                  className="w-full h-10 pr-10 pl-4 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                 <Button variant="outline" className="gap-2 bg-white w-full md:w-auto">
                  <Filter className="size-4" />
                  فلتر متقدم
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Companies Table Container */}
        <div>
           <CompaniesTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
