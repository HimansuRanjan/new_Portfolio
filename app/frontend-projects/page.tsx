"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const frontendProjects = [
  {
    title: "VectorShift Node Tester",
    description:
      "A web app to visually create and connect nodes using React Flow. Detects input variables and validates if the graph is a DAG, useful for testing nodes in LLM workflows.",
    tech: ["React", "TypeScript", "Tailwind CSS", "React Flow"],
    github: "https://github.com/HimansuRanjan/vectorshift_assessment_frontend",
    demo: "https://vectorshift-assessment-frontend.vercel.app/",
  },
  {
    title: "Chatbot Flow",
    description:
      "A web app to visually create and connect nodes using React Flow. It allows creating, updating, and saving message flows. Built to learn React Flow.",
    tech: ["React", "TypeScript", "Tailwind CSS", "React Flow"],
    github: "https://github.com/HimansuRanjan/Chatbot-flow",
    demo: "https://himansuchatbot-flow.vercel.app/",
  },
  {
    title: "Todo App",
    description:
      "A full-stack Todo application with login and signup functionality, allowing users to manage tasks securely and efficiently.",
    tech: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/HimansuRanjan/todo_Auth_frontend",
    demo: "https://todo-auth-frontend.vercel.app",
  }
];

export default function FrontendProjects() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back to Home button */}
      <div className="w-full max-w-5xl mb-6">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Frontend Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {frontendProjects.map((project, index) => (
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
    </motion.section>
  );
}
