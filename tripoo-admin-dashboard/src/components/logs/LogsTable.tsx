"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { 
  MoreVertical, 
  CheckCircle, 
  AlertCircle,
  XCircle, 
  Clock, 
  Building2, 
  ShieldAlert,
  Terminal,
  User,
  MapPin,
  Globe,
  Monitor,
  Smartphone,
  Server,
  Database,
  Wifi,
  FileCode,
  DollarSign,
} from "lucide-react";

interface Log {
  id: number;
  user: string;
  role: string;
  company: string;
  action: string;
  module: string;
  description: string;
  ipAddress: string;
  location: string;
  timestamp: string;
  device: string;
  status: 'success' | 'warning' | 'error';
}

const logs: Log[] = [
  {
    id: 1,
    user: 'أحمد محمد',
    role: 'سوبر أدمن',
    company: 'Tripoo',
    action: 'تسجيل دخول',
    module: 'المصادقة',
    description: 'تسجيل دخول ناجح إلى لوحة التحكم',
    ipAddress: '192.168.1.10',
    location: 'القاهرة، مصر',
    timestamp: '2026-01-14 10:30:45',
    device: 'Chrome / Windows',
    status: 'success'
  },
  {
    id: 2,
    user: 'محمود علي',
    role: 'مدير شركة',
    company: 'شركة النور للنقل',
    action: 'تحديث بيانات',
    module: 'إدارة الشركات',
    description: 'تحديث معلومات الاتصال لشركة النور',
    ipAddress: '156.204.12.34',
    location: 'الجيزة، مصر',
    timestamp: '2026-01-14 11:15:20',
    device: 'Firefox / MacOS',
    status: 'success'
  },
  {
    id: 3,
    user: 'النظام',
    role: 'Server',
    company: 'System',
    action: 'نسخ احتياطي',
    module: 'قاعدة البيانات',
    description: 'اكتمال النسخ الاحتياطي اليومي لقاعدة البيانات الرئيسية',
    ipAddress: '127.0.0.1',
    location: 'Data Center',
    timestamp: '2026-01-14 00:00:01',
    device: 'Server / Linux',
    status: 'success'
  },
  {
    id: 4,
    user: 'سارة حسن',
    role: 'موظف دعم',
    company: 'الذهبية للسياحة',
    action: 'فشل تسجيل الدخول',
    module: 'المصادقة',
    description: 'كلمة مرور غير صحيحة (المحاولة الثالثة)',
    ipAddress: '41.235.67.89',
    location: 'الإسكندرية، مصر',
    timestamp: '2026-01-14 09:20:10',
    device: 'Safari / iPhone',
    status: 'warning'
  },
  {
    id: 5,
    user: 'خالد إبراهيم',
    role: 'مدير شركة',
    company: 'جو باص',
    action: 'حذف مستخدم',
    module: 'إدارة المستخدمين',
    description: 'حذف حساب المستخدم "Amr Diab" (Deleted by admin)',
    ipAddress: '197.55.23.11',
    location: 'المنصورة، مصر',
    timestamp: '2026-01-13 16:45:00',
    device: 'Edge / Windows',
    status: 'error'
  },
  {
    id: 6,
    user: 'أحمد محمد',
    role: 'سوبر أدمن',
    company: 'Tripoo',
    action: 'تصدير تقرير',
    module: 'التقارير',
    description: 'تصدير تقرير الإيرادات السنوي بصيغة PDF',
    ipAddress: '192.168.1.10',
    location: 'القاهرة، مصر',
    timestamp: '2026-01-13 14:00:30',
    device: 'Chrome / Windows',
    status: 'success'
  },
  {
    id: 7,
    user: 'مجهول',
    role: 'Unknown',
    company: 'Unknown',
    action: 'اكتشاف ثغرة',
    module: 'الأمان',
    description: 'محاولة حقن SQL في صفحة تسجيل الدخول',
    ipAddress: '102.33.44.55',
    location: 'أسوان، مصر',
    timestamp: '2026-01-13 03:15:22',
    device: 'Unknown / Linux',
    status: 'error'
  },
  {
    id: 8,
    user: 'محمد سمير',
    role: 'مدير فرع',
    company: 'رويال باص',
    action: 'إضافة رحلة',
    module: 'التشغيل',
    description: 'إضافة رحلة جديدة (القاهرة - شرم الشيخ) - ID: #TRP-9921',
    ipAddress: '154.12.33.99',
    location: 'شرم الشيخ، مصر',
    timestamp: '2026-01-15 08:30:00',
    device: 'App / Android',
    status: 'success'
  },
  {
    id: 9,
    user: 'منى فاروق',
    role: 'موظف مبيعات',
    company: 'مواصلات مصر',
    action: 'تعديل حجز',
    module: 'الحجوزات',
    description: 'تغيير مقعد الراكب في الرحلة #TRP-8821 من 5A إلى 6B',
    ipAddress: '156.200.11.22',
    location: 'الغردقة، مصر',
    timestamp: '2026-01-15 09:45:11',
    device: 'Chrome / Windows',
    status: 'success'
  },
  {
    id: 10,
    user: 'Automated Bot',
    role: 'Bot',
    company: 'External',
    action: 'زحف غير شرعي',
    module: 'الأمان',
    description: 'رصد ترافيك غير طبيعي من IP مشبوه',
    ipAddress: '88.12.44.11',
    location: 'Moscow, Russia',
    timestamp: '2026-01-15 02:22:15',
    device: 'Bot / Script',
    status: 'warning'
  },
  {
    id: 11,
    user: 'ياسر جلال',
    role: 'مدير مالي',
    company: 'شرق الدلتا',
    action: 'فشل الدفع',
    module: 'المدفوعات',
    description: 'فشل عملية دفع الشركة (Expired Card)',
    ipAddress: '197.33.22.11',
    location: 'القاهرة، مصر',
    timestamp: '2026-01-14 13:00:00',
    device: 'Firefox / Windows',
    status: 'error'
  },
  {
    id: 12,
    user: 'النظام',
    role: 'System',
    company: 'System',
    action: 'تحديث الكاش',
    module: 'الأداء',
    description: 'تفريغ الذاكرة المؤقتة للنظام (Redis Flush)',
    ipAddress: '127.0.0.1',
    location: 'Server Center',
    timestamp: '2026-01-15 05:00:00',
    device: 'Server / Linux',
    status: 'success'
  },
  {
    id: 13,
    user: 'رانيا يوسف',
    role: 'موظف خدمة عملاء',
    company: 'سوبر جيت',
    action: 'عرض بيانات عميل',
    module: 'العملاء',
    description: 'عرض الملف الشخصي للعميل ID: #CUST-5541',
    ipAddress: '41.33.22.11',
    location: 'طنطا، مصر',
    timestamp: '2026-01-15 10:10:10',
    device: 'Chrome / MacOS',
    status: 'success'
  },
  {
    id: 14,
    user: 'API Gateway',
    role: 'System',
    company: 'System',
    action: 'خطأ خادم 500',
    module: 'API',
    description: 'Internal Server Error في الـ Endpoint /api/v1/bookings',
    ipAddress: '10.0.0.5',
    location: 'Internal Network',
    timestamp: '2026-01-14 14:44:22',
    device: 'Server / API',
    status: 'error'
  },
  {
    id: 15,
    user: 'عمر الشريف',
    role: 'مدير تشغيل',
    company: 'الحصان الذهبي',
    action: 'إيقاف حافلة',
    module: 'الأسطول',
    description: 'وضع الحافلة رقم (أ ب ج 123) في الصيانة الطارئة',
    ipAddress: '197.12.44.55',
    location: 'السويس، مصر',
    timestamp: '2026-01-15 07:30:00',
    device: 'App / iOS',
    status: 'warning'
  },
  {
    id: 16,
    user: 'فريق التطوير',
    role: 'DevOps',
    company: 'Tripoo',
    action: 'نشر تحديث',
    module: 'Deploy',
    description: 'نشر الإصدار v2.1.0 للإنتاج',
    ipAddress: '192.168.1.50',
    location: 'القاهرة، مصر',
    timestamp: '2026-01-12 23:00:00',
    device: 'Terminal / Linux',
    status: 'success'
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "success":
      return <Badge variant="success" className="gap-1"><CheckCircle className="size-3" /> ناجح</Badge>;
    case "warning":
      return <Badge variant="warning" className="gap-1"><AlertCircle className="size-3" /> تحذير</Badge>;
    case "error":
      return <Badge variant="destructive" className="gap-1"><ShieldAlert className="size-3" /> خطأ</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getModuleIcon = (module: string) => {
    switch (module) {
        case 'المصادقة': return <User className="size-4 text-purple-500" />;
        case 'النظام': return <Server className="size-4 text-gray-500" />;
        case 'الأمان': return <ShieldAlert className="size-4 text-red-500" />;
        case 'قاعدة البيانات': return <Database className="size-4 text-blue-500" />;
        case 'المدفوعات': return <DollarSign className="size-4 text-green-600" />;
        case 'API': return <Wifi className="size-4 text-orange-500" />;
        case 'Deploy': return <FileCode className="size-4 text-indigo-500" />;
        default: return <Clock className="size-4 text-blue-500" />;
    }
}

const getDeviceIcon = (device: string) => {
    if (device.includes("Mobile") || device.includes("iPhone") || device.includes("Android") || device.includes("App")) {
        return <Smartphone className="size-3.5 text-gray-400" />;
    }
    if (device.includes("Server") || device.includes("Bot")) {
        return <Server className="size-3.5 text-gray-400" />;
    }
    return <Monitor className="size-3.5 text-gray-400" />;
}

export default function LogsTable() {
  return (
    <Card className="border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
      <table className="w-full text-sm text-right">
        <thead className="bg-gray-50 border-b border-gray-100 text-gray-500">
          <tr>
            <th className="px-6 py-4 font-medium">المستخدم</th>
            <th className="px-6 py-4 font-medium">الحدث</th>
            <th className="px-6 py-4 font-medium">الوصف التفصيلي</th>
            <th className="px-6 py-4 font-medium">الجهاز & IP</th>
            <th className="px-6 py-4 font-medium">التوقيت</th>
            <th className="px-6 py-4 font-medium">الحالة</th>
            <th className="px-6 py-4 font-medium"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {logs.map((log) => (
            <tr key={log.id} className="group hover:bg-blue-50/30 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xs shrink-0 ring-2 ring-white shadow-sm">
                        {log.user.substring(0,2)}
                    </div>
                    <div>
                        <div className="font-bold text-sm">{log.user}</div>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                            <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100 font-medium">{log.role}</span>
                            <span className="text-[10px] bg-gray-50 text-gray-600 px-1.5 py-0.5 rounded border border-gray-100 flex items-center gap-1">
                                <Building2 className="size-2.5" />
                                {log.company}
                            </span>
                        </div>
                    </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-50 border border-gray-100 group-hover:bg-white transition-colors shadow-sm">
                        {getModuleIcon(log.module)}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-900">{log.action}</span>
                        <span className="text-xs text-blue-600 font-medium">{log.module}</span>
                    </div>
                </div>
              </td>
              <td className="px-6 py-4 max-w-sm" title={log.description}>
                <span className="text-gray-600 text-xs leading-relaxed line-clamp-2">{log.description}</span>
              </td>
              <td className="px-6 py-4">
                 <div className="flex flex-col gap-1.5 text-gray-600">
                    <div className="flex items-center gap-1.5 text-xs font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100 w-fit">
                        <Globe className="size-3 text-gray-400" />
                        <span>{log.ipAddress}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                         <div className="flex items-center gap-1">
                            {getDeviceIcon(log.device)}
                            <span>{log.device}</span>
                         </div>
                    </div>
                 </div>
              </td>
              <td className="px-6 py-4">
                 <div className="flex flex-col gap-1">
                     <div className="flex items-center gap-1.5 text-gray-900 font-medium text-xs">
                        <Clock className="size-3.5 text-gray-400" />
                        <span dir="ltr">{log.timestamp.split(' ')[1]}</span>
                     </div>
                     <span className="text-[10px] text-gray-500 mr-5" dir="ltr">{log.timestamp.split(' ')[0]}</span>
                 </div>
              </td>
              <td className="px-6 py-4">
                {getStatusBadge(log.status)}
              </td>
              <td className="px-6 py-4 text-left">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                  <MoreVertical className="size-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Card>
  );
}
