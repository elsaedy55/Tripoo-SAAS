'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Card } from '@/components/ui/Card'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // TODO: Add Supabase authentication
      console.log('Login attempt:', { email, password })
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('تم تسجيل الدخول بنجاح')
    } catch (err) {
      setError('فشل تسجيل الدخول. تحقق من البيانات.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tripoo</h1>
            <p className="text-gray-600">نظام إدارة الحجوزات والأساطيل</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              {isLoading ? 'جاري التسجيل...' : 'دخول'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">أو</span>
            </div>
          </div>

          {/* Guest Login */}
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => alert('تسجيل دخول كضيف')}
          >
            زيارة كضيف
          </Button>

          {/* Footer Links */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              ليس لديك حساب؟{' '}
              <a href="/auth/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                أنشئ حسابًا
              </a>
            </p>
          </div>

          {/* Forgot Password Link */}
          <div className="mt-3 text-center">
            <a
              href="/auth/forgot-password"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              هل نسيت كلمة المرور؟
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}
