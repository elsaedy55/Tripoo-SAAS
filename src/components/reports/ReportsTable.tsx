"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Search, Filter, Calendar, FileText, FileSpreadsheet, Download, Eye, Trash2, Plus, CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const reports = [
  { id: 1, title: "التقرير المالي اليومي", date: "13/12/2025", size: "2.4 MB", type: "pdf", status: "ready", category: "financial" },
  { id: 2, title: "تقرير حركة الأتوبيسات", date: "12/12/2025", size: "1.1 MB", type: "excel", status: "ready", category: "operational" },
  { id: 3, title: "إيرادات فرع الإسكندرية", date: "10/12/2025", size: "850 KB", type: "pdf", status: "ready", category: "financial" },
  { id: 4, title: "تقرير الصيانة الشهري", date: "01/12/2025", size: "5.2 MB", type: "pdf", status: "archived", category: "maintenance" },
  { id: 5, title: "قائمة الركاب - رحلة 501", date: "13/12/2025", size: "120 KB", type: "excel", status: "ready", category: "bookings" },
  { id: 6, title: "تقرير المصروفات التشغيلية", date: "11/12/2025", size: "1.8 MB", type: "pdf", status: "ready", category: "financial" },
  { id: 7, title: "تحليل أداء السائقين", date: "05/12/2025", size: "3.5 MB", type: "excel", status: "archived", category: "operational" },
];

const categories = {
  financial: "مالي",
  operational: "تشغيلي",
  maintenance: "صيانة",
  bookings: "حجوزات",
};

export function ReportsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [newReportType, setNewReportType] = useState("financial");

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.title.includes(searchQuery);
    const matchesCategory = categoryFilter === "all" || report.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || report.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between">
          
          {/* Search */}
          <div className="relative w-full xl:w-96 shrink-0">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="بحث باسم التقرير..."
              className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto flex-1 justify-end">
            <div className="relative flex-1 sm:flex-none">
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full sm:w-40 pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">كل التصنيفات</option>
                <option value="financial">مالي</option>
                <option value="operational">تشغيلي</option>
                <option value="maintenance">صيانة</option>
                <option value="bookings">حجوزات</option>
              </select>
            </div>

            <div className="relative flex-1 sm:flex-none">
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <select
                className="w-full sm:w-40 pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm appearance-none cursor-pointer hover:bg-gray-50 transition-colors"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">كل الحالات</option>
                <option value="ready">جاهز للتحميل</option>
                <option value="archived">مؤرشف</option>
              </select>
            </div>

            <Button onClick={() => setIsGenerateModalOpen(true)} className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shrink-0">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">استخراج تقرير</span>
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
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">اسم التقرير</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">التصنيف</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">التاريخ</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الحجم</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">الحالة</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${report.type === 'pdf' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                          {report.type === 'pdf' ? <FileText className="h-5 w-5" /> : <FileSpreadsheet className="h-5 w-5" />}
                        </div>
                        <span className="text-sm font-bold text-gray-900">{report.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                        {categories[report.category as keyof typeof categories]}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {report.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" dir="ltr">
                      {report.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={report.status === "ready" ? "success" : "default"} className="shadow-sm">
                        {report.status === "ready" ? "جاهز" : "مؤرشف"}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-600 hover:bg-blue-50 rounded-full" title="تحميل">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-600 hover:bg-gray-100 rounded-full" title="معاينة">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 rounded-full" title="حذف">
                          <Trash2 className="h-4 w-4" />
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
                      <p className="text-sm">لم نتمكن من العثور على أي تقارير تطابق بحثك.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Generate Report Modal */}
      <Modal
        isOpen={isGenerateModalOpen}
        onClose={() => setIsGenerateModalOpen(false)}
        title="استخراج تقرير جديد"
      >
        <div className="space-y-6">
          {/* Report Type Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">نوع التقرير</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "financial", label: "تقرير مالي" },
                { id: "operational", label: "تقرير تشغيلي" },
                { id: "bookings", label: "تقرير حجوزات" },
              ].map((type) => (
                <div
                  key={type.id}
                  onClick={() => setNewReportType(type.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all text-center ${
                    newReportType === type.id
                      ? "border-blue-600 bg-blue-50 text-blue-700 font-medium"
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  {type.label}
                </div>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">من تاريخ</label>
              <input
                type="date"
                className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">إلى تاريخ</label>
              <input
                type="date"
                className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Branch Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">الفرع / المحطة</label>
            <select className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white">
              <option>كل الفروع</option>
              <option>القاهرة</option>
              <option>الإسكندرية</option>
              <option>شرم الشيخ</option>
            </select>
          </div>

          {/* Format Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">صيغة الملف</label>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors">
                <FileText className="h-4 w-4 text-red-500" />
                <span className="text-sm text-gray-700">PDF</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors">
                <FileSpreadsheet className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">Excel</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex gap-3">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsGenerateModalOpen(false)}>
              <Download className="h-4 w-4 ml-2" />
              تصدير التقرير
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => setIsGenerateModalOpen(false)}>
              إلغاء
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
