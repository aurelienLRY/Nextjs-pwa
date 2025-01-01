'use client'

import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      variant="light"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Changer le thème"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
} 