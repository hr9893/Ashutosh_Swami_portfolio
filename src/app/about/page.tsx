import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skillCategories = [
    { title: "Backend", skills: ["Java", "Spring Boot", "Python", "FastAPI"] },
    { title: "AI/ML", skills: ["LangChain", "LangGraph", "LlamaIndex", "RAG", "MCP","OpenAI API", "Vector DBs (Qdrant, Chroma, Pinecone)"] },
    { title: "Data & Infrastructure", skills: ["Kafka", "Redis", "MongoDB", "PostgreSQL", "Docker", "AWS"] },
    { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] }
  ]

  const experience = [
    {
      role: "Senior Software Engineer - CTSO",
      company: "Manhattan Associates",
      year: "2021 - Present",
      description: "Leading backend microservices development using Java, Spring Boot, and Kafka. Improving system performance and scalability."
    },
    {
      role: "Software Engineer",
      company: "Manhattan Associates",
      year: "2022",
      description: "Developed and maintained full-stack web applications. Optimized database queries and built RESTful APIs."
    }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          About Me.
        </h1>

        <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed mb-16 backdrop-blur-sm bg-background/30 p-6 rounded-2xl border border-border/50 shadow-xl">
          <p className="mb-4">
            Hello! I'm Ashutosh, a Backend Engineer based in Bangalore. With a strong foundation in building robust, distributed backend systems using Java and Spring Boot, I am currently transitioning my focus towards the fascinating world of AI Engineering.
          </p>
          <p>
            I enjoy bridging the gap between scalable enterprise architecture and intelligent, autonomous AI agents. When I'm not coding, you can find me exploring new AI research papers, building side projects, or contributing to open source.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-background/40 backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="space-y-6">
              {skillCategories.map(cat => (
                <div key={cat.title}>
                  <h3 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-3">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-purple-500/20 transition-colors border border-border/50">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background/40 backdrop-blur-md p-6 rounded-2xl border border-border/50 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8 border-l-2 border-purple-500/50 pl-6 ml-2 relative">
              {experience.map((exp, i) => (
                <div key={i} className="relative group">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[31px] top-2 ring-4 ring-background group-hover:scale-150 transition-transform" />
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-400 font-medium">{exp.company}</span>
                    <span className="text-sm text-muted-foreground">{exp.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
