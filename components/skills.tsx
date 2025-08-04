"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Globe, Server, Database, Palette, Layers, Code2, Smartphone, Cloud, GitBranch } from "lucide-react"

type Skill = {
  name: string
  proficiency: number
  color: string
}

type SkillCategory = {
  name: string
  icon: React.ReactNode
  skills: Skill[]
  description: string
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "React", proficiency: 85, color: "bg-blue-500" },
        { name: "Next.js", proficiency: 80, color: "bg-gray-800" },
        { name: "TypeScript", proficiency: 75, color: "bg-blue-600" },
        { name: "Tailwind CSS", proficiency: 90, color: "bg-cyan-500" },
        { name: "HTML/CSS", proficiency: 95, color: "bg-orange-500" },
        { name: "JavaScript", proficiency: 85, color: "bg-yellow-500" },
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      description: "Building robust server-side applications and APIs",
      skills: [
        { name: "Node.js", proficiency: 80, color: "bg-green-600" },
        { name: "Express", proficiency: 75, color: "bg-gray-700" },
        { name: "NestJS", proficiency: 70, color: "bg-red-600" },
        { name: "GraphQL", proficiency: 65, color: "bg-pink-500" },
        { name: "REST API", proficiency: 85, color: "bg-indigo-500" },
        { name: "Python", proficiency: 70, color: "bg-blue-400" },
      ],
    },
    {
      name: "Database & Cloud",
      icon: <Database className="h-6 w-6" />,
      description: "Managing data and cloud infrastructure",
      skills: [
        { name: "PostgreSQL", proficiency: 75, color: "bg-blue-700" },
        { name: "MongoDB", proficiency: 80, color: "bg-green-500" },
        { name: "Prisma", proficiency: 70, color: "bg-gray-600" },
        { name: "Firebase", proficiency: 75, color: "bg-orange-400" },
        { name: "AWS", proficiency: 60, color: "bg-orange-600" },
        { name: "Vercel", proficiency: 85, color: "bg-black" },
      ],
    },
    {
      name: "Design Tools",
      icon: <Palette className="h-6 w-6" />,
      description: "Creating beautiful and functional designs",
      skills: [
        { name: "Adobe Photoshop", proficiency: 85, color: "bg-blue-600" },
        { name: "Adobe Illustrator", proficiency: 80, color: "bg-orange-500" },
        { name: "Adobe Express", proficiency: 75, color: "bg-purple-600" },
        { name: "Framer", proficiency: 70, color: "bg-black" },
        { name: "Canva", proficiency: 90, color: "bg-cyan-400" },
        { name: "Figma", proficiency: 85, color: "bg-purple-500" },
      ],
    },
  ]

  const additionalSkills = [
    { category: "Mobile", icon: <Smartphone className="h-4 w-4" />, skills: ["React Native", "Flutter"] },
    { category: "DevOps", icon: <Cloud className="h-4 w-4" />, skills: ["Docker", "CI/CD", "GitHub Actions"] },
    { category: "Version Control", icon: <GitBranch className="h-4 w-4" />, skills: ["Git", "GitHub", "GitLab"] },
    { category: "Other", icon: <Code2 className="h-4 w-4" />, skills: ["Jest", "Cypress", "Webpack", "Vite"] },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My comprehensive toolkit spans development, design, and deployment
          </p>
        </motion.div>

        <Tabs defaultValue="main" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="main" className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                Core Skills
              </TabsTrigger>
              <TabsTrigger value="additional" className="flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Additional
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="main">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">{category.icon}</div>
                        <h3 className="font-semibold">{category.name}</h3>
                      </div>
                      <div className="space-y-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill.name} variant="outline" className="mr-2 mb-2">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="additional">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalSkills.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">{category.icon}</div>
                        <h3 className="font-semibold">{category.category}</h3>
                      </div>
                      <div className="space-y-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="mr-2 mb-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, and design
                trends to stay at the forefront of development and design innovation.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
