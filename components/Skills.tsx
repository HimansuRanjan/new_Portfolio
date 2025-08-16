// components/Skills.tsx
"use client"

import { motion } from "framer-motion"
import { Code, Layers, Database, Cloud, Wrench } from "lucide-react" // icons from lucide-react
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const skillsData = [
  {
    category: "Languages",
    icon: <Code className="w-5 h-5 mr-2 text-blue-600" />,
    color: "purple",
    skills : [
      { 
        name: "Java", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
      },
      { 
        name: "JavaScript", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
      },
      { 
        name: "TypeScript", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
      },
      { 
        name: "Python", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
      },
    ]
    
  },
  {
    category: "Frameworks & Libraries",
    icon: <Layers className="w-5 h-5 mr-2 text-green-600" />,
    color: "green",
    skills: [
      { 
        name: "Node.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
      },
      { 
        name: "React", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
      },
      { 
        name: "Next.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
      },
      { 
        name: "Redux", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" 
      },
      { 
        name: "TailwindCSS", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
      },
    ]
    
  },
  {
    category: "Databases & ORM",
    icon: <Database className="w-5 h-5 mr-2 text-purple-600" />,
    color: "purple",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    ],
  },
  {
    category: "Tools & Cloud",
    icon: <Cloud className="w-5 h-5 mr-2 text-orange-600" />,
    color: "orange",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ci/ci-original.svg" },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className={`min-h-[320px] dark:bg-gray-800/80 dark:border-gray-600 backdrop-blur-sm shadow-lg 
                           hover:shadow-xl transition-all duration-300 hover:scale-105 
                           border-l-4 border-l-${section.color}-500`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-gray-900 dark:text-white">
                    {section.icon} {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap">
                    {section.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center bg-gradient-to-r from-${section.color}-50 
                                   to-${section.color}-100 dark:from-${section.color}-900/30 
                                   dark:to-${section.color}-800/30 text-${section.color}-700 
                                   dark:text-${section.color}-300 px-3 py-2 rounded-full 
                                   text-sm font-medium mr-2 mb-2 border border-${section.color}-200 
                                   dark:border-${section.color}-700 hover:shadow-md 
                                   hover:scale-105 transition-all duration-200 cursor-default`}
                      >
                        <img src={skill.icon} alt={skill.name} className="w-4 h-4 mr-2" />
                        {skill.name}
                      </div>
                    ))}
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
