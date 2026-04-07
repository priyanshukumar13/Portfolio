import React from "react";
import {
  ArrowRight,
  BookOpen,
  Code,
  Laptop,
  Monitor,
  Smartphone,
  Video,
} from "lucide-react";
import Link from "next/link";
import AnimatedContent from "../animations/AnimatedContent";
import SpotlightCard from "../animations/SpotlightCard";
import { Database } from "lucide-react";
import { Braces } from "lucide-react";
import { Cpu } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Learning Resources",
    icon: <Monitor className="h-5 w-5 text-[#c27aff]" />,
    description:
      "Essential products and tools for creating a productive and comfortable workspace.",
    articles: [
      {
        id: 1,
        title: "Data Structures and Algorithms",
        description: "A comprehensive guide to mastering DSA.",
        link: "/resources/learning-resources",
        icon: <Laptop className="h-4 w-4 text-[#c27aff]" />
      },
      {
        id: 2,
        title: "Database Management Systems",
        description: "A comprehensive guide to mastering DBMS.",
        link: "/resources/learning-resources",
        icon: <Database className="h-4 w-4 text-[#c27aff]" />
      },
      {
        id: 3,
        title: "Build Own X",
        description: "A comphrehensive guide make your own projects",
        link: "/resources/learning-resources",
        icon: <Cpu className="h-4 w-4 text-[#c27aff]" />
      },
      {
        id: 4,
        title: "Python Interview Prep",
        description: "A comprehensive guide to mastering Python.",
        link: "/resources/learning-resources",
        icon: <Braces className="h-4 w-4 text-[#c27aff]" />
      },
    ],
  },
  {
    id: 2,
    title: "Software & Tools",
    icon: <Code className="h-5 w-5 text-[#c27aff]" />,
    description:
      "Software applications, development tools, and digital resources that enhance productivity and workflow.",
    articles: [],
  },
  {
    id: 3,
    title: "Courses",
    icon: <BookOpen className="h-5 w-5 text-[#c27aff]" />,
    description:
      "Online courses, tutorials, and learning resources for personal and professional development.",
    articles: [],
  },
  {
    id: 4,
    title: "Tech & Gadgets",
    icon: <Smartphone className="h-5 w-5 text-[#c27aff]" />,
    description:
      "Latest technology, gadgets, and accessories that make life easier and more enjoyable.",
    articles: [],
  },
  {
    id: 5,
    title: "Books",
    icon: <BookOpen className="h-5 w-5 text-[#c27aff]" />,
    description:
      "Must-read books for personal growth, technical knowledge, and business insights.",
    articles: [],
  },
  {
    id: 6,
    title: "Webinars & Tutorials",
    icon: <Video className="h-5 w-5 text-[#c27aff]" />,
    description:
      "Webinars on technology, leadership, and personal growth on YouTube.",
    articles: [
      {
        id: 1,
        title: "DSA for FAANG Companys By Kunal Kushwa",
        description: "A comprehensive guide to mastering DSA.",
        link: "/resources/learning-resources#tutorials",
        icon: <Video className="h-4 w-4 text-[#c27aff]" />
      },
      {
        id: 2,
        title: "Mastering DEVOPS",
        description: "Mastering Devops for Software Engineers",
        link: "/resources/learning-resources#tutorials",
        icon: <Video className="h-4 w-4 text-[#c27aff]" />
      }
    ],
  },
];

export default function MyPicks() {
  return (
    <div className="min-h-screen bg-[#0a101f] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto pt-10">
        <h1 className="text-4xl font-bold text-center mb-2 text-[#c27aff]">
          My Picks
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Curated recommendations for products, tools, courses, and technology.
          Each recommendation comes with detailed insights and honest reviews.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <SpotlightCard
              className="rounded-lg bg-[#111627] p-6 border border-purple-400/40"
              spotlightColor="rgba(138, 43, 226, 0.25)"
              key={category.id}
            >
              <div className=" ">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#1a2035] p-2 rounded-md shadow-[0_0_15px_rgba(194,122,255,0.15)]">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#c27aff]">
                      {category.title}{" "}
                      {category.articles.length > 0 && (
                        <span className="text-xs bg-[#c27aff]/20 text-[#c27aff] px-2 py-0.5 rounded-full ml-1">
                          {category.articles.length}{" "}
                          {category.articles.length === 1
                            ? "article"
                            : "articles"}
                        </span>
                      )}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {category.articles.length > 0 ? (
                  <div className="mt-6 space-y-3">
                    {category.articles.map((article) => (
                      <Link
                        key={article.id}
                        href={article.link}
                        className="flex items-start gap-4 bg-[#151b30] hover:bg-[#1a2035] group transition-colors p-4 rounded-md hover:border-[#c27aff]/50 border border-transparent"
                      >
                        <div className="bg-[#1a2035] p-2 rounded-md shadow-[0_0_15px_rgba(194,122,255,0.15)] mt-1">
                          {article.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium group-hover:text-[#c27aff] transition-colors">
                              {article.title}
                            </h3>
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#c27aff] transition-colors flex-shrink-0" />
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            {article.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-48">
                    <div className="bg-[#1a2035] p-4 rounded-md mb-4 shadow-[0_0_20px_rgba(194,122,255,0.2)]">
                      {category.icon}
                    </div>
                    <p className="text-sm">
                      <span className="text-[#c27aff] font-semibold">
                        Nothing here yet.
                      </span>{" "}
                      <span className="text-gray-400">Check back soon!</span>
                    </p>
                  </div>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}
