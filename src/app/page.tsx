import projectsData from "@/data/projects.json"
import { Project } from "@/types/project"
import { ProjectGrid } from "@/components/ProjectGrid"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const projects = projectsData as Project[]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-20 md:py-32 flex flex-col items-start max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          Hi, I'm Ashutosh Swami.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Senior Software Engineer (Java, Python, Spring Boot, Kafka, microservices) transitioning into AI Engineering. 
          I build scalable systems and intelligent agents.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View Work <ArrowDown className="ml-2 w-4 h-4" /></Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">About Me</Link>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 border-t" id="projects">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Work</h2>
          <p className="text-muted-foreground">Explore my recent projects spanning microservices, real-time apps, and AI.</p>
        </div>
        <ProjectGrid projects={projects} />
      </section>

      {/* Contact Section */}
      <section className="py-24 border-t mt-12 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          I'm currently looking for new opportunities in AI Engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            {/* UPDATED GITHUB URL HERE */}
            <a href="https://github.com/hr9893" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="w-5 h-5"/></a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/ashutosh-swami-b46202207" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-5 h-5"/></a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:ashutoshswami9893@gmail.com" aria-label="Email"><Mail className="w-5 h-5"/></a>
          </Button>
        </div>
      </section>
    </div>
  )
}