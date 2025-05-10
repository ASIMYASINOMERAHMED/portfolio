"use client"

import { useThemeColor } from "@/components/theme-provider"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

export function ColorThemeSwitcher() {
  const { themeColor, setThemeColor } = useThemeColor()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-9 h-9">
        <Palette className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Change theme color</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-9 h-9">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change theme color</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-2">
        <div className="mb-2 text-xs text-muted-foreground text-center">Choose theme color</div>
        <div className="grid grid-cols-3 gap-2">
          <div
            className={`color-swatch color-swatch-blue ${themeColor === "blue" ? "active" : ""}`}
            onClick={() => setThemeColor("blue")}
            title="Blue"
          />
          <div
            className={`color-swatch color-swatch-green ${themeColor === "green" ? "active" : ""}`}
            onClick={() => setThemeColor("green")}
            title="Green"
          />
          <div
            className={`color-swatch color-swatch-purple ${themeColor === "purple" ? "active" : ""}`}
            onClick={() => setThemeColor("purple")}
            title="Purple"
          />
          <div
            className={`color-swatch color-swatch-orange ${themeColor === "orange" ? "active" : ""}`}
            onClick={() => setThemeColor("orange")}
            title="Orange"
          />
          <div
            className={`color-swatch color-swatch-pink ${themeColor === "pink" ? "active" : ""}`}
            onClick={() => setThemeColor("pink")}
            title="Pink"
          />
          <div
            className={`color-swatch color-swatch-red ${themeColor === "red" ? "active" : ""}`}
            onClick={() => setThemeColor("red")}
            title="Red"
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

