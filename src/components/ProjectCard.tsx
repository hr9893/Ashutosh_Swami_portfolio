"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Project } from "@/types/project"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectCard({ project, view }: { project: Project; view: "grid" | "list" }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={`/projects/${project.id}`}>
        <Card className={`h-full cursor-pointer transition-shadow hover:shadow-lg ${view === "list" ? "flex flex-row" : "flex flex-col"}`}>
          <div className={`${view === "list" ? "w-1/3" : "w-full"} h-48 bg-muted rounded-t-2xl overflow-hidden relative`}>
            {project.images[0] && (
              <img src={project.images[0]} alt={project.title} className="object-cover w-full h-full" />
            )}
            {project.status === "In Progress" && (
              <Badge className="absolute top-4 right-4 bg-yellow-500/90 text-white hover:bg-yellow-500 border-none">In Progress</Badge>
            )}
          </div>
          <div className={`${view === "list" ? "w-2/3" : "w-full"} flex flex-col flex-grow`}>
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle>{project.title}</CardTitle>
                <span className="text-xs text-muted-foreground font-medium">{project.year}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.tagline}</p>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
              <div className="flex flex-wrap gap-1 mt-4">
                {project.techStack.slice(0, 3).map(tech => (
                  <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                ))}
                {project.techStack.length > 3 && (
                  <Badge variant="outline" className="text-xs">+{project.techStack.length - 3}</Badge>
                )}
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
