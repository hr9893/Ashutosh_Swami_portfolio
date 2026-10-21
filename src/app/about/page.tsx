"use client"
import { useState, useEffect } from "react"
import projectsData from "@/data/projects.json"
import { Project } from "@/types/project"
import { ProjectGrid } from "@/components/ProjectGrid"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Database, BrainCircuit, Terminal } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Inline Typewriter component for the hero section
function Typewriter({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [roles])

  return (
    <div className="h-[40px] overflow-hidden flex items-center mt-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-3xl font-medium text-muted-foreground"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default function Home() {
  const projects = projectsData as Project[]

  return (
    <div className="container mx-auto px-4 py-8 relative">

      {/* Background glow effect */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-[-1]" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex flex-col items-center text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/60 border border-border/50 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">Available for new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">Ashutosh</span>.
          </h1>

          <Typewriter roles={[
            "Backend Software Engineer",
            "AI Engineering Enthusiast",
            "Microservices Architect",
            "Agentic Systems Builder"
          ]} />

          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build scalable distributed systems and intelligent LLM-powered applications. 
            Blending robust backend architecture with modern AI solutions.
          </p>

          <div className="flex gap-4 justify-center mt-10">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              <Link href="#projects">View Work <ArrowDown className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full bg-card/60 backdrop-blur-xl border border-border/50 hover:bg-card/80">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid */}
      <section className="py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">

          {/* About Me Tile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="bg-card/60 backdrop-blur-xl border border-border/50 shadow-xl rounded-3xl p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                With ~4 years of experience crafting enterprise-grade microservices using Java, Spring Boot, and Kafka, I am transitioning into the cutting-edge world of AI Engineering. I focus on hybrid RAG architectures, LLM agents, and robust integrations.
              </p>
            </div>
            <Link href="/about" className="text-sm font-mono text-primary flex items-center hover:underline">
              Read full bio <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          {/* Tech Stack Tile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-card/60 backdrop-blur-xl border border-border/50 shadow-xl rounded-3xl p-6 md:col-span-1 md:row-span-2 flex flex-col"
          >
            <h2 className="text-xl font-bold mb-6">Stack</h2>
            <div className="flex flex-col gap-4 flex-grow">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2"><Database className="w-4 h-4"/> Backend</div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-mono bg-card px-2 py-1 rounded border">Java</span>
                  <span className="text-xs font-mono bg-card px-2 py-1 rounded border">Spring</span>
                  <span className="text-xs font-mono bg-card px-2 py-1 rounded border">Kafka</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2"><BrainCircuit className="w-4 h-4"/> AI/ML</div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">Python</span>
                  <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">LangChain</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Github Tile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-card/60 backdrop-blur-xl border border-border/50 shadow-xl rounded-3xl p-6 md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-card/80 transition-colors"
            onClick={() => window.open("https://github.com/hr9893", "_blank")}
          >
            <Github className="w-10 h-10 mb-3 group-hover:text-primary transition-colors" />
            <h3 className="font-bold">GitHub</h3>
            <p className="text-xs text-muted-foreground mt-1">@hr9893</p>
          </motion.div>

          {/* Contact Tile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="bg-primary/10 border border-primary/20 rounded-3xl p-6 md:col-span-1 md:row-span-1 flex flex-col justify-center relative overflow-hidden group cursor-pointer"
            onClick={() => window.location.href = "mailto:ashutoshswami9893@gmail.com"}
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <Mail className="w-8 h-8 text-primary mb-3 relative z-10" />
            <h3 className="font-bold relative z-10">Get in touch</h3>
            <p className="text-xs text-primary/70 mt-1 relative z-10">Email me</p>
          </motion.div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative z-10" id="projects">
        <div className="flex items-center gap-4 mb-10">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">All Projects</h2>
        </div>
        <ProjectGrid projects={projects} />
      </section>

      {/* Experience Timeline */}
      <section className="py-20 border-t border-border/50 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Experience</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {[
            {
              role: "Senior Software Engineer",
              company: "Manhattan Associates",
              year: "2021 - Present",
              desc: "Architecting backend microservices using Java and Spring Boot. Implementing event-driven pipelines with Apache Kafka, improving system throughput and reliability."
            },
            {
              role: "Software Engineer",
              company: "Previous Roles",
              year: "2019 - 2021",
              desc: "Developed full-stack web applications. Optimized database queries and built scalable RESTful APIs, reducing latency significantly."
            }
          ].map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[-40px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
              <div className="bg-card/60 backdrop-blur-xl border border-border/50 shadow-xl p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-sm font-mono text-primary mt-1 md:mt-0">{exp.year}</span>
                </div>
                <h4 className="text-muted-foreground font-medium mb-4">{exp.company}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}