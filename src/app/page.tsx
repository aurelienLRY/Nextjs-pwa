"use client";

import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <div className="absolute top-4 right-4 z-50">
        <ThemeSwitch />
      </div>

      {/* En-tête */}
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-semibold text-swissborg-primary transition-colors duration-300 mb-4">
          Swissborg Design System
        </h1>
        <p className="text-xl text-swissborg-gray transition-colors duration-300">
          Guide des couleurs et des styles
        </p>
      </header>

      {/* Section Couleurs */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-swissborg-primary">
          Couleurs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Primary */}
          <div className="card-animation rounded-xl overflow-hidden">
            <div className="h-32 bg-swissborg-primary"></div>
            <div className="p-4 bg-background/80 backdrop-blur-sm">
              <h3 className="font-semibold">Primary</h3>
              <p className="text-sm text-swissborg-gray">#01C38E</p>
            </div>
          </div>

          {/* Secondary */}
          <div className="card-animation rounded-xl overflow-hidden">
            <div className="h-32 bg-swissborg-secondary"></div>
            <div className="p-4 bg-background/80 backdrop-blur-sm">
              <h3 className="font-semibold">Secondary</h3>
              <p className="text-sm text-swissborg-gray">#132D46</p>
            </div>
          </div>

          {/* Dark */}
          <div className="card-animation rounded-xl overflow-hidden">
            <div className="h-32 bg-swissborg-dark"></div>
            <div className="p-4 bg-background/80 backdrop-blur-sm">
              <h3 className="font-semibold">Dark</h3>
              <p className="text-sm text-swissborg-gray">#1A1E29</p>
            </div>
          </div>

          {/* Gray */}
          <div className="card-animation rounded-xl overflow-hidden">
            <div className="h-32 bg-swissborg-gray"></div>
            <div className="p-4 bg-background/80 backdrop-blur-sm">
              <h3 className="font-semibold">Gray</h3>
              <p className="text-sm text-swissborg-gray">#6A6E79</p>
            </div>
          </div>

          {/* Light */}
          <div className="card-animation rounded-xl overflow-hidden">
            <div className="h-32 bg-swissborg-light"></div>
            <div className="p-4 bg-background/80 backdrop-blur-sm">
              <h3 className="font-semibold">Light</h3>
              <p className="text-sm text-swissborg-gray">#FFFFFF</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Typographie */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-swissborg-primary">
          Typographie
        </h2>
        <div className="space-y-8">
          <div className="card-animation p-6 rounded-xl bg-swissborg-primary/10 dark:bg-swissborg-secondary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">TT Commons</h3>
            <div className="space-y-4">
              <p className="text-4xl font-normal">
                Regular - The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-4xl font-semibold">
                DemiBold - The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Dégradés */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-swissborg-primary">
          Dégradés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-animation h-48 rounded-xl overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-swissborg-dark to-swissborg-darker p-6">
              <h3 className="text-white font-semibold">Dark Gradient</h3>
              <p className="text-swissborg-gray">from-dark to-darker</p>
            </div>
          </div>
          <div className="card-animation h-48 rounded-xl overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-swissborg-primary/20 to-swissborg-primary p-6">
              <h3 className="text-white font-semibold">Primary Gradient</h3>
              <p className="text-swissborg-gray">from-primary/20 to-primary</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
