"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedContent from "../animations/AnimatedContent";

import {
  Code,
  Briefcase,
  Award,
  Users,
  NotebookText,
  Database,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SkillsExpertise from "../components/Expertise";
import FeaturedProjects from "../components/Project";
import ContactPage from "../components/Contact";
import ApprochPage from "../components/Approch";
import AchievementsSection from "../components/Achievement";
import PortfolioJourney from "../components/Experience";
import FeaturedResources from "../components/Resources";
import { toast } from "sonner";

export default function Home() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Abhay Pratap Singh",
      designation: "Full Stack Developer",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleClick = () => {
    toast(
      <div className="flex items-center gap-2">
        <NotebookText className="w-5 h-5" />
        <span>Resume is not available yet</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen max-w-screen pt-20 md:pt-24 bg-[#0a101f] text-white relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full xl:w-3/4 mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section (Now Appears Above Text on Mobile) */}
        <div className="w-full md:w-1/3  flex justify-center order-1 md:order-2">
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
            <div className="relative w-48 h-48 md:w-84 md:h-84 rounded-full overflow-hidden border-4 border-gray-800">
              <Image
                src="/AtharvaKote.png"
                width={192}
                height={192}
                className="w-full h-full"
                alt="me"
              />
            </div>
          </AnimatedContent>
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 order-2 md:order-1">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Hi, I&apos;m <span className="text-purple-400">Abhay Pratap Singh</span>
            </h1>
            <p className="text-base md:text-lg">
              I am a Computer Science and Engineering student at Lovely
              Professional University, passionate about building practical and
              impactful software solutions.
            </p>
            <p className="text-base md:text-lg mt-4">
              My focus areas include React development, Python scripting, cloud
              technologies, and AI-powered systems. I enjoy solving real-world
              problems through scalable web apps and serverless architectures.
            </p>
            <div className="my-6 font-semibold p-4 border-l-4 border-purple-400 ">
              <p className="italic text-blue-200">
                A student driven by curiosity, consistent practice, and
                real-world project building.
              </p>
            </div>
            <div onClick={handleClick}>
              <Button className="bg-purple-400 flex items-center gap-2 cursor-pointer hover:bg-purple-400 text-white rounded-md transition-transform duration-300 hover:scale-105">
                <NotebookText /> Download Resume
              </Button>
            </div>
            <div className="flex space-x-4 mt-6">
              {[
                {
                  href: "https://github.com/Abhay-Pratap-Singh01",
                  icon: <FaGithub className="w-5 h-5" />,
                  label: "GitHub",
                  friction: 35,
                },
                {
                  href: "https://www.linkedin.com/in/abhaypratapsingh62/",
                  icon: <FaLinkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                  friction: 30,
                },
                {
                  href: "mailto:abhaypratapsingh62@gmail.com",
                  icon: <MdEmail className="w-5 h-5" />,
                  label: "Email",
                  friction: 25,
                },
              ].map((link, index) => (
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={true}
                  config={{ tension: 80, friction: link.friction }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  key={index}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    aria-label={link.label}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.icon}
                  </Link>
                </AnimatedContent>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>
      <section className="bg-[#0d1425] py-16">
        <div className="container mx-auto px-4">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 30 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Quick Facts <span className="text-purple-400"> About Me</span>
            </h2>
          </AnimatedContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-white">
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
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-400 p-3 rounded-lg mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">CSE Student</h3>
                <p className="text-sm text-gray-300">
                  Building React and serverless applications with practical
                  AI-powered features
                </p>
              </div>
            </AnimatedContent>
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
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-400 p-3 rounded-lg mb-4">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">Python Intern</h3>
                <p className="text-sm text-gray-300">
                  Completed internship at Placify Technologies with hands-on
                  scripting and debugging experience
                </p>
              </div>
            </AnimatedContent>
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
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-400 p-3 rounded-lg mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">Project Builder</h3>
                <p className="text-sm text-gray-300">
                  Developed LOSTit, VeriScan, and AI system analysis projects
                  using modern web and cloud tools
                </p>
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 30 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-400 p-3 rounded-lg mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">Cloud & Serverless</h3>
                <p className="text-sm text-gray-300">
                  Hands-on with AWS Lambda, API Gateway, and event-driven
                  architecture for scalable systems
                </p>
              </div>
            </AnimatedContent>
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
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-400 p-3 rounded-lg mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">Certified Learner</h3>
                <p className="text-sm text-gray-300">
                  Earned certifications in AWS Cloud Foundations, OCI
                  Foundations, AI Foundations, and Data Security
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>
      <section>
        <SkillsExpertise />
      </section>
      <section className="">
        <ApprochPage />
      </section>
      <section>
        <FeaturedProjects />
      </section>
      <section>
        <AchievementsSection />
      </section>
      <section>
        <PortfolioJourney />
      </section>
      <section>
        <FeaturedResources />
      </section>
      <section>
        <ContactPage />
      </section>
    </div>
  );
}
