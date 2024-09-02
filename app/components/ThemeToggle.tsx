"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon, MixIcon, BlendingModeIcon } from "@radix-ui/react-icons";

import { Button } from "@/app/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="focus-visible:ring-0 focus-visible:ring-offset-0">
          <BlendingModeIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-fit flex flex-col gap-1 p-1">
        <Button variant="outline" onClick={() => setTheme("light")} className="flex justify-start gap-2">
          <SunIcon />Light
        </Button>
        <Button variant="outline" onClick={() => setTheme("dark")} className="flex justify-start gap-2">
          <MoonIcon/>Dark
        </Button>
        <Button variant="outline" onClick={() => setTheme("system")} className="flex justify-start gap-2">
          <MixIcon />System
        </Button>
      </PopoverContent>
    </Popover>
  )
}
