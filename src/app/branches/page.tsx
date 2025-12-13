"use client";

import { useState } from "react";
import { Building2, Warehouse, MapPin } from "lucide-react";
import clsx from "clsx";
import { BranchesList } from "@/components/branches/BranchesList";
import { GaragesList } from "@/components/branches/GaragesList";
import { StationsList } from "@/components/branches/StationsList";

const tabs = [
  { id: "branches", label: "الفروع", icon: Building2 },
  { id: "garages", label: "الجراجات", icon: Warehouse },
  { id: "stations", label: "المحطات", icon: MapPin },
];

export default function BranchesPage() {
  const [activeTab, setActiveTab] = useState("branches");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">الفروع والمحطات</h1>
        <p className="text-sm text-gray-500 mt-1">إدارة فروع الشركة، الجراجات، ومحطات الركوب</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 space-x-reverse" aria-label="Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium transition-colors duration-200"
                )}
              >
                <Icon
                  className={clsx(
                    isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500",
                    "ml-2 -mr-0.5 h-5 w-5"
                  )}
                />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === "branches" && <BranchesList />}
        {activeTab === "garages" && <GaragesList />}
        {activeTab === "stations" && <StationsList />}
      </div>
    </div>
  );
}
