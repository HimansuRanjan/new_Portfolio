// components/Projects.tsx
"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "TawKio - Social Media App",
    description:
      "TawKio is a social media app for connecting and sharing. Users can post, like, comment, and chat in real-time, including video calls, all within a smooth, interactive interface.",
    tech: ["React", "Node.js", "JavaScript", "TypeScript", "PostgreSQL", "Prisma", "Redux", "Tailwind CSS", "Socket.io", "WebRTC", "Redis"],
    github: "https://github.com/HimansuRanjan/TawKio",
    demo: "#",
  },
  {
    title: "Blogging App",
    description:
      "A personal blogging platform built with React, Node.js, Express, PostgreSQL, and Prisma. Supports posts with text, images, code blocks, likes, comments, and sharing.",
    tech: ["React", "Node.js","JavaScript","TypeScript", "PostgreSQL", "Prisma","Redux", "Tailwind CSS"],
    github: "https://github.com/HimansuRanjan/dailyTalk",
    demo: "#",
  },
  {
    title: "Organizational Management App",
    description:
      "A MERN stack app managing hierarchical structures, salaries, expenditures, donations, and employee workflows with secure JWT authentication.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux"],
    github: "https://github.com/HimansuRanjan/Organisation_Management",
    demo: "#",
  },
  {
    title: "Personal Portfolio with Admin",
    description:
      "A dynamic portfolio platform featuring an Admin Dashboard with full access control. Supports adding projects, skills, and applications through secure login. Designed with a sleek UI, responsive design, and smooth workflows to showcase work with style and flexibility.",
    tech: ["Node.js", "Express.js", "React.js", "JavaScript", "MongoDB", "Tailwind CSS", "Redux"],
    github: "https://github.com/HimansuRanjan/MyPortfolio_With_Admin",
    demo: "https://himansu-ranjan-profile.netlify.app/",
  }
  
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-500">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Github className="w-4 h-4" /> Code
              </a>
              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
