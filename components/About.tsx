// components/About.tsx
"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me !
      </motion.h2>

      <motion.div
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Paragraph 1 */}
        <p>
          I'm <span className="font-semibold text-blue-500">Himansu Ranjan Patra</span>,
          a passionate <strong>Full Stack Developer</strong> with <strong>3+ years of experience</strong>{" "}
          building scalable, production-grade web applications. I'm currently a{" "}
          <strong>Software Engineer at Accenture</strong>, driving feature development in the{" "}
          <strong>healthcare domain</strong> using <strong>React.js</strong>, <strong>TypeScript</strong>,{" "}
          <strong>Redux</strong>, <strong>Node.js</strong>, and <strong>Express.js</strong> within a{" "}
          <strong>microservices architecture</strong>. I lean on AI tools like <strong>GitHub Copilot</strong> and{" "}
          <strong>Claude</strong> to ship faster without compromising quality 🚀.
        </p>

        {/* Paragraph 2 */}
        <p>
          I hold a <strong>Bachelor’s in Computer Science</strong> from{" "}
          <strong>Gandhi Institute for Technological Advancement (GITA), Bhubaneswar</strong>.  
          My academic journey gave me a strong foundation in <strong>data structures, algorithms,  
          networking, operating systems,</strong> and <strong>databases</strong>, blending technical depth  
          with user-focused problem solving.
        </p>

        {/* Paragraph 3 */}
        <p>
          Outside of work, I enjoy <strong>cooking, exploring new places, and recharging with good sleep</strong> 💤.  
          Whether it’s debugging code or planning the next trip, I approach both with curiosity and energy ✨.
        </p>
      </motion.div>
    </section>
  )
}
