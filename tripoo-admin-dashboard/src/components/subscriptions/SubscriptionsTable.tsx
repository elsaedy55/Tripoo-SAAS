"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MoreVertical, CheckCircle, AlertCircle, XCircle, CreditCard, Calendar, Mail, Users, Bus, RefreshCw } from "lucide-react";

interface Subscription {
  id: number;
  companyName: string;
  email: string;
  plan: 'Basic' | 'Pro' | 'Enterprise';
  features: string;
  amount: string;
  billingCycle: 'شهري' | 'سنوي';
  startDate: string;
  endDate: string;
  status: 'active' | 'expired' | 'pending' | 'canceled';
  autoRenew: boolean;
  paymentMethod: string;
  lastPaymentDate: string;
}

const subscriptions: Subscription[] = [
  {
    id: 1,
    companyName: 'شركة النور للنقل',
    email: 'info@alnoor.com.eg',
    plan: 'Enterprise',
    features: '∞ حافلات • ∞ مستخدمين',
    amount: '5000 ج.م',
    billingCycle: 'سنوي',
    startDate: '2025-01-01',
    endDate: '2026-01-01',
    status: 'active',
    autoRenew: true,
    paymentMethod: 'Visa **** 4242',
    lastPaymentDate: '01/01/2025'
  },
  {
    id: 2,
    companyName: 'Tripoo',
    email: 'billing@tripoo.com',
    plan: 'Pro',
    features: '50 حافلة • 10 مستخدمين',
    amount: '2000 ج.م',
    billingCycle: 'شهري',
    startDate: '2025-05-01',
    endDate: '2025-06-01',
    status: 'active',
    autoRenew: true,
    paymentMethod: 'Bank Transfer',
    lastPaymentDate: '01/05/2025'
  },
  {
    id: 3,
    companyName: 'الذهبية للسياحة',
    email: 'finance@golden-tours.com',
    plan: 'Basic',
    features: '10 حافلات • 3 مستخدمين',
    amount: '1000 ج.م',
    billingCycle: 'شهري',
    startDate: '2024-12-01',
    endDate: '2025-01-01',
    status: 'expired',
    autoRenew: false,
    paymentMethod: 'Cash',
    lastPaymentDate: '01/12/2024'
  },
  {
    id: 4,
    companyName: 'جو باص',
    email: 'accounts@gobus.com',
    plan: 'Enterprise',
    features: '∞ حافلات • ∞ مستخدمين',
    amount: '4500 ج.م',
    billingCycle: 'سنوي',
    startDate: '2025-03-15',
    endDate: '2026-03-15',
    status: 'active',
    autoRenew: true,
    paymentMethod: 'Mastercard **** 8888',
    lastPaymentDate: '15/03/2025'
  },
  {
    id: 5,
    companyName: 'رويال باص',
    email: 'admin@royalbus.eg',
    plan: 'Pro',
    features: '50 حافلة • 10 مستخدمين',
    amount: '2200 ج.م',
    billingCycle: 'شهري',
    startDate: '2025-05-20',
    endDate: '2025-06-20',
    status: 'pending',
    autoRenew: true,
    paymentMethod: 'Pending',
    lastPaymentDate: '-'
  },
  {
    id: 6,
    companyName: 'مواصلات مصر',
    email: 'contact@mwaslat.com',
    plan: 'Enterprise',
    features: '∞ حافلات • ∞ مستخدمين',
    amount: '6000 ج.م',
    billingCycle: 'سنوي',
    startDate: '2024-06-01',
    endDate: '2025-06-01',
    status: 'active',
    autoRenew: false,
    paymentMethod: 'Visa **** 1234',
    lastPaymentDate: '01/06/2024'
  },
  {
    id: 7,
    companyName: 'شرق الدلتا',
    email: 'info@eastdelta.com.eg',
    plan: 'Enterprise',
    features: '∞ حافلات • ∞ مستخدمين',
    amount: '5500 ج.م',
    billingCycle: 'سنوي',
    startDate: '2024-11-01',
    endDate: '2025-11-01',
    status: 'active',
    autoRenew: true,
    paymentMethod: 'Bank Transfer',
    lastPaymentDate: '01/11/2024'
  },
  {
    id: 8,
    companyName: 'الصعيد للنقل',
    email: 'billing@upperegypt.net',
    plan: 'Basic',
    features: '15 حافلة • 5 مستخدمين',
    amount: '1200 ج.م',
    billingCycle: 'شهري',
    startDate: '2025-04-10',
    endDate: '2025-05-10',
    status: 'active',
    autoRenew: true,
    paymentMethod: 'Visa **** 9876',
    lastPaymentDate: '10/04/2025'
  },
  {
    id: 9,
    companyName: 'سوبر جيت',
    email: 'finance@superjet.gov.eg',
    plan: 'Enterprise',
    features: '∞ حافلات • ∞ مستخدمين',
    amount: '6500 ج.م',
    billingCycle: 'سنوي',
    startDate: '2025-02-01',
    endDate: '2026-02-01',
    status: 'active',
    autoRenew: false,
    paymentMethod: 'Check',
    lastPaymentDate: '01/02/2025'
  },
  {
    id: 10,
    companyName: 'الحصان الذهبي',
    email: 'admin@goldenhorse.com',
    plan: 'Pro',
    features: '60 حافلة • 12 مستخدم',
    amount: '2500 ج.م',
    billingCycle: 'شهري',
    startDate: '2025-05-15',
    endDate: '2025-06-15',
    status: 'pending',
    autoRenew: true,
    paymentMethod: 'Pending',
    lastPaymentDate: '15/04/2025'
  },
  {
    id: 11,
    companyName: 'إيجي باص',
    email: 'support@egybus.com',
    plan: 'Basic',
    features: '20 حافلة • 4 مستخدمين',
    amount: '1500 ج.م',
    billingCycle: 'شهري',
    startDate: '2025-01-20',
    endDate: '2025-02-20',
    status: 'canceled',
    autoRenew: false,
    paymentMethod: 'Mastercard **** 5555',
    lastPaymentDate: '20/01/2025'
  },
  {
    id: 12,
    companyName: 'هاي جيت',
    email: 'accounts@highjet.com',
    plan: 'Pro',
    features: '75 حافلة • 15 مستخدم',
    amount: '2800 ج.م',
    billingCycle: 'شهري',
    startDate: '2025-06-01',
    endDate: '2025-07-01',
    status: 'active',
    autoRenew: true,
    paymentMethod: 'Visa **** 3333',
    lastPaymentDate: '01/06/2025'
  },
  {
    id: 13,
    companyName: 'السهم للنقل',
    email: 'contact@arrowbus.eg',
    plan: 'Basic',
    features: '12 حافلة • 3 مستخدمين',
    amount: '1100 ج.م',
    billingCycle: 'شهري',
    startDate: '2025-05-05',
    endDate: '2025-06-05',
    status: 'active',
    autoRenew: false,
    paymentMethod: 'Cash',
    lastPaymentDate: '05/05/2025'
  },
  {
    id: 14,
    companyName: 'إم سي للنقل',
    email: 'info@mctransport.com',
    plan: 'Pro',
    features: '40 حافلة • 8 مستخدمين',
    amount: '1900 ج.م',
    billingCycle: 'شهري',
    startDate: '2024-12-10',
    endDate: '2025-01-10',
    status: 'expired',
    autoRenew: false,
    paymentMethod: 'Visa **** 7777',
    lastPaymentDate: '10/12/2024'
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge variant="success" className="gap-1"><CheckCircle className="size-3" /> نشط</Badge>;
    case "expired":
      return <Badge variant="destructive" className="gap-1"><XCircle className="size-3" /> منتهي</Badge>;
    case "pending":
      return <Badge variant="warning" className="gap-1"><AlertCircle className="size-3" /> معلق</Badge>;
      case "canceled":
      return <Badge variant="secondary" className="gap-1"><XCircle className="size-3" /> ملغي</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getPlanColor = (plan: string) => {
    switch(plan) {
        case 'Enterprise': return 'text-purple-600 bg-purple-50 border-purple-200';
        case 'Pro': return 'text-blue-600 bg-blue-50 border-blue-200';
        default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
}

export default function SubscriptionsTable() {
  return (
    <Card className="border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
      <table className="w-full text-sm text-right">
        <thead className="bg-gray-50 border-b border-gray-100 text-gray-500">
          <tr>
            <th className="px-6 py-4 font-medium">الشركة</th>
            <th className="px-6 py-4 font-medium">الخطة & الميزات</th>
            <th className="px-6 py-4 font-medium">القيمة والمدة</th>
            <th className="px-6 py-4 font-medium">المدة الزمنية</th>
            <th className="px-6 py-4 font-medium">الدفع والتجديد</th>
            <th className="px-6 py-4 font-medium">الحالة</th>
            <th className="px-6 py-4 font-medium"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {subscriptions.map((sub) => (
            <tr key={sub.id} className="group hover:bg-blue-50/30 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xs shrink-0">
                        {sub.companyName.substring(0,2)}
                    </div>
                    <div>
                        <div className="font-bold">{sub.companyName}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <Mail className="size-3" />
                            {sub.email}
                        </div>
                    </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-1.5">
                    <span className={`inline-flex w-fit items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPlanColor(sub.plan)}`}>
                        {sub.plan}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Bus className="size-3 text-gray-400" />
                        {sub.features}
                    </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                    <span className="font-bold text-gray-900">{sub.amount}</span>
                    <span className="text-xs text-gray-500">دفع {sub.billingCycle}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                 <div className="flex flex-col gap-1 text-gray-600">
                    <div className="flex items-center gap-1.5 text-xs bg-green-50 w-fit px-1.5 py-0.5 rounded text-green-700">
                        <span className="font-medium">بدء:</span>
                        <span>{sub.startDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs bg-red-50 w-fit px-1.5 py-0.5 rounded text-red-700">
                        <span className="font-medium">انتهاء:</span>
                        <span>{sub.endDate}</span>
                    </div>
                 </div>
              </td>
              <td className="px-6 py-4">
                 <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-700 font-medium text-xs">
                        <CreditCard className="size-3.5 text-gray-400" />
                        <span>{sub.paymentMethod}</span>
                    </div>
                    {sub.autoRenew && (
                         <div className="flex items-center gap-1 text-[10px] text-blue-600 bg-blue-50 w-fit px-1.5 rounded-full">
                            <RefreshCw className="size-2.5" />
                            تجديد تلقائي
                         </div>
                    )}
                 </div>
              </td>
              <td className="px-6 py-4">
                {getStatusBadge(sub.status)}
              </td>
              <td className="px-6 py-4 text-left">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
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
