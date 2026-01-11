import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 h-20 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        {/* Search Bar Placeholder */}
        <div className="relative w-full max-w-md hidden md:block">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pr-10 pl-3 py-2 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-400 sm:text-sm transition-all duration-200"
            placeholder="بحث سريع..."
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
           <span className="text-sm font-medium text-gray-500 hidden sm:block">ترايبوو لإدارة شركات النقل</span>
           <div className="h-4 w-px bg-gray-200 mx-2 hidden sm:block"></div>
        </div>

        <button className="p-2.5 rounded-xl text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 relative group">
          <Bell className="h-6 w-6" />
          <span className="absolute top-2.5 right-2.5 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </header>
  );
}
