"use client";
import { useState } from "react";
import {
  Lightbulb,
  GraduationCap,
  Briefcase,
  BookOpen,
  Trophy,
} from "lucide-react";
import AnimatedContent from "../animations/AnimatedContent";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BsFire } from "react-icons/bs";

export default function PortfolioJourney() {
  const [activeTab, setActiveTab] = useState("experience");

  const experienceItems = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      company: "Placify Technologies",
      period: "June 2024 - July 2024",
      role: "Python Intern",
      description:
        "Completed a hands-on internship focused on Python fundamentals, scripting, debugging, and practical problem solving.",
      achievements: [
        "Built and tested Python scripts to automate simple tasks",
        "Improved debugging and code optimization skills in real project-style tasks",
      ],
      website: "#",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      company: "Academic and Project Development",
      period: "2025 - Present",
      role: "Student Developer",
      description:
        "Focused on cloud-integrated and AI-powered projects while strengthening full-stack and system analysis fundamentals.",
      achievements: [
        "Built LOSTit using React, AWS, and Google Gemini AI",
        "Developed VeriScan password checker API on AWS Lambda and API Gateway",
      ],
      website: "#",
    },
  ];

  const educationItems = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      institution: "Lovely Professional University, Punjab",
      period: "2023 - Present",
      degree: "B.Tech in Computer Science and Engineering",
      description:
        "Pursuing Computer Science and Engineering with focus on software development, cloud technologies, and practical system design.",
      achievements: [
        "Current CGPA: 6.14",
        "Built multiple production-style academic projects",
      ],
      website: "https://www.lpu.in/",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      institution: "Army Public School, Jalandhar",
      period: "2022 - 2023",
      degree: "Class 12th (Science)",
      description:
        "Completed higher secondary education with science stream.",
      achievements: ["Scored 74.60% in Class 12"],
      website: "#",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      institution: "Army Public School, Jalandhar",
      period: "2021 - 2022",
      degree: "Secondary Education",
      description:
        "Completed secondary education with strong academic performance.",
      achievements: ["Scored 92.60% in Class 10"],
      website: "#",
    },
  ];

  const activitiesItems = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competitive Programming",
      period: "2024 - Present",
      description:
        "Practicing data structures and algorithms while improving analytical and optimization skills.",
      achievements: [
        "Applied DSA concepts across project problem statements",
        "Regularly solve algorithmic and logic-based coding tasks",
      ],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Open Source Contributions",
      period: "2025 - Present",
      description:
        "Publishing and maintaining project repositories with practical implementations in web, AI, and cloud domains.",
      achievements: [
        "Maintained LOSTit, AI Performance Analyzer, and VeriScan repositories",
        "Documented project architecture and deployment workflows",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a101f] text-slate-200 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mt-10 mb-12">
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
            <h1 className="text-4xl font-bold mb-3 text-white">
              Experince , Interships &{" "}
              <span className="text-purple-400"> Qualification</span>
            </h1>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 50 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore my professional journey, educational background, and
              extracurricular activities that have shaped my career path.
            </p>
          </AnimatedContent>
        </div>

        <Tabs
          defaultValue="experience"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 55 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="flex justify-center mb-10">
              <TabsList className="grid grid-cols-3 w-full max-w-md bg-slate-800/50 ">
                {[
                  {
                    value: "experience",
                    icon: <Briefcase className="w-4 h-4 mr-2" />,
                    label: "Experience",
                  },
                  {
                    value: "education",
                    icon: <GraduationCap className="w-4 h-4 mr-2" />,
                    label: "Education",
                  },
                  {
                    value: "activities",
                    icon: <Trophy className="w-4 h-4 mr-2" />,
                    label: "Activities",
                  },
                ].map(({ value, icon, label }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="data-[state=active]:!bg-purple-600 data-[state=active]:!text-white transition-colors"
                  >
                    {icon}
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </AnimatedContent>
          {[
            ["experience", experienceItems],
            ["education", educationItems],
            ["activities", activitiesItems],
          ].map(([tabValue, items]) => (
            <TabsContent key={tabValue} value={tabValue} className="mt-0">
              <div className="relative">
                <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-purple-600/20" />

                <div className="space-y-16">
                  {items.map((item, index) => (
                    <div key={index} className="relative">
                      <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 55 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                      >
                        <div className="absolute left-5 md:left-1/2 top-1/2 -translate-x-1/2 p-5 rounded-full flex justify-center items-center bg-purple-500/50">
                          <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500" />
                        </div>
                      </AnimatedContent>
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
                        <div
                          className={cn(
                            "transition-transform duration-500 hover:scale-105",
                            "ml-11 md:ml-0 md:w-[calc(50%-40px)]",
                            index % 2 === 0 ? "md:ml-auto" : "md:mr-auto",
                            "p-6 rounded-lg bg-slate-800/50"
                          )}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg text-purple-400">
                              {item.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-purple-400">
                                {item.company || item.institution || item.title}
                              </h3>
                              <div className="text-sm text-purple-300 font-medium">
                                {item.period}{" "}
                                {item.role
                                  ? `| ${item.role}`
                                  : item.degree
                                  ? `| ${item.degree}`
                                  : ""}
                              </div>
                            </div>
                          </div>

                          <p className="text-slate-300 mb-4">
                            {item.description}
                          </p>

                          {item.achievements?.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold mb-2">
                                Key Achievements:
                              </h4>
                              <ul className="space-y-1">
                                {item.achievements.map((achievement, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-slate-400"
                                  >
                                    • {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {item.website && (
                            <Link
                              href={item.website}
                              className="inline-block text-sm text-purple-400 hover:text-purple-300 transition-colors"
                            >
                              Visit Website
                            </Link>
                          )}
                        </div>
                      </AnimatedContent>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
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
          <Link href="/about">
            <Button className="bg-gradient-to-r transition-transform duration-300 hover:scale-105 from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 cursor-pointer text-white px-8 py-3 rounded-lg">
              <BsFire /> View All Details
            </Button>
          </Link>
        </div>
      </AnimatedContent>
    </div>
  );
}

export const metadata = {
  title: "Priyanshu Kumar - Journey",
  description: "Journey Page of my Portfolio website",
};
