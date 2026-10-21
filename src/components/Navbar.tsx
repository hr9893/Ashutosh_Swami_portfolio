"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "./ui/button"
import { FileText } from "lucide-react"

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex gap-8 items-center">
          <Link href="/" className="font-bold text-xl tracking-tight hover:text-primary transition-colors">
            HR9893<span className="text-primary">.</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Work</Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden sm:flex rounded-full font-mono text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors">
            <FileText className="w-3 h-3 mr-2" /> Resume
          </Button>
        </div>
      </div>
    </motion.header>
  )
}