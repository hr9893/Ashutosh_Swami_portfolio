import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skillCategories = [
    { title: "Backend", skills: ["Java", "Spring Boot", "Node.js", "Python", "FastAPI"] },
    { title: "AI/ML", skills: ["LangChain", "LlamaIndex", "OpenAI API", "Vector DBs (Pinecone)"] },
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
      company: "Previous Company",
      year: "2019 - 2021",
      description: "Developed and maintained full-stack web applications. Optimized database queries and built RESTful APIs."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h1>
      
      <div className="prose dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed mb-16">
        <p className="mb-4">
          Hello! I'm Ashutosh, a Backend Engineer based in Bangalore. With a strong foundation in building robust, distributed backend systems using Java and Spring Boot, I am currently transitioning my focus towards the fascinating world of AI Engineering.
        </p>
        <p>
          I enjoy bridging the gap between scalable enterprise architecture and intelligent, autonomous AI agents. When I'm not coding, you can find me exploring new AI research papers, building side projects, or contributing to open source.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="space-y-6">
            {skillCategories.map(cat => (
              <div key={cat.title}>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8 border-l-2 border-muted pl-6 ml-2">
            {experience.map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-2 ring-4 ring-background" />
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary font-medium">{exp.company}</span>
                  <span className="text-sm text-muted-foreground">{exp.year}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
