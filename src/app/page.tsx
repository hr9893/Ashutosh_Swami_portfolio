import projectsData from "@/data/projects.json"
import { Project } from "@/types/project"
import { ProjectGrid } from "@/components/ProjectGrid"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const projects = projectsData as Project[]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🚀 GITHUB-STYLE INTERACTIVE ANIMATED BACKGROUND 🚀 */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent bg-[length:20px_20px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Sleek Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-purple-500/30 text-sm mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-100">Senior Software & AI Engineer</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Ashutosh Swami</span>.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            I build scalable microservices and intelligent agents, bridging the gap between robust backend systems and modern AI.
          </p>

          <div className="flex gap-4">
            <Button asChild size="lg" className="rounded-full px-8 hover:scale-105 transition-transform bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0">
              <Link href="#projects">View Work <ArrowDown className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full px-8 hover:scale-105 transition-transform border-purple-500/30 hover:bg-purple-500/10">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </section>

        {/* Refined Projects Section */}
        <section className="py-20" id="projects">
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Selected Work</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-xl">Explore my recent projects spanning microservices, real-time apps, and AI.</p>
          </div>

          <div className="p-4 md:p-8 rounded-[2rem] bg-secondary/10 border border-border/50 shadow-2xl backdrop-blur-sm">
            <ProjectGrid projects={projects} />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 mt-12 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <div className="flex gap-4">
            <a href="https://github.com/hr9893" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 border border-border/50 hover:border-purple-500 hover:text-purple-400 transition-all hover:-translate-y-1">
              <Github className="w-5 h-5"/>
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-swami-b46202207" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 border border-border/50 hover:border-blue-400 hover:text-blue-400 transition-all hover:-translate-y-1">
              <Linkedin className="w-5 h-5"/>
            </a>
            <a href="mailto:ashutoshswami9893@gmail.com" className="p-3 rounded-full bg-secondary/50 border border-border/50 hover:border-purple-500 hover:text-purple-400 transition-all hover:-translate-y-1">
              <Mail className="w-5 h-5"/>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}