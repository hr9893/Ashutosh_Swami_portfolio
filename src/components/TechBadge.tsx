import { Badge } from "@/components/ui/badge"

export function TechBadge({ tech }: { tech: string }) {
  return <Badge variant="secondary" className="mr-2 mb-2">{tech}</Badge>
}
