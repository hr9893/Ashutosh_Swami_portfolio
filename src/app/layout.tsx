import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata: Metadata = {
  title: "Ashutosh Swami | Backend & AI Engineer",
  description: "Portfolio of Ashutosh Swami, Backend Engineer transitioning into AI Engineering.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans relative antialiased min-h-screen flex flex-col bg-[#0d1117] text-white`}>
        {/* WE FORCED DARK MODE HERE by setting defaultTheme="dark" */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">

          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  )
}