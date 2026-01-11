"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { AddRouteModal } from "./AddRouteModal";

export function AddRouteButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
        <Plus className="ml-2 h-4 w-4" />
        إضافة خط جديد
      </Button>
      <AddRouteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
