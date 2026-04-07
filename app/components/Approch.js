"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import PixelCard from "../animations/PixelCard";
import { motion } from "framer-motion";
import AnimatedContent from "../animations/AnimatedContent";

const phases = [
  {
    title: "Phase 1",
    heading: "Planning & Strategy",
    content:
      "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
  },
  {
    title: "Phase 2",
    heading: "Development & Progress Update",
    content:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    title: "Phase 3",
    heading: "Development & Launch",
    content:
      "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Page() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-[#050714]  py-20">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 40 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <h1 className="text-4xl font-bold text-center mb-2">
          My <span className="text-purple-400">Approach</span>
        </h1>
        <p className="text-center text-gray-300 font-medium mb-10">
          Simple, strategic, and effective—this is my approach.
        </p>
      </AnimatedContent>
      <div className="flex flex-col   md:flex-row justify-center items-center  px-6 gap-8">
        {phases.map((phase, index) => (
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 55 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            key={index}
          >
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-100 w-72"
            >
              <div className="absolute inset-0 border border-purple-400/50 rounded-3xl">
                {/* Plus signs at corners */}
                <Plus className="absolute -top-3 -left-3 w-6 h-6 text-purple-400/90 stroke-[1.5]" />
                <Plus className="absolute -top-3 -right-3 w-6 h-6 text-purple-400/90 stroke-[1.5]" />
                <Plus className="absolute -bottom-3 -left-3 w-6 h-6 text-purple-400/90 stroke-[1.5]" />
                <Plus className="absolute -bottom-3 -right-3 w-6 h-6 text-purple-400/90 stroke-[1.5]" />
              </div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out rounded-3xl overflow-hidden
                ${
                  hoveredIndex === index
                    ? "bg-gradient-to-b from-purple-500 to-transparent"
                    : "bg-transparent"
                }`}
              >
                {hoveredIndex === index ? (
                  <PixelCard
                    key={index}
                    speed={3}
                    className=""
                    colors="#c27aff"
                  >
                    <div className="text-center p-8 absolute z-50 opacity-100">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 3 }}
                      >
                        <motion.h3
                          variants={itemVariants}
                          className="text-2xl font-bold text-white mb-4"
                        >
                          {phase.heading}
                        </motion.h3>
                        <motion.p
                          variants={itemVariants}
                          className="text-white text-sm font-semibold leading-relaxed"
                        >
                          {phase.content}
                        </motion.p>
                      </motion.div>
                    </div>
                  </PixelCard>
                ) : (
                  <div className="flex items-center justify-center h-full w-full">
                    <div className="text-xl font-medium text-white px-6 py-3 rounded-full border border-purple-400/70 bg-[#0f0a1e]">
                      {phase.title}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}
