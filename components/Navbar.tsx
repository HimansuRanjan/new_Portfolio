// components/Navbar.tsx
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import ThemeToggle from "./ThemeToogle"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-blue-500">
          Himansu Ranjan Patra
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme toggle (always visible, center in mobile) */}
        <ThemeToggle/>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  )
}
