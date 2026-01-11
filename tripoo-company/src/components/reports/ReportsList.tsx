import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FileText, Download, MoreVertical, Clock, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";

const reports = [
  { id: 1, title: "التقرير المالي اليومي", date: "13/12/2025", size: "2.4 MB", type: "pdf", status: "ready" },
  { id: 2, title: "تقرير حركة الأتوبيسات", date: "12/12/2025", size: "1.1 MB", type: "excel", status: "ready" },
  { id: 3, title: "إيرادات فرع الإسكندرية", date: "10/12/2025", size: "850 KB", type: "pdf", status: "ready" },
  { id: 4, title: "تقرير الصيانة الشهري", date: "01/12/2025", size: "5.2 MB", type: "pdf", status: "archived" },
  { id: 5, title: "قائمة الركاب - رحلة 501", date: "13/12/2025", size: "120 KB", type: "excel", status: "ready" },
];

export function ReportsList() {
  return (
    <Card className="border-gray-200 shadow-sm">
      <CardHeader className="border-b border-gray-100 pb-4 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Clock className="h-5 w-5 text-gray-500" />
          آخر التقارير المستخرجة
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 text-sm">
          عرض الأرشيف
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100">
          {reports.map((report) => (
            <div key={report.id} className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className={clsx("p-3 rounded-lg shrink-0", 
                  report.type === "pdf" ? "bg-red-50" : "bg-green-50"
                )}>
                  {report.type === "pdf" ? (
                    <FileText className="h-6 w-6 text-red-500" />
                  ) : (
                    <FileSpreadsheet className="h-6 w-6 text-green-600" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">{report.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-gray-500">
                    <span className="whitespace-nowrap">{report.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                    <span className="whitespace-nowrap">{report.size}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                    <span className={clsx(
                      "px-1.5 py-0.5 rounded text-[10px] whitespace-nowrap",
                      report.status === "ready" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                    )}>
                      {report.status === "ready" ? "جاهز للتحميل" : "مؤرشف"}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 shrink-0 ml-2">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
