import { Providers } from "./providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swissborg UI",
  description: "Swissborg UI",
  keywords: ["Swissborg", "UI", "Next.js", "React", "Tailwind", "Shadcn"],
  generator: "Next.js",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/android-chrome-192x192.png",
  },
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  authors: [
    {
      name: "Leroy Aurélien",
      url: "https://www.linkedin.com/in/aur%C3%A9lien-leroy-8304a9284/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
