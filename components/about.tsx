"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Coffee, Lightbulb, Zap, Target, Palette } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "1+ Years Experience",
      description: "Building scalable web applications",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Design & Development",
      description: "Full-stack developer and designer",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Performance Focused",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Results Driven",
      description: "Delivering measurable business impact",
    },
  ]

  const values = [
    "Clean Architecture",
    "User-Centric Design",
    "Continuous Learning",
    "Innovation",
    "Quality Code",
    "Agile Methodology",
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer and designer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                I'm a dedicated full-stack developer and designer with a passion for creating innovative web solutions
                that bridge the gap between cutting-edge technology and exceptional user experiences. With over 1 year
                in the industry, I've developed a unique blend of technical expertise and design sensibility.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                My journey began with a curiosity about how things work under the hood, which evolved into a deep
                expertise in both frontend and backend technologies, as well as visual design. I believe in writing
                clean, maintainable code and building applications that not only function flawlessly but also delight
                users with beautiful interfaces.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding or designing, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community. I'm always excited about the next challenge
                and the opportunity to create something meaningful.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Coffee className="h-5 w-5" />
                <span>Fueled by coffee</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Lightbulb className="h-5 w-5" />
                <span>Driven by innovation</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                        {highlight.icon}
                      </div>
                      <h3 className="font-semibold mb-2 text-sm">{highlight.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Core Values & Principles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {values.map((value, index) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors">
                        {value}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on projects that push the boundaries of
                what's possible. Whether you're a startup with a bold vision or an established company looking to
                innovate, let's create something extraordinary.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
