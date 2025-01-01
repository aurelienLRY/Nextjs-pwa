'use client'

import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  // État local pour le montage et le thème actuel
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined);
  const { setTheme, resolvedTheme } = useTheme();

  // Synchroniser le thème après le montage
  useEffect(() => {
    setMounted(true);
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  // Gérer le changement de thème
  const handleThemeChange = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  // Rendu pendant le chargement
  if (!mounted || !currentTheme) {
    return (
      <Button
        isIconOnly
        variant="ghost"
        className="w-10 h-10 opacity-0"
        disabled
        aria-hidden="true"
      />
    );
  }

  return (
    <Button
      isIconOnly
      variant="ghost"
      className="theme-switch-button bg-swissborg-primary/10 hover:bg-swissborg-primary/20 w-10 h-10"
      onClick={handleThemeChange}
      aria-label="Changer le thème"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <div 
          className={`absolute inset-0 transform transition-all duration-300 ${
            currentTheme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
          }`}
        >
          <SunIcon className="text-swissborg-primary w-5 h-5" />
        </div>
        <div 
          className={`absolute inset-0 transform transition-all duration-300 ${
            currentTheme === 'dark' ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
          }`}
        >
          <MoonIcon className="text-swissborg-primary w-5 h-5" />
        </div>
      </div>
    </Button>
  );
} 