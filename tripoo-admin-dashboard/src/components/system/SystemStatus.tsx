"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  Activity, 
  Server, 
  Database, 
  Cpu, 
  HardDrive, 
  Globe, 
  Wifi, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  RefreshCw,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Cloud,
  Zap,
  Mail,
  Smartphone,
  Layers
} from "lucide-react";

interface Service {
  name: string;
  type: string;
  status: 'operational' | 'degraded' | 'down' | 'maintenance';
  uptime: string;
  latency: number;
  lastIncident?: string;
}

const services: Service[] = [
  { name: 'API Gateway', type: 'Core', status: 'operational', uptime: '99.99%', latency: 45 },
  { name: 'Auth Service (Identity)', type: 'Security', status: 'operational', uptime: '99.95%', latency: 85 },
  { name: 'Primary Database (PostgreSQL)', type: 'Database', status: 'operational', uptime: '99.99%', latency: 12 },
  { name: 'Redis Cache Cluster', type: 'Cache', status: 'operational', uptime: '100%', latency: 2 },
  { name: 'Payment Gateway Integration', type: 'External', status: 'degraded', uptime: '98.50%', latency: 2400, lastIncident: 'High Latency detected' },
  { name: 'Notification Service (Email/SMS)', type: 'Messaging', status: 'operational', uptime: '99.90%', latency: 150 },
  { name: 'Booking Engine', type: 'Core', status: 'operational', uptime: '99.99%', latency: 65 },
  { name: 'Search Service (Elasticsearch)', type: 'Search', status: 'maintenance', uptime: '99.00%', latency: 0, lastIncident: 'Scheduled Re-indexing' },
  { name: 'Object Storage (S3)', type: 'Storage', status: 'operational', uptime: '99.999%', latency: 200 },
  { name: 'CDN (Content Delivery)', type: 'Network', status: 'operational', uptime: '100%', latency: 15 },
];

const servers = [
  { name: 'App-Server-01', region: 'Cairo (CAI-1)', cpu: 45, memory: 60, disk: 30, status: 'healthy' },
  { name: 'App-Server-02', region: 'Cairo (CAI-1)', cpu: 55, memory: 62, disk: 32, status: 'healthy' },
  { name: 'App-Server-03', region: 'Alex (ALX-1)', cpu: 22, memory: 40, disk: 15, status: 'healthy' },
  { name: 'Worker-Node-01', region: 'Cairo (CAI-2)', cpu: 88, memory: 92, disk: 70, status: 'warning' },
  { name: 'DB-Primary-01', region: 'Cairo (CAI-Sec)', cpu: 30, memory: 75, disk: 65, status: 'healthy' },
];

const ProgressBar = ({ value, colorClass = "bg-blue-600", height = "h-2" }: { value: number, colorClass?: string, height?: string }) => (
  <div className={`w-full bg-gray-100 rounded-full ${height} overflow-hidden`}>
    <div className={`${height} rounded-full transition-all duration-500 ${colorClass}`} style={{ width: `${value}%` }}></div>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case 'operational': return <Badge variant="success" className="gap-1 bg-green-50 text-green-700 border-green-200 hover:bg-green-100"><CheckCircle2 className="size-3" /> يعمل بكفاءة</Badge>;
    case 'degraded': return <Badge variant="warning" className="gap-1 bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100"><AlertTriangle className="size-3" /> أداء منخفض</Badge>;
    case 'down': return <Badge variant="destructive" className="gap-1 bg-red-50 text-red-700 border-red-200 hover:bg-red-100"><XCircle className="size-3" /> متوقف</Badge>;
    case 'maintenance': return <Badge variant="secondary" className="gap-1 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"><RefreshCw className="size-3" /> صيانة</Badge>;
    case 'healthy': return <span className="flex items-center gap-1 text-green-600 text-xs font-medium"><CheckCircle2 className="size-3" /> Healthy</span>;
    case 'warning': return <span className="flex items-center gap-1 text-yellow-600 text-xs font-medium"><AlertTriangle className="size-3" /> Warning</span>;
    default: return <Badge variant="outline">{status}</Badge>;
  }
};

const getStatusColor = (status: string) => {
    switch(status) {
        case 'operational': return 'border-l-green-500';
        case 'degraded': return 'border-l-yellow-500';
        case 'down': return 'border-l-red-500';
        case 'maintenance': return 'border-l-blue-500';
        default: return 'border-l-gray-300';
    }
}

