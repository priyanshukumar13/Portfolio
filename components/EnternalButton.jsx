"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"


export function JourneyButton({ text = "View Journey", onClick, className }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={cn(
        "relative flex items-center justify-center gap-2 rounded-full px-6 py-3 text-white transition-all duration-300",
        "bg-gradient-to-r from-purple-950 to-black",
        "hover:from-purple-900 hover:to-purple-950 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]",
        className,
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="font-medium">{text}</span>
      <ChevronRight className={cn("h-4 w-4 transition-transform duration-300", isHovered ? "translate-x-0.5" : "")} />
    </button>
  )
}

