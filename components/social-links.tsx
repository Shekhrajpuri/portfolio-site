"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shekhraj-puri-a66768363",
      icon: <Linkedin className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aryan_puree?igsh=MXRsMTlmNnlscmd4eQ==",
      icon: <Instagram className="h-5 w-5" />,
      color: "bg-pink-100 text-pink-600 hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-white",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/shekhraj.puri",
      icon: <Facebook className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white",
    },
  ]

  return (
    <div className="flex items-center gap-3 mt-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${link.color}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  )
}
