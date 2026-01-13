'use client'

import React from 'react'
import Link from 'next/link'

interface AuthSplitLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  image?: React.ReactNode
  mode?: 'login' | 'signup'
}

export default function AuthSplitLayout({
  children,
  title,
  subtitle,
  mode = 'login'
}: AuthSplitLayoutProps) {
  return (
    <div className="w-full min-h-screen flex bg-white overflow-hidden relative" dir="rtl">
      
      {/* Form Section (Now First == Right in RTL) */}
      <div className="w-full lg:w-[45%] xl:w-[40%] bg-white h-screen relative z-10 flex flex-col shadow-2xl lg:shadow-none order-last lg:order-first">
          
          {/* Wave SVG Separator - Positioned on the LEFT edge of this container */}
          <div className="absolute top-0 bottom-0 -left-25 w-25.25 hidden lg:block z-20 pointer-events-none">
            <svg 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none" 
              className="w-full h-full text-white fill-current transform scale-x-[-1]"
            >
              <path d="M -1 0 C 40 0 95 20 95 35 C 95 60 40 70 40 85 C 40 95 80 100 90 100 L -1 100 Z" fill="white"/>
            </svg>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="px-8 py-12 md:px-12 md:py-16 min-h-full flex flex-col">
                  {/* Header Row */}
                  <div className="flex justify-between items-center mb-16">
                    <div className="flex items-center gap-2">
                         <div className="size-4 md:size-6 rounded-full bg-blue-600"></div>
                         <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">ترايبوو </span>
                    </div>
                    <div className="flex gap-6 text-sm font-medium text-slate-500">
                        <Link href="/" className="hover:text-slate-900 transition-colors">الرئيسية</Link>
                        <Link href="/auth/signup" className="hover:text-slate-900 transition-colors">انضم إلينا</Link>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
                      <div className="mb-10">
                          <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">ابدأ مجاناً</h3>
                          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                            {title}
                            <span className="text-blue-600">.</span>
                          </h1>
                          <div className="flex items-center gap-2 text-slate-500 font-medium">
                              {mode === 'login' ? (
                                <>
                                  <span>ليس لديك حساب؟</span>
                                  <Link href="/auth/signup" className="text-blue-600 hover:text-blue-700 transition-colors">إنشاء حساب</Link>
                                </>
                              ) : (
                                <>
                                  <span>لديك حساب بالفعل؟</span>
                                  <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 transition-colors">تسجيل الدخول</Link>
                                </>
                              )}
                          </div>
                      </div>
                      
                      {children}
                  </div>
              </div>
          </div>
      </div>

      {/* Brand Section (Now Last == Left in RTL) - The Image */}
      <div className="hidden lg:block lg:w-[55%] xl:w-[60%] relative h-screen bg-slate-900 order-first lg:order-last">
        <div className="absolute inset-0">
             <div 
               className="absolute inset-0 bg-cover bg-center"
               style={{ 
                 backgroundImage: "url('https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
               }}
             ></div>
             <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
             <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
        </div>
        
        {/* Caption */}
        <div className="absolute bottom-12 left-12 text-white z-20 text-right max-w-lg">
             <h2 className="text-3xl font-bold mb-4 leading-tight">إدارة أسطولك الذكي تبدأ من هنا</h2>
             <p className="text-slate-200 text-lg opacity-90 leading-relaxed">
               نظام متكامل لإدارة الرحلات، الحجوزات، وصيانة الحافلات بأحدث تقنيات الذكاء الاصطناعي.
             </p>
        </div>
      </div>

    </div>
  )
}