export default function SystemStatus() {
  return (
    <div className="space-y-8">
      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-gray-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-400"></div>
            <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">الحالة العامة للنظام</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">98.5%</h3>
                    </div>
                    <div className="p-2 bg-green-50 rounded-lg text-green-600">
                        <Activity className="size-5" />
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-600 font-medium bg-green-50 w-fit px-2 py-1 rounded">
                    <ArrowUpRight className="size-3" />
                    <span>تحسن بنسبة 1.2% عن الأسبوع الماضي</span>
                </div>
            </CardContent>
        </Card>

        <Card className="border-gray-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></div>
            <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">متوسط زمن الاستجابة</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">145ms</h3>
                    </div>
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        <Zap className="size-5" />
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-600 font-medium bg-blue-50 w-fit px-2 py-1 rounded">
                    <CheckCircle2 className="size-3" />
                    <span>ضمن الحدود الطبيعية (&lt;200ms)</span>
                </div>
            </CardContent>
        </Card>

        <Card className="border-gray-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-400"></div>
            <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">معدل الطلبات</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">4.2k <span className="text-sm font-normal text-gray-400">req/s</span></h3>
                    </div>
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                        <Globe className="size-5" />
                    </div>
                </div>
                 <div className="flex items-center gap-2 text-xs text-purple-600 font-medium bg-purple-50 w-fit px-2 py-1 rounded">
                    <ArrowUpRight className="size-3" />
                    <span>زيادة في الترافيك 15%</span>
                </div>
            </CardContent>
        </Card>

        <Card className="border-gray-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-400"></div>
            <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">الأخطاء الحرجة (24h)</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">12</h3>
                    </div>
                    <div className="p-2 bg-red-50 rounded-lg text-red-600">
                        <AlertTriangle className="size-5" />
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium bg-gray-50 w-fit px-2 py-1 rounded">
                    <span>آخر خطأ منذ 45 دقيقة</span>
                </div>
            </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Services Status List */}
        <div className="lg:col-span-2 space-y-6">
            <Card className="border-gray-100 shadow-sm">
                <CardHeader className="border-b border-gray-50 pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <CardTitle className="text-lg font-bold flex items-center gap-2">
                                <Layers className="size-5 text-blue-600" />
                                حالة الخدمات والأنظمة
                            </CardTitle>
                            <p className="text-sm text-gray-500 mt-1">متابعة حالة microservices والأنظمة الخارجية</p>
                        </div>
                        <Button variant="outline" size="sm" className="gap-2 text-xs">
                            <RefreshCw className="size-3.5" />
                            تحديث الحالة
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-gray-50">
                        {services.map((service, index) => (
                            <div key={index} className={`p-4 hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 ${getStatusColor(service.status)}`}>
                                <div className="flex items-start gap-3">
                                    <div className={`mt-1 size-2 rounded-full ${service.status === 'operational' ? 'bg-green-500 animate-pulse' : service.status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-900 flex items-center gap-2">
                                            {service.name}
                                            <span className="text-[10px] font-normal px-2 py-0.5 bg-gray-100 rounded-full text-gray-500">{service.type}</span>
                                        </h4>
                                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Clock className="size-3" />
                                                Uptime: {service.uptime}
                                            </span>
                                            <span className={`flex items-center gap-1 ${service.latency > 200 ? 'text-red-500 font-bold' : ''}`}>
                                                <Zap className="size-3" />
                                                Latency: {service.latency}ms
                                            </span>
                                        </div>
                                        {service.lastIncident && (
                                            <div className="mt-2 text-xs text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded inline-flex items-center gap-1">
                                                <AlertTriangle className="size-3" />
                                                {service.lastIncident}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <StatusBadge status={service.status} />
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Server Resources Side Panel */}
        <div className="space-y-6">
            <Card className="border-gray-100 shadow-sm bg-gray-900 text-white">
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                        <Server className="size-5 text-blue-400" />
                        موارد الخوادم (Servers)
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                    {servers.map((server, idx) => (
                        <div key={idx} className="pb-4 border-b border-gray-800 last:border-0 last:pb-0">
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <div className="font-bold text-sm flex items-center gap-2">
                                        {server.name}
                                        {server.status === 'warning' && <AlertTriangle className="size-3 text-yellow-500" />}
                                    </div>
                                    <div className="text-[10px] text-gray-400">{server.region}</div>
                                </div>
                                <div className="text-xs font-mono text-gray-400">
                                    {server.cpu}% CPU
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                                        <span>CPU Load</span>
                                        <span>{server.cpu}%</span>
                                    </div>
                                    <ProgressBar 
                                        value={server.cpu} 
                                        colorClass={server.cpu > 80 ? 'bg-red-500' : 'bg-blue-500'} 
                                        height="h-1.5"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                                        <span>Memory (RAM)</span>
                                        <span>{server.memory}%</span>
                                    </div>
                                    <ProgressBar 
                                        value={server.memory} 
                                        colorClass={server.memory > 90 ? 'bg-red-500' : server.memory > 70 ? 'bg-yellow-500' : 'bg-purple-500'} 
                                        height="h-1.5"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                                        <span>Disk Space</span>
                                        <span>{server.disk}%</span>
                                    </div>
                                    <ProgressBar 
                                        value={server.disk} 
                                        colorClass="bg-gray-600" 
                                        height="h-1.5"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            <Card className="border-gray-100 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-sm font-bold flex items-center gap-2">
                        <Cloud className="size-4 text-gray-500" />
                        Infrastructure Info
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500">Cloud Provider</span>
                        <span className="font-medium">AWS</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500">Kubernetes Version</span>
                        <span className="font-medium font-mono">v1.28.4</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500">Region</span>
                        <span className="font-medium">eu-central-1 (Frankfurt)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500">Database Size</span>
                        <span className="font-medium">450 GB / 1 TB</span>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
