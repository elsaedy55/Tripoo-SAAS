'use client'

import { useState } from 'react'
import { Menu, Bell, Search } from 'lucide-react'
import Sidebar from './Sidebar'
import { clsx } from 'clsx'
import { twMerge } from "tailwind-merge";

function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
            <div className="flex items-center gap-4 flex-1">
                <button onClick={toggleSidebar} className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Menu size={24} />
                </button>
                <div className="relative hidden md:block max-w-md w-full">
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                    <input 
                        type="text" 
                        placeholder="بحث سريع..." 
                        className="w-full h-11 pr-11 pl-4 bg-gray-50/50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all hover:bg-gray-50"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2.5 text-gray-500 hover:bg-gray-50 hover:text-blue-600 rounded-xl relative transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white ring-1 ring-red-50"></span>
                </button>
                <div className="h-8 w-[1px] bg-gray-100 mx-2 hidden md:block"></div>
                <div className="flex items-center gap-3 pl-1">
                    <div className="text-left hidden md:block">
                        <p className="text-sm font-bold text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500 font-medium">سوبر أدمن</p>
                    </div>
                    <div className="size-10 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-blue-500/20 shadow-lg ring-2 ring-white cursor-pointer hover:shadow-xl transition-all active:scale-95">
                        A
                    </div>
                </div>
            </div>
        </header>
    )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Mobile sidebar state could be handled separately if needed
  // For now just using the collapsed state logic for desktop layout

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <div 
        className={clsx(
            "min-h-screen flex flex-col transition-all duration-300 w-full",
            isCollapsed ? "pr-20" : "pr-64"
        )}
      >
        <Header toggleSidebar={() => setIsCollapsed(!isCollapsed)} />
        <main className="flex-1 p-4 lg:p-8 w-full">
            {children}
        </main>
      </div>
    </div>
  )
}
