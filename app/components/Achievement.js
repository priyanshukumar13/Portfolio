"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Building2Icon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SpotlightCard from "@/app/animations/SpotlightCard";
import { GitGraph } from "lucide-react";
import { BarChart } from "lucide-react";
import AnimatedContent from "../animations/AnimatedContent";

export default function AchievementsSection() {
  const [isHovered, setIsHovered] = useState(false);

  // Sample data from your achievements page - showing only 4 items
  const achievements = [
    {
      id: 1,
      title: "AWS Academy Graduate Cloud Foundations",
      organization: "Amazon Web Services (AWS)",
      issueDate: "2025-07-15",
      description:
        "Completed AWS Academy Cloud Foundations certification focused on cloud concepts, security, and core AWS services.",
      type: "certification",
      category: "Cloud Computing",
    },
    {
      id: 2,
      title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
      organization: "Oracle",
      issueDate: "2025-10-10",
      description:
        "Earned OCI Foundations certification with knowledge of Oracle Cloud services and architecture basics.",
      type: "certification",
      category: "Cloud Computing",
    },
    {
      id: 3,
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      organization: "Oracle",
      issueDate: "2025-10-20",
      description:
        "Certified in OCI AI Foundations with understanding of core AI and machine learning concepts on cloud.",
      type: "certification",
      category: "AI & Cloud",
    },
    {
      id: 4,
      title: "Data Security Certification",
      organization: "Coursera",
      issueDate: "2025-11-05",
      description:
        "Completed data security coursework covering key concepts in data protection and secure practices.",
      type: "certification",
      category: "Security",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
    }).format(date);
  };

  const getTypeDisplayName = (type) => {
    switch (type) {
      case "certification":
        return "Certification";
      case "achievement":
        return "Achievement";
      case "honor":
        return "Honor";
      case "award":
        return "Award";
      case "publication":
        return "Publication";
      case "project":
        return "Project";
      default:
        return type;
    }
  };

  return (
    <section className="py-16 bg-[#0a101f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-between mb-12">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="text-center mb-5">
              <h2 className="text-4xl font-bold mb-3">
                Achievements & <span className="text-purple-400">Honors</span>
              </h2>
              <p className="text-gray-400 max-w-2xl">
                A selection of my professional certifications, notable
                achievements, and honors.
              </p>
            </div>
          </AnimatedContent>
          {/* <Link
            href="/achievements"
            className="group mt-4 md:mt-0 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span className="font-medium">View all achievements</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: item.id * 13 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              key={item.id}
              threshold={0.2}
            >
              <SpotlightCard
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`rounded-xl border-2 ${
                  item.type === "honor"
                    ? "border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-500/60"
                    : "border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/60"
                } transition-transform hover:scale-105 duration-700  h-full`}
                spotlightColor={
                  item.type === "honor"
                    ? "rgba(255, 223, 73, 0.3)"
                    : "rgba(138, 43, 226, 0.25)"
                }
              >
                <div
                  className={`p-5 h-full flex flex-col relative overflow-hidden ${
                    item.type === "honor"
                      ? "bg-gradient-to-br from-[#0a101f] via-[#4e3717] to-yellow-900"
                      : "bg-gradient-to-br from-[#0a101f] via-[#190b2a] to-purple-900"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Badge
                      className={`${
                        item.type === "honor"
                          ? "bg-yellow-400 hover:bg-yellow-500"
                          : "bg-purple-400 hover:bg-purple-500"
                      } font-semibold`}
                    >
                      {getTypeDisplayName(item.type)}
                    </Badge>
                  </div>
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      item.type === "honor"
                        ? "text-yellow-400"
                        : "text-purple-400"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-2 flex gap-2 items-center text-sm">
                    <Building2Icon className="w-3.5 h-3.5" />
                    {item.organization}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-[#2a3349]">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 font-semibold text-xs">
                        {formatDate(item.issueDate)}
                      </p>
                      <Link
                        href="/achievement"
                        className={`inline-flex items-center text-xs font-semibold ${
                          item.type === "honor"
                            ? "text-yellow-400 hover:text-yellow-300"
                            : "text-purple-400 hover:text-purple-300"
                        } transition-colors group`}
                      >
                        View details
                        <motion.span
                          initial={{ x: 0 }}
                          animate={isHovered ? { x: [0, 3, 0] } : { x: 0 }}
                          transition={{
                            duration: 1,
                            repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                          }}
                        >
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 60 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="mt-10 text-center">
            <Link href="/achievement">
              <Button className="bg-gradient-to-r transition-transform duration-300 hover:scale-105 from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 cursor-pointer text-white px-8 py-3 rounded-lg">
                <BarChart /> See All Achievements
              </Button>
            </Link>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
