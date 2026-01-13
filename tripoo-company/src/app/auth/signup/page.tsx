'use client'

import { useState } from 'react'
import { Loader2, Mail, User, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import AuthSplitLayout from '@/components/layout/AuthSplitLayout'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setIsLoading(false)
    alert("تم إنشاء الحساب!")
  }

  return (
    <AuthSplitLayout 
      title="إنشاء حساب جديد" 
      subtitle=""
      mode="signup"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name Row */}
        <div className="grid grid-cols-2 gap-4">
            <div className="group space-y-1.5">
                <Label htmlFor="firstName" className="text-xs font-semibold text-slate-500 mr-1">الاسم الأول</Label>
                <div className="relative">
                    <Input 
                        id="firstName" 
                        name="firstName" 
                        placeholder="محمد" 
                        className="h-14 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-400"
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                    />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                </div>
            </div>

            <div className="group space-y-1.5">
                <Label htmlFor="lastName" className="text-xs font-semibold text-slate-500 mr-1">اسم العائلة</Label>
                <div className="relative">
                    <Input 
                        id="lastName" 
                        name="lastName" 
                        placeholder="أحمد" 
                        className="h-14 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-400"
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                    />
                     <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                </div>
            </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-semibold text-slate-500 mr-1">البريد الإلكتروني</Label>
            <div className="relative">
                <Input 
                id="email" 
                name="email"
                type="email"
                placeholder="name@company.com" 
                className="h-14 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-400"
                value={formData.email}
                onChange={handleChange}
                required 
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
            </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
            <Label htmlFor="password" className="text-xs font-semibold text-slate-500 mr-1">كلمة المرور</Label>
            <div className="relative">
                <Input 
                id="password" 
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••" 
                className="h-14 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-400"
                value={formData.password}
                onChange={handleChange}
                required 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
            </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row gap-4">
            <Button 
                type="button" 
                className="flex-1 h-14 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-sm border-0 transition-all shadow-none" 
            >
                تغيير الطريقة
            </Button>

            <Button 
                type="submit" 
                className="flex-2 h-14 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 border-0 transition-all active:scale-[0.98]" 
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    جاري الإنشاء...
                    </>
                ) : (
                    'إنشاء الحساب'
                )}
            </Button>
        </div>
      </form>
    </AuthSplitLayout>
  )
}

