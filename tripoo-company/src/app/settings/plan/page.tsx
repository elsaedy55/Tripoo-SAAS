import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Crown, Palette, Globe, Shield, Zap, CheckCircle2, Users, Bus, BarChart3 } from "lucide-react";

const plans = [
  {
    id: "limited",
    name: "Limited",
    price: "500 ج.م / شهر",
    desc: "للفروع الصغيرة وحدود تشغيلية واضحة.",
    bullets: ["حتى 20 أتوبيس", "حتى 10 موظفين", "حتى 500 رحلة شهرياً", "دعم عبر البريد"],
    features: ["تقارير أساسية", "إشعارات بريد/SMS", "API محدود"],
    cta: "ابق على الخطة",
    tone: "neutral",
  },
  {
    id: "unlimited",
    name: "Unlimited",
    price: "1500 ج.م / شهر",
    desc: "تشغيل كامل بلا حدود تشغيلية.",
    bullets: ["بدون حدود أتوبيسات", "بدون حدود موظفين", "بدون حدود رحلات", "دعم سريع بريد/هاتف"],
    features: ["تقارير متقدمة", "Webhooks/API كامل", "أرشفة وتجزئة"],
    cta: "ترقية إلى Unlimited",
    tone: "primary",
  },
  {
    id: "white-label",
    name: "White Label",
    price: "5000 ج.م / شهر",
    desc: "تخصيص براند ودومين مخصص بالكامل.",
    bullets: ["كل مزايا Unlimited", "دومين + TLS", "ألوان/شعار/فافيكون", "اسم نظام مخصص"],
    features: ["SLA مخصص", "مدير حساب", "دعم 24/7"],
    cta: "اطلب تفعيل White Label",
    tone: "dark",
  },
];

const usage = {
  buses: { used: 12, max: 20, label: "الأتوبيسات" },
  employees: { used: 8, max: 10, label: "الموظفون" },
  trips: { used: 180, max: 500, label: "الرحلات الشهرية" },
};

const Progress = ({ value, max }: { value: number; max: number }) => {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const intent = pct >= 100 ? "bg-red-500" : pct >= 80 ? "bg-amber-500" : "bg-emerald-500";
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-gray-600">
        <span>{value} / {max}</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div className={`${intent} h-full`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

export default function PlanPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Hero */}
      <Card className="overflow-hidden border-0 shadow-md bg-linear-to-l from-blue-600 via-indigo-600 to-purple-600 text-white">
        <CardContent className="px-6 py-12 lg:px-10 lg:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3">
            <p className="text-sm opacity-80">إدارة الاشتراك والترقية</p>
            <h1 className="text-3xl lg:text-4xl font-bold">اختر الخطة المناسبة لنمو شركتك</h1>
            <p className="text-sm lg:text-base opacity-90 max-w-3xl">راقب حدود خطتك الحالية، وفعّل المزايا المتقدمة أو التخصيص الكامل عبر White Label.</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success" className="bg-white/15 text-white border-white/30">تجربة مدفوعة بالإدارة</Badge>
              <Badge variant="info" className="bg-white/15 text-white border-white/30">دعم مباشر للتفعيل</Badge>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button className="bg-white text-blue-700 hover:bg-slate-100">التحدث مع الدعم</Button>
            <Button variant="outline" className="bg-transparent border-white/60 text-white hover:bg-white/10">عرض الفواتير</Button>
          </div>
        </CardContent>
      </Card>

      {/* Usage summary */}
      <div className="space-y-3 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { key: "buses", icon: Bus, label: "الأتوبيسات" },
            { key: "employees", icon: Users, label: "الموظفون" },
            { key: "trips", icon: BarChart3, label: "الرحلات الشهرية" },
          ].map(({ key, icon: Icon, label }) => {
            const item = usage[key as keyof typeof usage];
            const pct = Math.min(100, Math.round((item.used / (item as any).max) * 100));
            return (
              <div key={key} className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700">{label}</p>
                    <span className="text-xs font-semibold text-gray-500">{item.used}/{(item as any).max}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={pct >= 80 ? "bg-red-500" : pct >= 60 ? "bg-yellow-500" : "bg-green-500"}
                      style={{ width: `${pct}%` }} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{pct}%</span>
                    <Badge variant="default" className="text-xs">استخدام</Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:items-start">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-lg border p-8 transition-all ${
              plan.tone === "primary"
                ? "border-gray-400 bg-white shadow-xl lg:scale-105 lg:z-10"
                : "border-gray-200 bg-white shadow-sm hover:shadow-md"
            }`}
          >
            {plan.tone === "primary" && (
              <div className="mb-4 inline-block px-2 py-1 bg-gray-900 text-white text-xs font-semibold rounded">
                الأكثر طلباً
              </div>
            )}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </div>

              {/* Price */}
              <div className="py-4 border-y border-gray-200">
                <div className="text-3xl font-bold text-gray-900">
                  {plan.price.split(" ")[0]} <span className="text-base font-normal text-gray-500">ج.م</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">/ شهر</p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {plan.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="pt-0.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Additional features */}
              {plan.features.length > 0 && (
                <div className="space-y-2 pt-2">
                  {plan.features.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="pt-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                      </div>
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              <Button
                className={`w-full mt-4 font-medium ${
                  plan.tone === "primary"
                    ? "bg-gray-900 hover:bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* White label highlight */}
      <Card className="shadow-sm border-gray-100">
        <CardHeader className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-purple-600" />
            <CardTitle className="text-lg font-bold">الخطة الثالثة: White Label</CardTitle>
            <Badge variant="info">تخصيص كامل</Badge>
          </div>
          <p className="text-sm text-gray-500">ألوانك، شعارك، دومينك، مع دعم ومدير حساب مخصص.</p>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{
            icon: Shield,
            title: "SLA ودعم",
            desc: "مدير حساب + دعم 24/7."
          }, {
            icon: Globe,
            title: "دومين مخصص",
            desc: "إعداد CNAME وTLS تلقائي."
          }, {
            icon: Palette,
            title: "هوية مرئية",
            desc: "Primary/Secondary + فافيكون + لوجو."
          }, {
            icon: Crown,
            title: "تجربة branded",
            desc: "اسم نظام مخصص يظهر لكل موظفيك."
          }].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-gray-50/70 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-white text-purple-600 shadow-sm">
                <item.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
