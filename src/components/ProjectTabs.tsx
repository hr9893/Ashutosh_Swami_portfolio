"use client"
import { useState } from "react"
import { Project } from "@/types/project"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { X } from "lucide-react"

export function ProjectTabs({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "challenges" | "gallery">("overview")
  const [selectedImage, setSelectedImage] = useState<string | null>(null) // State for lightbox

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Architecture" },
    { id: "challenges", label: "Challenges" },
    { id: "gallery", label: "Gallery" },
  ] as const

  return (
    <div className="w-full mt-10">
      <div className="flex space-x-2 border-b mb-6 overflow-x-auto pb-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg relative ${activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div layoutId="active-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {project.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Architecture Diagrams</h3>

                    {project.architecture.images && project.architecture.images.length > 0 ? (
                      <div className="flex flex-col gap-8">
                        {project.architecture.images.map((img, index) => (
                          <div 
                            key={index} 
                            onClick={() => setSelectedImage(img)}
                            className="rounded-lg overflow-hidden border bg-muted p-2 cursor-zoom-in hover:border-primary/50 transition-colors"
                          >
                            <img 
                              src={img} 
                              alt={`${project.title} Architecture ${index + 1}`} 
                              className="w-full h-auto object-contain rounded-md" 
                            />
                          </div>
                        ))}
                      </div>
                    ) : project.architecture.diagram ? (
                      <div className="p-4 bg-muted rounded-md font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                        {project.architecture.diagram}
                      </div>
                    ) : null}

                  </CardContent>
                </Card>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Notes</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.architecture.notes}</p>
                </div>
              </div>
            )}

            {activeTab === "challenges" && (
              <div className="space-y-6">
                {project.challenges.map((c, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-red-500/80 mb-2">Challenge: {c.challenge}</h4>
                      <p className="text-muted-foreground"><strong>Resolution:</strong> {c.resolution}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "gallery" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedImage(img)}
                    className="rounded-xl overflow-hidden border bg-muted aspect-video relative cursor-zoom-in group"
                  >
                    <img 
                      src={img} 
                      alt={`Gallery ${i}`} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal for viewing full size images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.img
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
              />
              <button
                className="absolute top-0 right-0 sm:top-4 sm:right-4 p-2 bg-background/50 hover:bg-background border rounded-full transition-colors cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}