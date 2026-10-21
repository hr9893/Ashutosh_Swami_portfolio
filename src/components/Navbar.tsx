"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { useState } from "react"
import { FileText, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex gap-8 items-center">
            <Link href="/" className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Ashutosh.
            </Link>
            <nav className="hidden md:flex gap-6">
              {/* Changed this to only have the Work link since About is now the main page */}
              <Link href="/#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Work</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="text-sm font-medium flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-background border border-border/50 w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-secondary/30">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-500" />
                Resume
              </h3>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild className="rounded-full hover:text-purple-400 hover:border-purple-400 transition-colors">
                  <a href="/resume.pdf" download="Ashutosh_Swami_Resume.pdf">
                    <Download className="w-4 h-4 mr-2" /> Download
                  </a>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsResumeOpen(false)} className="rounded-full hover:bg-red-500/10 hover:text-red-500 transition-colors">
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Modal Body (PDF Viewer) */}
            <div className="flex-1 w-full bg-muted/10 overflow-hidden">
              {/* If the resume has multiple pages, the iframe will automatically render an internal scrollbar */}
              <iframe 
                src="/resume.pdf" 
                className="w-full h-full border-none"
                title="Resume PDF"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}