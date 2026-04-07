"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ExternalLink,
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Star,
  Eye,
  Clock,
} from "lucide-react";
import { BsFire } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub as Github } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SpotlightCard from "../animations/SpotlightCard";
import IOT from "@/public/IOT.png";
import Link from "next/link";
import { toast } from "sonner";

export function ProjectCard({ project, index, onClick }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedProjects = JSON.parse(
      localStorage.getItem("savedProjects") || "{}"
    );
    setIsSaved(savedProjects[project.id] || false);
  }, [project.id]);

 const handleGithub = () => {
   toast("Project Source Codes Are Not Out yet ....")
 }

  const toggleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedSaved = !isSaved;
    setIsSaved(updatedSaved);
    const savedProjects = JSON.parse(
      localStorage.getItem("savedProjects") || "{}"
    );
    savedProjects[project.id] = updatedSaved;
    localStorage.setItem("savedProjects", JSON.stringify(savedProjects));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const getDaysSinceUpdate = (dateString) => {
    const updateDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - updateDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const tagMap = {
    web: <Globe className="text-purple-400" />,
    react: <Globe className="text-purple-400" />,
    next: <Globe className="text-purple-400" />,
    iot: <Cpu className="text-purple-400" />,
    arduino: <Cpu className="text-purple-400" />,
    sensor: <Cpu className="text-purple-400" />,
    database: <Database className="text-purple-400" />,
    sql: <Database className="text-purple-400" />,
    mongo: <Database className="text-purple-400" />,
    api: <Code className="text-purple-400" />,
    node: <Code className="text-purple-400" />,
    service: <Code className="text-purple-400" />,
  };

  const getProjectIcon = () => {
    const tags = project.tags.map((tag) => tag.toLowerCase());
    return tags.find((tag) => tagMap[tag]) ? (
      tagMap[tags.find((tag) => tagMap[tag])]
    ) : (
      <Layers className="text-purple-400" />
    );
  };

  return (
    <SpotlightCard
      className="border border-purple-400/30 bg-gradient-to-br from-[#0a101f] to-[#131c35] shadow-lg hover:shadow-purple-400/40 transition-transform duration-700 hover:scale-105"
      spotlightColor="rgba(138, 43, 226, 0.3)"
      onClick={onClick}
    >
      <motion.div
        className="relative h-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* <div className="absolute z-10 right-3 top-2"><BsFire/></div> */}
        <div className="p-6 relative z-10">
          {project.featured && (
            <Badge className="absolute -top-2 right-2 bg-amber-500 text-black px-2 py-1 flex items-center gap-1 shadow-md">
              <Star className="h-3 w-3 fill-black" /> Featured
            </Badge>
          )}
          <div>
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 object-cover w-full h-32"
              width={200}
              height={200}
            />
          </div>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-purple-400/10 border border-purple-400/30">
                {getProjectIcon()}
              </div>
              <h3 className="text-xl font-bold text-white line-clamp-2">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="text-gray-300 mb-4 text-sm line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 text-xs font-medium rounded-full bg-purple-400/10 text-purple-300 border border-purple-400/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400">
            {project.lastUpdated && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>
                        {getDaysSinceUpdate(project.lastUpdated)} days ago
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Last updated: {formatDate(project.lastUpdated)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {project.views && (
              <div className="flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" />
                <span>{project.views.toLocaleString()}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-4">
            {project.github && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger  asChild>
                    <a
                      className="p-1.5 rounded-full bg-purple-400/10 text-purple-400 hover:bg-purple-400/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                      onClick={(e) => {e.stopPropagation(); handleGithub();}}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View GitHub repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <Link
              href={'/projects'}
              className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-400 transition text-sm flex items-center gap-1"
            >
              View Project <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </SpotlightCard>
  );
}
