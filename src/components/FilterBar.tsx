"use client"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LayoutGrid, List } from "lucide-react"

interface FilterBarProps {
  search: string
  setSearch: (v: string) => void
  allTech: string[]
  selectedTech: string[]
  setSelectedTech: (v: string[]) => void
  sortBy: "year" | "featured"
  setSortBy: (v: "year" | "featured") => void
  view: "grid" | "list"
  setView: (v: "grid" | "list") => void
  resultCount: number
}

export function FilterBar({ search, setSearch, allTech, selectedTech, setSelectedTech, sortBy, setSortBy, view, setView, resultCount }: FilterBarProps) {
  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter(t => t !== tech))
    } else {
      setSelectedTech([...selectedTech, tech])
    }
  }

  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <Input 
          placeholder="Search projects..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md bg-card"
        />
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setSortBy(sortBy === "year" ? "featured" : "year")}>
            Sort: {sortBy === "year" ? "Year" : "Featured"}
          </Button>
          <div className="border rounded-md flex overflow-hidden">
            <Button variant={view === "grid" ? "default" : "ghost"} size="sm" className="rounded-none px-3" onClick={() => setView("grid")}>
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button variant={view === "list" ? "default" : "ghost"} size="sm" className="rounded-none px-3" onClick={() => setView("list")}>
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground mr-2">Filter by Tech:</span>
          {allTech.map(tech => (
            <Badge 
              key={tech} 
              variant={selectedTech.includes(tech) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleTech(tech)}
            >
              {tech}
            </Badge>
          ))}
          {selectedTech.length > 0 && (
             <Button variant="ghost" size="sm" className="text-xs h-6 px-2" onClick={() => setSelectedTech([])}>Clear All</Button>
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground font-medium">{resultCount} projects found</p>
    </div>
  )
}
