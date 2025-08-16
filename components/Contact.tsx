// components/Contact.tsx
"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      link: "mailto:patrahimansuranjan@gmail.com",
      display: "patrahimansuranjan@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-8 h-8 text-blue-600" />,
      link: "https://www.linkedin.com/in/himansuranjan/",
      display: "linkedin.com/in/himansuranjan",
    },
    {
      name: "GitHub",
      icon: <Github className="w-8 h-8 text-blue-600" />,
      link: "https://github.com/HimansuRanjan",
      display: "github.com/HimansuRanjan",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-8 h-8 text-blue-600" />,
      link: "https://x.com/HimansuRanjan17",
      display: "@HimansuRanjan17",
    },
  ]

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect!
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to discuss full-stack development 💻, new AI technologies 🤖, cloud & DevOps ☁️🛠️, or just have a good conversation about tech ⚡ and life 🌱? I'm always up for connecting and sharing ideas! ✨

        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact) => (
            <Card
              key={contact.name}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-sm border-t-4 border-t-blue-500"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {contact.icon}
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-300">{contact.name}</h3>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm break-all block"
                >
                  {contact.display}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-xl border border-blue-200 dark:border-gray-600 backdrop-blur-sm">
          <p className="text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 inline mr-1" />
            Based in Noida, Uttar Pradesh • Open to remote opportunities
          </p>
        </div>
      </div>
    </section>
  )
}
