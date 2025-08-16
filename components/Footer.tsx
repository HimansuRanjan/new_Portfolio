// components/Footer.tsx
"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 border-t border-gray-700">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Copyright */}
        <p className="text-gray-400 text-center">
          © 2025 Himansu Ranjan Patra. Powered by late-night
          coding 🖤
        </p>
        <p className="text-sm text-gray-500 text-center">
          &quot;Every commit tells a story&quot;
        </p>
      </motion.div>
    </footer>
  );
}
