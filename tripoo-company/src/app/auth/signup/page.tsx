'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Card } from '@/components/ui/Card'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة')
      return
    }

    setIsLoading(true)

    try {
      // TODO: Add Supabase signup
      console.log('Signup attempt:', formData)
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('تم إنشاء الحساب بنجاح')
    } catch (err) {
      setError('فشل إنشاء الحساب. حاول مرة أخرى.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 to-indigo-700 flex">
      {/* Left Side - Logo & Branding */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center text-white p-8">
        <div className="text-center">
          <div className="text-6xl font-bold mb-4">Tripoo</div>
          <p className="text-xl text-blue-100 mb-8">نظام إدارة الحجوزات والأساطيل</p>
          <p className="text-blue-100 max-w-sm mx-auto leading-relaxed">
            منصة متكاملة لإدارة الرحلات والحجوزات وأساطيل الأتوبيسات بكفاءة عالية
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-sm shadow-lg">
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8 lg:hidden">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Tripoo</h1>
              <p className="text-gray-600">إنشاء حساب جديد</p>
            </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName">اسم الشركة</Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="اسم شركتك"
                value={formData.companyName}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">الهاتف</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+966512345678"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-6"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'جاري الإنشاء...' : 'إنشاء حساب'}
            </Button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              لديك حساب بالفعل؟{' '}
              <a href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
                سجل دخول
              </a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  </div>
  )
}
