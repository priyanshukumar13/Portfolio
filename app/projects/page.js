"use client";
import { useState, useEffect } from "react";
import { Eye, UserPlus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedContent from "@/app/animations/AnimatedContent";
import {
  Globe,
  Cpu,
  Code,
  Calendar,
  Tag,
  ArrowUpRight,
  Layers,
  Github,
  ExternalLink,
} from "lucide-react";
import SpotlightCard from "../animations/SpotlightCard";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
// import AnimatedContent from "../animations/AnimatedContent";

const projects = [
  // {
  //   date: "26 March 2025",
  //   views: 540,
  //   title: "Krushi Suvidha - One Stop Solution to Farmers' problems",
  //   description:
  //     "A web-based one-stop regional, multilingual platform for farmers to fulfill their agricultural needs.",
  //   longDescription:
  //     "Krushi Suvidha is a comprehensive web-based platform designed to address the multifaceted challenges faced by farmers. This solution provides a regional, multilingual interface that enables farmers to access a wide range of agricultural services and information in their native language. The platform integrates real-time weather forecasts, crop disease identification through image recognition, marketplace functionality for buying/selling produce and equipment, and expert consultation services. Built with a microservice architecture, the system ensures scalability and reliability even in areas with limited connectivity.",
  //   tags: [
  //     "React + Vite",
  //     "Node.js",
  //     "Micro-Service Architecture",
  //     "Redis",
  //     "Socket.io",
  //     "REST API",
  //     "Docker",
  //     "Kubernetes",
  //     "CI/CD",
  //     "Amazon S3",
  //     "MongoDB",
  //     "React Spring",
  //     "Nginx",
  //   ],
  //   domain: ["Web"],
  //   link: "#",
  //   github: "https://github.com/username/krushi-suvidha",
  //   image: KS,
  //   isHosted :false,
  // },
  {
    date: "March 2026",
    views: 2940,
    title: "BillMate - Bill Reminder System",
    description:
      "A full-stack bill reminder and expense tracker with secure authentication, charts, and real-time due alerts.",
    longDescription:
      "BillMate helps users create accounts, manage bills, analyze spending, and receive instant alerts for upcoming or overdue payments. It uses Flask, SQLite, JWT authentication, Socket.IO, APScheduler, and a clean frontend dashboard for practical daily use.",
    tags: ["HTML5", "CSS3", "JavaScript", "Flask", "SQLite", "JWT", "SocketIO", "Chart.js"],
    domain: ["Web"],
    link: "https://billmatex.netlify.app/",
    github: "https://github.com/Abhay-Pratap-Singh01",
    image: "/bill.png",
    isHosted :true,
  },
  {
    date: "November 2025",
    views: 2710,
    title: "LOSTit - Lost & Found Management System",
    description:
      "A smart serverless lost-and-found platform using AWS services and Gemini AI for reporting and assistance.",
    longDescription:
      "LOSTit is designed for universities and public spaces. It supports AI-powered item reporting, chatbot guidance, secure QR-based verification, and privacy-first claim workflows. The architecture uses AWS Lambda, DynamoDB, S3, and Cognito with event-driven patterns for scale.",
    tags: [
      "React",
      "AWS Lambda",
      "DynamoDB",
      "S3",
      "AWS Cognito",
      "Gemini AI",
      "Python",
    ],
    domain: ["Web"],
    link: "#",
    github: "https://github.com/Abhay-Pratap-Singh01/LOSTit",
    image: "/lost.png",
    isHosted :false,
  },
  {
    date: "August 2025",
    views: 2480,
    title: "AI-Powered Performance Analyzer for OS Processes",
    description:
      "An OS-level analyzer that tracks process behavior, detects anomalies, and suggests performance optimization.",
    longDescription:
      "This analyzer continuously monitors CPU and memory usage patterns, highlights bottlenecks, raises alerts for abnormal behavior, and uses AI logic to recommend optimization actions for stability and speed.",
    tags: [
      "Python",
      "OS Process Monitoring",
      "Anomaly Detection",
      "Performance Prediction",
      "Optimization Suggestions",
    ],
    domain: ["Cyber Security"],
    link: "#",
    github: "https://github.com/Abhay-Pratap-Singh01/AI-Powered-Performance-Analyzer",
    image: "/ana.png",
    isHosted :false,
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);
  const filters = ["All", "Web", "Cyber Security"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.domain.some((tag) =>
            tag.toLowerCase().includes(activeFilter.toLowerCase())
          )
        );

  useEffect(() => {
    if (expandedProject) {
      document.body.style.overflow = "hidden"; // Disable scroll when modal is open
    } else {
      document.body.style.overflow = ""; // Restore scroll when modal closes
    }

    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [expandedProject]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#0a101f] text-gray-300 p-6 md:p-12 relative">
      <div className="max-w-7xl mx-auto pt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4"
          >
            My <span className="text-purple-400">Projects</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Explore my portfolio of innovative solutions across various domains
            and technologies
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter, index) => {
              let FilterIcon = Layers;
              if (filter === "Web") FilterIcon = Globe;
              else if (filter === "IoT") FilterIcon = Cpu;
              else if (filter === "Full-Stack") FilterIcon = Layers;
              else if (filter === "Cyber Security") FilterIcon = Code;

              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter
                      ? "bg-purple-400 text-[#0a101f]"
                      : "bg-[#131c35] text-gray-300 hover:bg-purple-400/30"
                  }`}
                >
                  {filter !== "All" && <FilterIcon className="w-4 h-4" />}
                  {filter}
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              key={index}
              threshold={0.2}
            >
              {/* Pass the project data properly */}

              <ProjectCard
                project={project}
                onClick={() => setExpandedProject(project)}
              />
            </AnimatedContent>
          ))}
        </div>
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {expandedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setExpandedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a101f] border border-purple-400/30 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setExpandedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-purple-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="h-64 sm:h-80 overflow-hidden">
                  <Image
                    src={expandedProject.image || "/placeholder.svg"}
                    alt={expandedProject.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4 text-purple-400/70" />
                      <span>{expandedProject.date}</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-purple-400/10 px-3 py-1 text-sm text-purple-300">
                      <Eye className="h-4 w-4" />
                      <span>{expandedProject.views} views</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">
                    {expandedProject.title}
                  </h2>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {expandedProject.longDescription}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {expandedProject.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1.5 text-sm font-medium text-purple-300"
                        >
                          <Tag className="h-3.5 w-3.5" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={expandedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-purple-500 hover:bg-purple-600 px-6 py-1.5 font-medium text-white transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      View Live Demo
                    </a>
                    <a
                      href={expandedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg border-2 border-purple-400/50 bg-transparent hover:bg-purple-400/10 px-6 py-1.5 font-medium text-purple-300 transition-colors"
                    >
                      <FaGithub className="h-5 w-5" />
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  const { date, title, description, views, tags ,isHosted ,github } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SpotlightCard
      className="group h-full w-full overflow-hidden rounded-xl border border-purple-400/20 bg-[#0a101f]/80 backdrop-blur-sm transition-all duration-500 cursor-pointer"
      spotlightColor="rgba(180, 100, 255, 0.4)"
    >
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        className="flex h-full flex-col p-6"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onClick}
      >
        {/* Top section with date and views */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Calendar className="h-3.5 w-3.5 text-purple-400/70" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-purple-400/10 px-3 py-1 text-xs text-purple-300">
            <Eye className="h-3.5 w-3.5" />
            <span>{views} views</span>
          </div>
        </div>

        {/* Title with animated underline */}
        <div className="mb-3 relative">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.5 }}
            className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-400 to-purple-600"
          />
        </div>

        {/* Description with gradient text */}
        <p className="mb-6 text-sm leading-relaxed text-gray-300">
          {description}
        </p>

        {/* Tags with hover effect */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, tagIndex) => (
            <motion.div
              key={tagIndex}
              whileHover={{ y: -2, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
              className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1.5 text-xs font-medium text-purple-300 transition-colors"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </motion.div>
          ))}
          {tags.length > 3 && (
            <motion.div
              whileHover={{ y: -2, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
              className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1.5 text-xs font-medium text-purple-300 transition-colors"
            >
              +{tags.length - 3} more
            </motion.div>
          )}
        </div>

        {/* Action buttons with animated hover */}
        <div className="mt-auto flex gap-3">
          <Link href={github} className="w-full" target="_blank" rel="noopener noreferrer">

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group/button flex w-full items-center justify-center gap-2 rounded-lg border-2 border-purple-400/50 bg-purple-400/5 px-3 py-1 font-medium text-purple-300 transition-all duration-300 hover:bg-purple-400 hover:text-white"
          >
            <UserPlus className="h-4 w-4 transition-transform duration-300 group-hover/button:rotate-12" />
            <span>Contribute</span>
          </motion.button>
          </Link>
         {isHosted && <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group/button flex w-full items-center justify-center gap-2 rounded-lg border-2 border-purple-400/50 bg-purple-400/5 px-3 py-1 font-medium text-purple-300 transition-all duration-300 hover:bg-purple-400 hover:text-white"
          >
            <Eye className="h-4 w-4 transition-transform duration-300 group-hover/button:scale-110" />
            <span>Preview</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:opacity-100" />
          </motion.button>}
        </div>
      </motion.div>
    </SpotlightCard>
  );
}
