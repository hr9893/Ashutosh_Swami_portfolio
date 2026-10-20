import { useState, useMemo } from "react"
import { Project } from "@/types/project"

export function useProjectFilters(projects: Project[]) {
  const [search, setSearch] = useState("")
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<"year" | "featured">("featured")

  const allTech = useMemo(() => Array.from(new Set(projects.flatMap(p => p.techStack))), [projects])
  const allCategories = useMemo(() => Array.from(new Set(projects.flatMap(p => p.category))), [projects])

  const filteredProjects = useMemo(() => {
    return projects
      .filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                              p.tagline.toLowerCase().includes(search.toLowerCase())
        const matchesTech = selectedTech.length === 0 || selectedTech.every(t => p.techStack.includes(t))
        const matchesCat = selectedCategories.length === 0 || selectedCategories.every(c => p.category.includes(c))
        return matchesSearch && matchesTech && matchesCat
      })
      .sort((a, b) => {
        if (sortBy === "year") return b.year - a.year
        if (sortBy === "featured") return (a.featured === b.featured) ? 0 : a.featured ? -1 : 1
        return 0
      })
  }, [projects, search, selectedTech, selectedCategories, sortBy])

  return {
    search, setSearch,
    selectedTech, setSelectedTech,
    selectedCategories, setSelectedCategories,
    sortBy, setSortBy,
    allTech, allCategories,
    filteredProjects
  }
}
