import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Particles from "@/components/Particles";
import CustomCursor from "@/components/CustomCursor";
import MouseGlow from "@/components/MouseGlow";
import StarsAndComets from "@/components/StarsAndComets";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aigentic Automations | Build Automations. Save Time. Create Value.",
  description: "AI-powered business automations that save time and create value. Build your digital workforce today.",
  keywords: ["automations", "AI", "business", "productivity", "digital workforce"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        {/* Mesh gradient background */}
        <div className="mesh-gradient" aria-hidden="true" />
        
        {/* Additional gradient blobs */}
        <div className="gradient-blob gradient-blob-1" aria-hidden="true" />
        <div className="gradient-blob gradient-blob-2" aria-hidden="true" />
        
        {/* Particle effects */}
        <Particles />
        
        {/* Mouse glow effect */}
        <MouseGlow />
        
        {/* Stars and comets */}
        <StarsAndComets />
        
        {/* Custom cursor */}
        <CustomCursor />
        
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Main content */}
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
