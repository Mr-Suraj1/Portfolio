"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Experience = {
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  responsibilities: string[]
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: "Mindpex",
      position: "Frontend Developer",
      period: "Oct 2025 - Present",
      description: "Developed and maintained user-facing features for client projects and internal tech products.",
      technologies: ["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Supabase"],
      responsibilities: [
        "Built responsive and intuitive user interfaces for web applications, focusing on HR tech and client solutions",
        "Translated complex requirements and UI/UX designs into high-quality, scalable code",
        "Managed application state using tools like Context API and React Query",
        "Collaborated with backend and design teams to integrate APIs and deliver cohesive products",
        "Wrote and maintained tests to ensure code quality and application stability",
      ],
    },
    {
      company: "SourcifyIN",
      position: "Graphic Designer",
      period: "Aug 2024 - Present",
      description: "Created visually compelling designs to support community engagement, branding, and marketing efforts.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva", "Adobe InDesign"],
      responsibilities: [
        "Designed marketing materials for social media, events, and community announcements",
        "Developed branding assets, including logos, icons, and style guides",
        "Collaborated with community leaders and members to translate ideas into visual concepts",
        "Created banners, posters, and other promotional graphics",
        "Maintained visual consistency and brand identity across all community platforms",
      ],
    },
    {
      company: "Self-Employed",
      position: "Freelance Developer, Designer & Editor",
      period: "May 2024 - Present",
      description: "Provided comprehensive web development, graphic design, and video editing services to a diverse range of clients.",
      technologies: ["React", "JavaScript", "HTML/CSS", "Node.js", "Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "After Effects"],
      responsibilities: [
        "Developed and maintained custom websites and web applications",
        "Designed logos, branding assets, social media graphics, and UI/UX layouts",
        "Edited, color-graded, and produced high-quality video content for promotional and social media use",
        "Collaborated directly with clients to define project scope, requirements, and deliverables",
        "Managed multiple projects simultaneously, ensuring high-quality standards and timely delivery",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building real-world applications
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <Badge variant="outline" className="md:ml-auto w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="text-lg font-medium text-primary">{exp.company}</div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
