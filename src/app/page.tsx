"use client";

import { ThemeSwitch } from "@/components/theme-switch";
import DemoButton from "@/components/Button/demo.button";
import { Tabs, Tab, Card } from "@nextui-org/react";
import DemoInput from "@/components/Input/demo.input";
import DemoCard from "@/components/Card/demo.card";
import DemoTable from "@/components/Table/demo.table";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="w-full h-16 border-b border-swissborg-gray/20 px-6 flex items-center justify-between fixed top-0 bg-background/80 backdrop-blur-md z-50">
        <h1 className="text-xl font-semibold text-swissborg-primary">Swissborg UI</h1>
        <ThemeSwitch />
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-6 pb-20">
        <Tabs 
          aria-label="Components" 
          color="primary" 
          variant="underlined"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-swissborg-gray/20",
            cursor: "w-full bg-swissborg-primary",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-swissborg-primary"
          }}
        >
          <Tab key="colors" title="Couleurs & Style">
            <Card className="mt-6 p-6">
              {/* Section Couleurs */}
              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-swissborg-primary">Couleurs</h2>
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
              <section>
                <h2 className="text-3xl font-semibold mb-8 text-swissborg-primary">Typographie</h2>
                <div className="space-y-8">
                  <div className="card-animation p-6 rounded-xl bg-swissborg-primary/10 dark:bg-swissborg-secondary/20 backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold mb-4">TT Commons</h3>
                    <div className="space-y-4">
                      <p className="text-4xl font-normal">Regular - The quick brown fox jumps over the lazy dog</p>
                      <p className="text-4xl font-semibold">DemiBold - The quick brown fox jumps over the lazy dog</p>
                    </div>
                  </div>
                </div>
              </section>
            </Card>
          </Tab>

          <Tab key="buttons" title="Boutons">
            <Card className="mt-6 p-6">
              <h2 className="text-2xl font-semibold mb-6">Boutons</h2>
              <DemoButton />
            </Card>
          </Tab>

          <Tab key="inputs" title="Inputs">
            <Card className="mt-6 p-6">
              <h2 className="text-2xl font-semibold mb-6">Champs de saisie</h2>
              <DemoInput />
            </Card>
          </Tab>

          <Tab key="cards" title="Cards">
            <Card className="mt-6 p-6">
              <h2 className="text-2xl font-semibold mb-6">Cartes</h2>
              <DemoCard />
            </Card>
          </Tab>

          <Tab key="tables" title="Tables">
            <Card className="mt-6 p-6">
              <h2 className="text-2xl font-semibold mb-6">Tableaux</h2>
              <DemoTable />
            </Card>
          </Tab>
        </Tabs>
      </main>
    </div>
  );
}
