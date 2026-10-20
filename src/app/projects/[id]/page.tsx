import { notFound } from "next/navigation"
import projectsData from "@/data/projects.json"
import { Project } from "@/types/project"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ProjectTabs } from "@/components/ProjectTabs"

export function generateStaticParams() {
  return projectsData.map((project: any) => ({
    id: project.id,
  }))
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = (projectsData as Project[]).find(p => p.id === params.id)
  if (!project) notFound()

  const currentIndex = projectsData.findIndex(p => p.id === params.id)
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to projects
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
          <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-sm border-none bg-primary text-primary-foreground">
            {project.status}
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
          {project.overview}
        </p>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium">
          <span className="flex items-center gap-2">Role: <span className="text-foreground">{project.role}</span></span>
          <span className="flex items-center gap-2">Year: <span className="text-foreground">{project.year}</span></span>
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="rounded-2xl overflow-hidden border bg-muted aspect-[21/9] mb-8 relative">
             {project.images[0] && (
               <img src={project.images[0]} alt={project.title} className="object-cover w-full h-full" />
             )}
          </div>
          <ProjectTabs project={project} />
        </div>

        <aside className="space-y-8">
          <div>
            <h3 className="font-semibold mb-4 text-lg">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <Badge key={tech} variant="outline" className="bg-card">{tech}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map(m => (
                <div key={m.label} className="p-4 rounded-xl border bg-card text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{m.value}</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Links</h3>
            <div className="flex flex-col gap-3">
              {project.links.github && (
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href={project.links.github} target="_blank" rel="noreferrer"><Github className="w-4 h-4 mr-2" /> Source Code</a>
                </Button>
              )}
              {project.links.live && (
                <Button className="w-full justify-start" asChild>
                  <a href={project.links.live} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> Live Demo</a>
                </Button>
              )}
              {project.links.demo && !project.links.live && (
                <Button className="w-full justify-start" asChild>
                  <a href={project.links.demo} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> View Demo</a>
                </Button>
              )}
              {project.links.video && (
                <Button variant="secondary" className="w-full justify-start" asChild>
                  <a href={project.links.video} target="_blank" rel="noreferrer"><Play className="w-4 h-4 mr-2" /> Watch Video</a>
                </Button>
              )}
            </div>
          </div>
        </aside>
      </div>

      <div className="border-t mt-20 pt-10 flex justify-between items-center">
        {prevProject ? (
          <Link href={`/projects/${prevProject.id}`} className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-xs opacity-70 mb-1">Previous Project</div>
              <div className="text-foreground">{prevProject.title}</div>
            </div>
          </Link>
        ) : <div />}
        
        {nextProject ? (
          <Link href={`/projects/${nextProject.id}`} className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground text-right transition-colors">
            <div>
              <div className="text-xs opacity-70 mb-1">Next Project</div>
              <div className="text-foreground">{nextProject.title}</div>
            </div>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
