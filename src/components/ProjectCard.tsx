"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Project } from "@/types/project"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function ProjectCard({ project, view }: { project: Project; view: "grid" | "list" }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className="h-full group"
    >
      <Link href={`/projects/${project.id}`}>
        <Card className={`h-full cursor-pointer transition-all duration-300 glass-card group-hover:border-primary/50 group-hover:shadow-primary/10 ${view === "list" ? "flex flex-col sm:flex-row" : "flex flex-col"}`}>
          <div className={`${view === "list" ? "sm:w-1/3 w-full" : "w-full"} h-48 bg-card/50 rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl overflow-hidden relative`}>

            {/* NEXT/IMAGE FIX: Optimizes load speed and prevents layout shift */}
            {project.images && project.images[0] && (
              <Image 
                src={project.images[0]} 
                alt={project.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={project.featured}
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            {project.status === "In Progress" && (
              <Badge className="absolute top-4 right-4 bg-yellow-500/90 text-white border-none backdrop-blur-md">In Progress</Badge>
            )}
          </div>
          <div className={`${view === "list" ? "sm:w-2/3 w-full" : "w-full"} flex flex-col flex-grow relative`}>
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <span className="text-xs text-muted-foreground font-mono bg-card/80 px-2 py-1 rounded-md">{project.year}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.tagline}</p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.slice(0, 3).map(tech => (
                  <span key={tech} className="text-[10px] font-mono tracking-wider uppercase bg-primary/10 text-primary px-2 py-1 rounded-sm">{tech}</span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[10px] font-mono tracking-wider uppercase bg-card text-muted-foreground px-2 py-1 rounded-sm">+{project.techStack.length - 3}</span>
                )}
              </div>
            </CardContent>

            <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}