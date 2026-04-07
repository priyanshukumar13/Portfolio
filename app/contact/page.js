"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/app/components/FAQ";
import { FaGithub } from "react-icons/fa";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import AnimatedContent from "../animations/AnimatedContent";
import { MessageSquare, Slack, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import ContactPage2 from "../components/Contact";

const SocialLinksGrid = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      username: "Abhay-Pratap-Singh01",
      icon: (
        <Github className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
      ),
      href: "https://github.com/Abhay-Pratap-Singh01",
    },
    {
      platform: "LinkedIn",
      username: "abhaypratapsingh62",
      icon: (
        <Linkedin className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
      ),
      href: "https://www.linkedin.com/in/abhaypratapsingh62/",
    },
    {
      platform: "Email",
      username: "priyanshu84@gmail.com",
      icon: (
        <Mail className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
      ),
      href: "mailto:priyanshu84@gmail.com",
    },
    {
      platform: "LeetCode",
      username: "abhay.dev",
      icon: (
        <SiLeetcode className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
      ), // fallback icon
      href: "https://leetcode.com/",
    },
  ];

  return (
    <div className="bg-[#0a101f] mb-10 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className={`group relative overflow-hidden border border-gray-800 rounded-lg p-8 flex flex-col items-center justify-center 
              transition-all duration-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20
              ${link.platform === "Skype" ? "border-blue-900/50" : ""}
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
          >
            {/* Background glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-700/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

            {/* Icon container */}
            <motion.div
              className="bg-gray-900 rounded-full p-4 mb-6 relative z-10"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              {link.icon}
              <div className="absolute inset-0 bg-purple-500/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </motion.div>

            {/* Username */}
            <p className="text-white mb-2 font-medium relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300">
              {link.username}
            </p>

            {/* Platform name */}
            <p className="text-purple-400 font-medium relative z-10 group-hover:text-white transition-colors duration-300">
              {link.platform}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-10 bg-[#0a101f] text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <SocialLinksGrid />
        <ContactPage2 />
      </div>
    </div>
  );
}
