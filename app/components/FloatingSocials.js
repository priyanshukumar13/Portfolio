"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaDocker,
  FaPython, FaJava, FaPhp, FaAws, FaLinux, FaWindows, FaDatabase, FaNpm, FaFigma,
} from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";

const FloatingSocials = () => {
  const technologies = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <FaWindows />, name: "Windows" },
    { icon: <FaDatabase />, name: "Database" },
    { icon: <FaNpm />, name: "NPM" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Update window size on the client side
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowSize(); // Set initial size
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const randomPosition = () => ({
    x: Math.random() * windowSize.width - windowSize.width / 2,
    y: Math.random() * windowSize.height - windowSize.height / 2,
  });

  const floatingConfig = useMemo(() => {
    if (!mounted || !windowSize.width || !windowSize.height) return [];

    return technologies.map(() => {
      const initial = randomPosition();
      const toA = randomPosition();
      const toB = randomPosition();
      return {
        initial,
        animateX: [toA.x, toB.x],
        animateY: [toA.y, toB.y],
        duration: Math.random() * 5 + 5,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
      };
    });
  }, [mounted, windowSize.width, windowSize.height]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 h-screen w-screen pointer-events-none">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={floatingConfig[index]?.initial || { x: 0, y: 0 }}
          animate={{
            x: floatingConfig[index]?.animateX || [0, 0],
            y: floatingConfig[index]?.animateY || [0, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: floatingConfig[index]?.duration || 8,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="absolute z-30"
          whileHover={{ scale: 1.2 }}
          style={{
            left: floatingConfig[index]?.left || "0vw",
            top: floatingConfig[index]?.top || "0vh",
          }}
        >
          <Link href={""} target="_blank">
            <div className="text-white bg-purple-500 p-3 rounded-full shadow-lg shadow-purple-700/50 transition-transform duration-300 hover:scale-110 cursor-pointer">
              {tech.icon}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSocials;