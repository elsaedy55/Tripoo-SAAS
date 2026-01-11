"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, FileText, Filter, Download } from "lucide-react";

export function ReportGenerator() {
  const [reportType, setReportType] = useState("financial");

  return (
    <Card className="border-gray-200 shadow-sm">
      <CardHeader className="border-b border-gray-100 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Filter className="h-5 w-5 text-blue-600" />
            استخراج تقرير جديد
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-1 gap-6">
          {/* Report Type Selection */}
          <div className="md:col-span-4 xl:col-span-1 space-y-3">
            <label className="block text-sm font-medium text-gray-700">نوع التقرير</label>
            <div className="space-y-2">
              {[
                { id: "financial", label: "تقرير مالي (إيرادات ومصروفات)" },
                { id: "operational", label: "تقرير تشغيلي (رحلات وأتوبيسات)" },
                { id: "bookings", label: "تقرير حجوزات (تذاكر وركاب)" },
              ].map((type) => (
                <div
                  key={type.id}
                  onClick={() => setReportType(type.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all flex items-start gap-3 ${
                    reportType === type.id
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                    reportType === type.id ? "border-blue-600" : "border-gray-400"
                  }`}>
                    {reportType === type.id && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                  </div>
                  <span className="text-sm font-medium leading-tight">{type.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="md:col-span-8 xl:col-span-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">من تاريخ</label>
                <div className="relative">
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="date"
                    className="block w-full pr-10 pl-3 py-2 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">إلى تاريخ</label>
                <div className="relative">
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="date"
                    className="block w-full pr-10 pl-3 py-2 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">الفرع / المحطة</label>
                <select className="block w-full pr-3 pl-3 py-2 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option>كل الفروع</option>
                  <option>القاهرة</option>
                  <option>الإسكندرية</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">الصيغة</label>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 gap-2 border-gray-300">
                    <FileText className="h-4 w-4 text-red-500" /> PDF
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2 border-gray-300">
                    <FileText className="h-4 w-4 text-green-600" /> Excel
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto gap-2">
                <Download className="h-4 w-4" />
                تصدير التقرير
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
