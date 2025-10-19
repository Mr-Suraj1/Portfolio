"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

type Repository = {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  language: string
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  // Mock data for demonstration - in a real app, this would come from GitHub API
  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setRepos([
        {
          id: 1,
          name: "Invoflow",
          description:
            "A comprehensive invoice and inventory system with authentication, billing, tracking, and reporting.",
          html_url: "https://github.com/Mr-Suraj1/Invoflow",
          homepage: "https://invoflow-xi.vercel.app/",
          topics: ["nextjs", "typescript", "drizzle", "react"],
          language: "Next.js",
        },
        {
          id: 2,
          name: "Kredible",
          description:
            "Automates candidate verification by collecting social-proof stats from GitHub, Stack Overflow, and LinkedIn.",
          html_url: "https://github.com/Mr-Suraj1/Kredible",
          homepage: "#",
          topics: ["nextjs", "typescript", "tailwindcss", "shadcn"],
          language: "Next.js",
        },
        {
          id: 3,
          name: "Health Assistant",
          description:
            "A health assistant application built to track and manage health-related data.",
          html_url: "https://github.com/Mr-Suraj1/SweetHeart_Health_Assistant",
          homepage: "https://sweet-heart-health-assistant.vercel.app/",
          topics: ["nextjs", "typescript", "tailwindcss", "react"],
          language: "TypeScript",
        },
        {
          id: 4,
          name: "Pink-Scan",
          description:
            "A breast cancer prediction model.",
          html_url: "https://github.com/Mr-Suraj1/Pink-Scan",
          homepage: "#",
          topics: ["python", "nextjs", "react", "tailwindcss"],
          language: "Python",
        },
        {
          id: 5,
          name: "OceanOne",
          description:
            "A research platform for managing marine biodiversity data, surveys, and visualizations.",
          html_url: "https://github.com/Mr-Suraj1/Ocean-One",
          homepage: "https://v0-unified-data-platform-landing-pa.vercel.app/",
          topics: ["nextjs", "typescript", "postgresql", "hono"],
          language: "Next.js",
        },
        {
          id: 6,
          name: "Quantum",
          description:
            "An AI-powered personalized learning path generator.",
          html_url: "https://github.com/Mr-Suraj1/Quantum",
          homepage: "https://learning-path-630c4.web.app/",
          topics: ["nextjs", "typescript", "firebase", "openai"],
          language: "TypeScript",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const filteredRepos =
    activeTab === "all" ? repos : repos.filter((repo) => repo.topics.includes(activeTab.toLowerCase()))

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent full-stack development projects
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                  <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                  <TabsTrigger value="typescript">TypeScript</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <span>{repo.name}</span>
                        <Badge variant="outline">{repo.language}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-4">{repo.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics.slice(0, 4).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source
                        </a>
                      </Button>
                      {repo.homepage && (
                        <Button variant="default" size="sm" asChild>
                          <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
