"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  ExternalLink,
  Tag,
  Building2Icon,
  X,
  Calendar,
  Eye,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedContent from "../animations/AnimatedContent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SpotlightCard from "@/app/animations/SpotlightCard";
import AWSA from "@/public/academy.png";
import AWSb from "@/public/AWSb.jpg";
import AWSc from "@/public/AWSc.jpg";
import LC from "@/public/LC.avif";
import days from '@/public/50d.jpg';
import June from '@/public/6J.jpg';
import Gh from '@/public/GH.webp';

export default function AchievementsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isHovered, setIsHovered] = useState(false);
  const [expandedAchievement, setExpandedAchievement] = useState(null);

  const achievements = [
    {
      id: "1",
      title: "AWS Academy Graduate Cloud Foundations",
      organization: "Amazon Web Services (AWS)",
      issueDate: "2025-07-15",
      description:
        "Certified AWS Cloud Foundation, demonstrating foundational knowledge of AWS services, cloud concepts, and best practices.",
      longDescription:
        "The AWS Certified Cloud Foundation examination is intended for individuals who have the knowledge and skills necessary to effectively demonstrate an overall understanding of the AWS Cloud, independent of specific technical roles addressed by other AWS Certifications. This certification validates an examinees ability to define what the AWS Cloud is and the basic global infrastructure, describe basic AWS Cloud architectural principles, explain the AWS Cloud value proposition, and describe key services on the AWS platform and their common use cases.",
      type: "certification",
      category: "Cloud Computing",
      logo: "https://example.com/aws-logo.svg",
      images: [
        AWSA,
        AWSb,
        AWSc,
      ],
      skills: [
        "Cloud Architecture",
        "AWS Services",
        "Security Best Practices",
        "Cost Management",
      ],
      certificateUrl: "https://www.credly.com/earner/earned/share/226728bc-18ce-4288-bbcd-ed278cb0a3b4",
      badgeUrl: "https://www.credly.com/earner/earned/share/226728bc-18ce-4288-bbcd-ed278cb0a3b4",
      expiryDate: "2028-01-20",
      credentialId: "",
    },
    // {
    //   id: "4",
    //   title: "MongoDB Developer Certification",
    //   organization: "MongoDB Inc.",
    //   issueDate: "2025-03-05",
    //   description:
    //     "Achieved MongoDB Developer Certification, demonstrating proficiency in schema design, aggregation, and query optimization.",
    //   longDescription:
    //     "The MongoDB Developer Certification validates a developer's ability to build sophisticated, high-performance applications using MongoDB. This certification demonstrates proficiency in MongoDB's document model, schema design principles, indexing strategies, and the aggregation framework. It also covers data modeling, query optimization, and performance tuning for MongoDB applications. The certification process involved a rigorous examination testing both theoretical knowledge and practical application of MongoDB concepts.",
    //   type: "certification",
    //   category: "Database Management",
    //   logo: "https://example.com/mongodb-logo.svg",
    //   images: [
    //     "/placeholder.svg?height=600&width=800",
    //     "/placeholder.svg?height=600&width=800",
    //   ],
    //   skills: [
    //     "NoSQL Databases",
    //     "Schema Design",
    //     "Aggregation Framework",
    //     "Query Optimization",
    //     "Indexing",
    //   ],
    //   certificateUrl: "https://example.com/certificate",
    //   badgeUrl: "https://example.com/badge",
    //   expiryDate: "2028-03-05",
    //   credentialId: "MONGODB-DEV-789012",
    // },
    {
      id: "9",
      title: "Data Security Certification",
      organization: "Coursera",
      issueDate: "2025-11-05",
      description:
        "Completed data security coursework with practical understanding of secure data handling and protection techniques.",
      longDescription:
        "This certification focuses on securing data assets, protecting privacy, understanding common threats, and applying secure practices across software and cloud environments.",
      type: "certification",
      category: "Security",
      logo: "https://example.com/amit-dada-logo.svg",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      skills: [
        "Mentorship",
        "Technical Leadership",
        "Knowledge Sharing",
        "Community Building",
      ],
      certificateUrl: "https://www.coursera.org/",
    },
    {
      id: "10",
      title: "OCI 2025 Certified Foundations Associate",
      organization: "Oracle",
      issueDate: "2025-03-28",
      description:
        "Validated foundational Oracle Cloud skills including core services, architecture, and cloud concepts.",
      longDescription:
        "The Oracle Cloud Foundations certification confirms understanding of cloud infrastructure concepts and OCI services useful for designing and deploying scalable applications.",
      type: "certification",
      category: "Cloud Computing",
      logo: "https://example.com/leetcode-logo.svg",
      images: [
        LC,days,June
      ],
      skills: [
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Time Complexity Analysis",
        "Space Optimization",
      ],
      profileUrl: "https://www.oracle.com/",
      statistics: { modules: 6, quizzes: 20, credential: 1 },
    },
    {
      id: "11",
      title: "OCI 2025 Certified AI Foundations Associate",
      organization: "Oracle",
      issueDate: "2025-03-28",
      description:
        "Earned AI Foundations certification covering AI/ML basics and Oracle AI service ecosystem.",
      longDescription:
        "This certification demonstrates practical understanding of AI fundamentals, model workflows, and core concepts required for cloud-based AI solutions.",
      type: "certification",
      category: "AI & Cloud",
      logo: "https://example.com/github-logo.svg",
      images: [Gh],
      skills: [
        "Version Control",
        "Collaborative Development",
        "Code Review",
        "Open Source Contribution",
      ],
      profileUrl: "https://www.oracle.com/",
      statistics: { modules: 5, labs: 8, credential: 1 },
    },
    {
      id: "12",
      title: "Python Internship Completion",
      organization: "GitHub",
      issueDate: "2024-07-31",
      description:
        "Completed Python internship at Placify Technologies focused on real-world scripting and debugging tasks.",
      longDescription:
        "During the internship, hands-on tasks strengthened core Python understanding, improved problem-solving, and developed practical coding discipline in structured workflows.",
      type: "achievement",
      category: "Internship",
      logo: "https://example.com/github-stars-logo.svg",
      images: [
       Gh
      ],
      skills: [
        "Data Structures",
        "Algorithms",
        "Technical Documentation",
        "Open Source",
      ],
      repositoryUrl: "https://github.com/Abhay-Pratap-Singh01",
      statistics: { durationMonths: 2, projects: 3, scripts: 10 },
    },
  ];

  useEffect(() => {
    console.log("chnaegd");
  }, [expandedAchievement])
  

  useEffect(() => {
    if (expandedAchievement) {
      document.body.style.overflow = "hidden"; // Disable scroll when modal is open
    } else {
      document.body.style.overflow = ""; // Restore scroll when modal closes
    }

    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [expandedAchievement]);

  const categories = Array.from(
    new Set(achievements.map((item) => item.category))
  );
  const types = Array.from(new Set(achievements.map((item) => item.type)));

  const filteredAchievements = achievements.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === "all" || item.type === typeFilter;
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;

    return matchesSearch && matchesType && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
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
    <div className="min-h-screen pt-10 bg-[#0a101f] text-white">
      {/* Header */}
      <div className="w-full py-16 px-6 text-center bg-[#0a101f]">
        <h1 className="text-4xl font-bold mb-3">
          Achievements & <span className="text-purple-400">Honors</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of my professional certifications, notable achievements,
          and honors received throughout my career.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="mb-10 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Search achievements, organizations, skills..."
              className="pl-12 py-6 bg-[#0a101f] border-[#2a3349] text-white rounded-full text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters and view toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant={typeFilter === "all" ? "default" : "outline"}
              className={
                typeFilter === "all"
                  ? "bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 border-0"
                  : "border-[#2a3349] text-gray-300"
              }
              onClick={() => setTypeFilter("all")}
            >
              All
            </Button>

            {types.map((type) => (
              <Button
                key={type}
                variant={typeFilter === type ? "default" : "outline"}
                className={
                  typeFilter === type
                    ? type === "honor"
                      ? "bg-yellow-400 hover:bg-yellow-500 border-0"
                      : "bg-purple-400 hover:bg-purple-500 border-0"
                    : "border-[#2a3349] text-gray-300"
                }
                onClick={() => setTypeFilter(type)}
              >
                {getTypeDisplayName(type)}s
              </Button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-[#2a3349] text-gray-300 ml-auto"
                >
                  {categoryFilter === "all" ? "All Categories" : categoryFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a2234] border-[#2a3349] text-white">
                <DropdownMenuItem onClick={() => setCategoryFilter("all")}>
                  All Categories
                </DropdownMenuItem>
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => setCategoryFilter(category)}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-400 mb-8">
          Showing {filteredAchievements.length} of {achievements.length} items
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((item) => (
            <AnimatedContent
              key={item.id}
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              >
            <SpotlightCard
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`rounded-xl border-2 ${
                item.type === "honor"
                  ? "border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-500/60"
                  : "border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/60"
              } transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              spotlightColor={
                item.type === "honor"
                  ? "rgba(255, 223, 73, 0.3)"
                  : "rgba(138, 43, 226, 0.25)"
              }
              // onClick={() => setExpandedAchievement(item)}
            >
              <div
                className={`p-6 h-full flex flex-col relative overflow-hidden ${
                  item.type === "honor"
                    ? "bg-gradient-to-br from-[#0a101f] via-[#4e3717] to-yellow-900"
                    : "bg-gradient-to-br from-[#0a101f] via-[#190b2a] to-purple-900"
                }`}
              >
                {item.type === "honor" && (
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=10&width=10')] opacity-5"></div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#2a3349] flex items-center justify-center p-2">
                    {/* <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={item.organization}
                      className="w-full h-full object-contain rounded-lg"
                    /> */}
                  </div>
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
                <h2
                  className={`text-xl font-bold mb-2 ${
                    item.type === "honor"
                      ? "text-yellow-400"
                      : "text-purple-400"
                  }`}
                >
                  {item.title}
                </h2>
                <p className="text-gray-400 mb-3 flex gap-2 items-center">
                  <Building2Icon className="w-4 h-4" />
                  {item.organization}
                </p>
                <p className="text-gray-300 text-sm mb-4 font-semibold flex-grow">
                  {item.description}
                </p>
                <div className="mt-auto pt-4 border-t border-[#2a3349]">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 font-semibold text-sm">
                      Issued: {formatDate(item.issueDate)}
                    </p>
                    {item.expiryDate && (
                      <p className="text-gray-500 font-semibold text-sm">
                        Expires: {formatDate(item.expiryDate)}
                      </p>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className={`mt-2 px-3 py-2 w-full text-sm font-medium rounded-full flex gap-2 ${
                      item.type === "honor"
                        ? "bg-yellow-400/10 text-yellow-300 border border-yellow-400/20"
                        : "bg-purple-400/10 text-purple-300 border border-purple-400/20"
                    }`}
                  >
                    <Tag />
                    {item.category}
                  </Badge>
                </div>
                {/* Inside the SpotlightCard */}
                <motion.div>
                  <p
                    className={`inline-flex items-center text-sm font-semibold ${
                      item.type === "honor"
                        ? "text-yellow-400 hover:text-yellow-300"
                        : "text-purple-400 hover:text-purple-300"
                    } transition-colors mt-5 group`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // console.log("CLICKED ON VIEW DETAILS", item.title);
                      setExpandedAchievement(item);
                      // console.log("STATE AFTER UPDATE ATTEMPT:", item.title);
                    }}
                  >
                    View{" "}
                    {item.type === "certification"
                      ? "Certificate"
                      : item.type === "publication"
                      ? "Publication"
                      : "Details"}
                    <motion.span
                      initial={{ x: 0 }}
                      animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                      transition={{
                        duration: 1,
                        repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                      }}
                    >
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </motion.span>
                  </p>
                </motion.div>
              </div>
            </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        {/* Empty state */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 rounded-full bg-[#2a3349] flex items-center justify-center mb-4">
              <Search className="text-gray-400" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">No achievements found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what
              you&apos;re looking for.
            </p>
            <Button
              className="mt-6 bg-purple-400 hover:bg-purple-500"
              onClick={() => {
                setSearchQuery("");
                setTypeFilter("all");
                setCategoryFilter("all");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      {/* Expanded Achievement Modal */}
      <AnimatePresence>
        {expandedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setExpandedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`bg-[#0a101f] border-2 ${
                expandedAchievement.type === "honor"
                  ? "border-yellow-400/30"
                  : "border-purple-400/30"
              } rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Button
                  onClick={() => setExpandedAchievement(null)}
                  className={`absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full ${
                    expandedAchievement.type === "honor"
                      ? "hover:bg-yellow-500"
                      : "hover:bg-purple-500"
                  } transition-colors`}
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Main image */}
                <div className="h-64 sm:h-80 overflow-hidden">
                  <Image
                  width={800}
                  height={600}
                    src={expandedAchievement.images[0] || "@/public/IOT.png"}
                    alt={expandedAchievement.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  {/* Header info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar
                        className={`h-4 w-4 ${
                          expandedAchievement.type === "honor"
                            ? "text-yellow-400/70"
                            : "text-purple-400/70"
                        }`}
                      />
                      <span>
                        Issued: {formatDate(expandedAchievement.issueDate)}
                      </span>
                    </div>
                    {expandedAchievement.views && (
                      <div
                        className={`flex items-center gap-2 rounded-full ${
                          expandedAchievement.type === "honor"
                            ? "bg-yellow-400/10 text-yellow-300"
                            : "bg-purple-400/10 text-purple-300"
                        } px-3 py-1 text-sm`}
                      >
                        <Eye className="h-4 w-4" />
                        <span>{expandedAchievement.views} views</span>
                      </div>
                    )}
                  </div>

                  {/* Title and organization */}
                  <h2
                    className={`text-3xl font-bold ${
                      expandedAchievement.type === "honor"
                        ? "text-yellow-400"
                        : "text-purple-400"
                    } mb-2`}
                  >
                    {expandedAchievement.title}
                  </h2>

                  <p className="text-gray-300 mb-2 flex gap-2 items-center text-lg">
                    <Building2Icon className="w-5 h-5" />
                    {expandedAchievement.organization}
                  </p>

                  <Badge
                    className={`mb-6 ${
                      expandedAchievement.type === "honor"
                        ? "bg-yellow-400 hover:bg-yellow-500"
                        : "bg-purple-400 hover:bg-purple-500"
                    } font-semibold`}
                  >
                    {getTypeDisplayName(expandedAchievement.type)}
                  </Badge>

                  {/* Long description */}
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {expandedAchievement.longDescription}
                  </p>

                  {/* Additional images gallery */}
                  {expandedAchievement.images &&
                    expandedAchievement.images.length > 1 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Gallery
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {expandedAchievement.images.map((image, index) => (
                            <div
                              key={index}
                              className="rounded-lg overflow-hidden  h-[150px] border border-gray-700 aspect-auto"
                            >
                              <Image
                              width={100}
                              height={100}
                                src={image || "/placeholder.svg"}
                                alt={`${expandedAchievement.title} - Image ${
                                  index + 1
                                }`}
                                className="w-full h-full  hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Skills/Technologies */}
                  {expandedAchievement.skills &&
                    expandedAchievement.skills.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {expandedAchievement.skills.map(
                            (skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className={`flex items-center gap-1.5 rounded-full border ${
                                  expandedAchievement.type === "honor"
                                    ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
                                    : "border-purple-400/30 bg-purple-400/10 text-purple-300"
                                } px-3 py-1.5 text-sm font-medium`}
                              >
                                <Tag className="h-3.5 w-3.5" />
                                {skill}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* Testimonials for honors */}
                  {expandedAchievement.testimonials &&
                    expandedAchievement.testimonials.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Testimonials
                        </h3>
                        <div className="grid gap-4">
                          {expandedAchievement.testimonials.map(
                            (testimonial, index) => (
                              <div
                                key={index}
                                className="bg-[#1a2234] rounded-lg p-4 border border-yellow-400/20"
                              >
                                <p className="text-gray-300 italic mb-3">
                                  &quot;{testimonial.text}&quot;
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
                                    <span className="text-yellow-400 font-bold">
                                      {testimonial.name.charAt(0)}
                                    </span>
                                  </div>
                                  <div>
                                    <p className="font-semibold text-white">
                                      {testimonial.name}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                      {testimonial.position}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* Statistics for achievements */}
                  {expandedAchievement.statistics && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Statistics
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(expandedAchievement.statistics).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="bg-[#1a2234] rounded-lg p-4 text-center"
                            >
                              <p
                                className={`text-2xl font-bold ${
                                  expandedAchievement.type === "honor"
                                    ? "text-yellow-400"
                                    : "text-purple-400"
                                }`}
                              >
                                {value}
                              </p>
                              <p className="text-gray-400 capitalize">{key}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {expandedAchievement.certificateUrl && (
                      <a
                        href={expandedAchievement.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 rounded-lg ${
                          expandedAchievement.type === "honor"
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-purple-500 hover:bg-purple-600"
                        } px-6 py-1 font-medium text-white transition-colors`}
                      >
                        <ExternalLink className="h-5 w-5" />
                        View Certificate
                      </a>
                    )}
                    {expandedAchievement.badgeUrl && (
                      <a
                        href={expandedAchievement.badgeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 rounded-lg border-2 ${
                          expandedAchievement.type === "honor"
                            ? "border-yellow-400/50 bg-transparent hover:bg-yellow-400/10 text-yellow-300"
                            : "border-purple-400/50 bg-transparent hover:bg-purple-400/10 text-purple-300"
                        } px-6 py-1 font-medium transition-colors`}
                      >
                        <Tag className="h-5 w-5" />
                        View Digital Badge
                      </a>
                    )}
                    {expandedAchievement.profileUrl && (
                      <a
                        href={expandedAchievement.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 rounded-lg border-2 ${
                          expandedAchievement.type === "honor"
                            ? "border-yellow-400/50 bg-transparent hover:bg-yellow-400/10 text-yellow-300"
                            : "border-purple-400/50 bg-transparent hover:bg-purple-400/10 text-purple-300"
                        } px-6 py-1 font-medium transition-colors`}
                      >
                        <ExternalLink className="h-5 w-5" />
                        View Profile
                      </a>
                    )}
                    {expandedAchievement.repositoryUrl && (
                      <a
                        href={expandedAchievement.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 rounded-lg border-2 ${
                          expandedAchievement.type === "honor"
                            ? "border-yellow-400/50 bg-transparent hover:bg-yellow-400/10 text-yellow-300"
                            : "border-purple-400/50 bg-transparent hover:bg-purple-400/10 text-purple-300"
                        } px-6 py-1 font-medium transition-colors`}
                      >
                        <ExternalLink className="h-5 w-5" />
                        View Repository
                      </a>
                    )}
                    {expandedAchievement.awardUrl && (
                      <a
                        href={expandedAchievement.awardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 rounded-lg border-2 ${
                          expandedAchievement.type === "honor"
                            ? "border-yellow-400/50 bg-transparent hover:bg-yellow-400/10 text-yellow-300"
                            : "border-purple-400/50 bg-transparent hover:bg-purple-400/10 text-purple-300"
                        } px-6 py-1 font-medium transition-colors`}
                      >
                        <ExternalLink className="h-5 w-5" />
                        View Award Details
                      </a>
                    )}
                  </div>

                  {/* Credential ID for certifications */}
                  {expandedAchievement.credentialId && (
                    <div className="mt-6 p-4 bg-[#1a2234] rounded-lg">
                      <p className="text-gray-400">Credential ID</p>
                      <p className="font-mono text-white">
                        {expandedAchievement.credentialId}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
