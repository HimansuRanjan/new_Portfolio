// components/Hero.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-gray-900"
    >
      {/* Profile Image */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/profile.jpg" // Place your image in /public
          alt="Himansu Ranjan"
          width={300}
          height={300}
          className="rounded-full border-4 border-white-500 shadow-lg"
        />
      </motion.div>

      {/* Intro */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi 👋 I’m <span className="text-blue-500">Himansu</span>
      </motion.h1>

      {/* Role */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl font-medium mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Passionate Full Stack Developer | Next.js, Node.js, React — turning ideas into production-ready solutions 🌐
      </motion.p>

      {/* Experience */}
      <motion.p
        className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        2.3+ years of building scalable systems, debugging relentlessly, and continuously leveling up ⚡
      </motion.p>

      {/* Buttons */}
      <div className="mt-4 flex gap-4">
        <a
          href="#contact"
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          📩 Get In Touch
        </a>
        <a
          href="https://drive.google.com/file/d/1AFh6OMzZeAtgX6bNYsR_cLeedcAL69G-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Hire Me - Resume
        </a>
      </div>
    </section>
  )
}
