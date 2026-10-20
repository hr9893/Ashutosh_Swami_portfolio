"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Project } from "@/types/project"
import { useProjectFilters } from "@/hooks/useProjectFilters"
import { FilterBar } from "./FilterBar"
import { ProjectCard } from "./ProjectCard"

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const { search, setSearch, selectedTech, setSelectedTech, sortBy, setSortBy, allTech, filteredProjects } = useProjectFilters(projects)
  const [view, setView] = useState<"grid" | "list">("grid")

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-view")
    if (saved === "list" || saved === "grid") setView(saved)
  }, [])

  const handleSetView = (v: "grid" | "list") => {
    setView(v)
    localStorage.setItem("portfolio-view", v)
  }

  return (
    <div className="w-full" id="projects">
      <FilterBar 
        search={search} setSearch={setSearch} 
        allTech={allTech} selectedTech={selectedTech} setSelectedTech={setSelectedTech}
        sortBy={sortBy} setSortBy={setSortBy}
        view={view} setView={handleSetView}
        resultCount={filteredProjects.length}
      />
      
      <motion.div layout className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} view={view} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No projects found matching your criteria.
        </div>
      )}
    </div>
  )
}
