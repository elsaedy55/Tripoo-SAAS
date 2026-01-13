'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Loader2, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import AuthSplitLayout from '@/components/layout/AuthSplitLayout'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsLoading(false)
    alert("تم تسجيل الدخول!")
  }

  return (
    <AuthSplitLayout 
      title="تسجيل الدخول" 
      subtitle="مرحباً بعودتك! أدخل بياناتك للمتابعة"
      mode="login"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-semibold text-slate-500 mr-1">البريد الإلكتروني</Label>
            <div className="relative">
              <Input 
                id="email" 
                placeholder="name@company.com" 
                type="email" 
                className="h-14 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between mr-1 ml-1 mb-1.5">
              <Label htmlFor="password" className="text-xs font-semibold text-slate-500">كلمة المرور</Label>
            </div>
            <div className="relative">
              <Input 
                id="password" 
                placeholder="••••••••" 
                type={showPassword ? "text" : "password"}
                className="h-14 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-4 transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

        <div className="pt-2">
            <Button 
            type="submit" 
            className="w-full h-14 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-500/25 border-0 transition-all active:scale-[0.98]" 
            disabled={isLoading}
            >
            {isLoading ? (
                <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                جاري التحقق...
                </>
            ) : (
                'تسجيل الدخول'
            )}
            </Button>
        </div>
        
        <div className="text-center">
             <Link 
                href="/auth/forgot-password" 
                className="text-sm text-slate-500 hover:text-blue-600 font-medium transition-colors"
              >
                نسيت كلمة المرور؟
              </Link>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          ليس لديك حساب؟{' '}
          <Link href="/auth/signup" className="font-semibold text-slate-900 hover:text-blue-600 transition-colors">
             أنشئ حساباً جديداً
          </Link>
        </p>
      </form>
    </AuthSplitLayout>
  )
}

