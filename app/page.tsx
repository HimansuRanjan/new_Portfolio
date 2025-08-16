// app/page.tsx
"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Work"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="hero" className="bg-white dark:bg-gray-900">
        <Hero />
      </section>

      <section id="about" className="bg-gray-100 dark:bg-gray-800">
        <About />
      </section>

      <section id="work" className="bg-white dark:bg-gray-900">
        <Experience />
      </section>

      <section id="projects" className="bg-gray-100 dark:bg-gray-800">
        <Projects />
      </section>

      <section id="skills" className="bg-white dark:bg-gray-900">
        <Skills />
      </section>

      <section id="contact" className="bg-gray-100 dark:bg-gray-800">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
