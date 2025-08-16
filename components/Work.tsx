// components/Work.tsx
"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
    {
      role: "Software Engineer",
      company: "Coforge",
      duration: "Jun 2023 – Present",
      description: [
        "🛠️ Engineered scalable microservices with Node.js & Express.js, improving modularity and uptime.",
        "🔐 Built secure RESTful APIs with JWT, bcrypt.js, and encryption — ensuring 99% reliability in banking ops.",
        "🤝 Delivered frontend features using React, Redux & Axios, raising user satisfaction by 20%.",
        "⚡ Optimized MySQL & PostgreSQL queries and schemas, cutting response times by 30%.",
        "🛡️ Enforced strong security practices — validation, encryption, and role-based access for data safety.",
        "🐞 Resolved critical production issues under tight deadlines, improving performance by 25%.",
      ],
    },
  ]
  
  

export default function Work() {
  return (
    <section
      id="work"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      <div className="max-w-4xl w-full space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">
                {exp.role} @ {exp.company}
              </h3>
            </div>
            <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
