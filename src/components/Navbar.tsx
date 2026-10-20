import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex gap-6 items-center">
          <Link href="/" className="font-bold text-lg tracking-tight">ASWAMI.</Link>
          <nav className="hidden md:flex gap-4">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">Work</Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
