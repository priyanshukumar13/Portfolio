"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Monitor,
  Server,
  Cloud,
  Database,
} from "lucide-react";
import SpotlightCard from "../animations/SpotlightCard";
import AnimatedContent from "../animations/AnimatedContent";
import { Badge } from "@/components/ui/badge";

export default function SkillsExpertise() {
  const [isHovered, setIsHovered] = useState(false);
  const skillCategories = [
    {
      title: "Languages",
      icon: <Monitor className="w-6 h-6" />,
      description:
        "Core programming languages I use for development and scripting",
      skills: ["C++", "Python", "JavaScript"],
      status: "done",
    },
    {
      title: "Technologies & Frameworks",
      icon: <Server className="w-6 h-6" />,
      description:
        "Tools and frameworks used in my projects",
      skills: [
        "React JS",
        "Node.js",
        "Git",
        "GitHub",
        "Ubuntu",
        "HTML",
        "CSS",
      ],
      status: "done",
    },
    {
      title: "Cloud & Platform Skills",
      icon: <Database className="w-6 h-6" />,
      description:
        "Hands-on skills from project work and certifications",
      skills: ["AWS", "Serverless", "API Integration", "Authentication Basics"],
      status: "done",
    },
    {
      title: "Core Strengths",
      icon: <Cloud className="w-6 h-6" />,
      description:
        "Problem solving and practical development strengths",
      skills: [
        "Data Structures & Algorithms",
        "Problem Solving",
        "Responsive Web Design",
        "Scripting in Python",
      ],
      status: "learning",
    },
  ];

  // {
  //   title: "Data Science & Analytics",
  //   icon: <FaJava className="w-6 h-6" />,
  //   description:
  //     "",
  //   skills: ["Java","Python","C++","Javascript",],
  // },

  return (
    <div className="bg-[#111827] text-white py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 30 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <h1 className="text-4xl font-bold text-center mb-4">
            Skills & <span className="text-purple-400">Expertise</span>
          </h1>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 30 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <p className="text-gray-300 text-center font-semibold max-w-2xl mx-auto mb-12">
            Here&apos;s a quick overview of my skill include frontend magic ,
            backend wizardry, and everything in between. I am always eager to
            learn new technologies
          </p>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              className="relative h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              key={index}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatedContent
                distance={150}
                direction={
                  index === 1 || index === 4 ? "vertical" : "horizontal"
                }
                reverse={index === 0 || index === 3 ? true : false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                {isHovered && (
                  <>
                    <motion.div
                      className="absolute w-2 h-2 rounded-full bg-purple-400/40"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: [0, 20, 10, 30, 0],
                        y: [0, -20, -40, -10, 0],
                        opacity: [0, 1, 0.5, 1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                      style={{ top: "20%", left: "10%" }}
                    />
                    <motion.div
                      className="absolute w-3 h-3 rounded-full bg-purple-400/30"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: [0, -15, -25, -10, 0],
                        y: [0, 30, 10, 40, 0],
                        opacity: [0, 0.7, 0.3, 0.8, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: 0.5,
                      }}
                      style={{ bottom: "30%", right: "15%" }}
                    />
                    <motion.div
                      className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/50"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: [0, 25, 5, 15, 0],
                        y: [0, 15, 30, 5, 0],
                        opacity: [0, 0.5, 1, 0.3, 0],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: 1,
                      }}
                      style={{ bottom: "20%", left: "20%" }}
                    />
                  </>
                )}
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(138, 43, 226, 0.25)"
                >
                  <div className="  bg-gradient-to-br from-[#0a101f] to-[#131c35] rounded-lg p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-white">{category.icon}</div>
                      <h2 className="text-xl font-semibold">
                        {category.title}
                      </h2>
                      {category.status == "learning" ? (
                        <Badge
                          className={
                            "bg-purple-500/20 border-2 border-purple-500 rounded-lg text-purple-200"
                          }
                        >
                          {" "}
                          Currently Learning
                        </Badge>
                      ) : (
                        ""
                      )}
                    </div>

                    <p className="text-gray-300 mb-6">{category.description}</p>

                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="border-2 border-purple-400/40 bg-gradient-to-br from-[#0a101f] to-[#131c35] py-2 px-3 rounded-md text-sm text-white font-medium text-center cursor-pointer"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
