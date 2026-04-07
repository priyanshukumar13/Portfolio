"use client"

import { X, Calendar, Eye, Tag, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"


export function ProjectModal({ project, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
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
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-purple-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 sm:h-80 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={1200}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <span className="text-purple-300 text-lg font-medium">No Preview Available</span>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 text-purple-400/70" />
                    <span>{project.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-purple-400/10 px-3 py-1 text-sm text-purple-300">
                    <Eye className="h-4 w-4" />
                    <span>{project.views} views</span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>

                <p className="text-gray-300 mb-8 leading-relaxed">{project.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
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
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-purple-500 hover:bg-purple-600 px-6 py-1.5 font-medium text-white transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    View Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg border-2 border-purple-400/50 bg-transparent hover:bg-purple-400/10 px-6 py-1.5 font-medium text-purple-300 transition-colors"
                    >
                      <FaGithub className="h-5 w-5" />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

