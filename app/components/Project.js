"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Code, Cpu, Database, Globe, Layers } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "../utils/ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Button } from "@/components/ui/button";
import AnimatedContent from "../animations/AnimatedContent";

const projects = [
  {
    index: 1,
    title: "BillMate - Bill Reminder System",
    description:
      "A full-stack web app to track bills, manage expenses, and receive real-time alerts for upcoming and overdue due dates.",
    tags: ["HTML5", "CSS3", "JavaScript", "Flask", "SQLite", "JWT", "SocketIO", "Chart.js"],
    link: "https://billmatex.netlify.app/",
    github: "https://github.com/Abhay-Pratap-Singh01",
    image: "/bill.png",
    completion: 100,
    lastUpdated: "2026-03-20",
    views: 3120,
    type: "web",
  },
  {
    index: 2,
    title: "LOSTit - Lost & Found Management System",
    description:
      "A smart serverless platform for universities and public spaces with AI item recognition, chatbot support, and secure claim verification.",
    tags: [
      "React",
      "AWS Lambda",
      "DynamoDB",
      "Amazon S3",
      "AWS Cognito",
      "Gemini AI",
      "Python",
    ],
    link: "#",
    github: "https://github.com/Abhay-Pratap-Singh01/LOSTit",
    image: "/lost.png",
    completion: 100,
    lastUpdated: "2026-03-25",
    views: 2890,
    type: "backend",
  },
  {
    index: 3,
    title: "AI Powered Performance Analyzer for OS Processes",
    description:
      "An intelligent monitoring tool that tracks system processes, analyzes CPU and memory behavior, detects anomalies, and provides optimization suggestions.",
    tags: [
      "Python",
      "Machine Learning",
      "System Monitoring",
      "Anomaly Detection",
      "Node.js",
      "Performance Analysis",
    ],
    link: "#",
    github: "https://github.com/Abhay-Pratap-Singh01/AI-Powered-Performance-Analyzer",
    image: "/ana.png",
    completion: 100,
    lastUpdated: "2026-03-18",
    views: 2410,
    type: "backend",
  },
];

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const filters = ["All", "Web", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(activeFilter.toLowerCase())
          )
        );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-15 bg-[#0a101f] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-400/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          className="flex gap-2 justify-center mb-8"
          scale={1.1}
          threshold={0.2}
        >
          <div className="">
            <h2
              variants={itemVariants}
              className="text-4xl md:text-4xl font-bold text-white mb-4 text-center"
            >
              My <span className="text-purple-400">Projects</span>
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
              Explore my portfolio of innovative solutions across various
              domains and technologies
            </p>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          className="flex gap-2 justify-center mb-8"
          scale={1.1}
          threshold={0.2}
        >
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {filters.map((filter, index) => {
              // Determine icon based on filter
              let FilterIcon = Layers;
              if (filter === "Web") FilterIcon = Globe;
              else if (filter === "Backend") FilterIcon = Database;

              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm cursor-pointer font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter
                      ? "bg-purple-400 text-[#0a101f]"
                      : "bg-[#131c35] text-gray-300 hover:bg-purple-400/20"
                  }`}
                >
                  {filter !== "All" && <FilterIcon className="w-4 h-4" />}
                  {filter}
                </motion.button>
              );
            })}
          </div>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedContent
              distance={150}
              direction={"vertical"}
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              key={index}
              threshold={0.2}
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </AnimatedContent>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.p
            className="text-center text-gray-300 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            No projects found with the selected filter.
          </motion.p>
        )}
      </div>

      <div className=" text-center">
        <Link href="/projects">
        <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
            <Button className="mt-10 bg-gradient-to-r items-center transition-transform duration-300 hover:scale-105 from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 cursor-pointer text-white px-10 py-3 rounded-lg">
              <Layers /> See All Projects
            </Button>
          </AnimatedContent>
        </Link>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject || projects[0]}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </section>
  );
}
