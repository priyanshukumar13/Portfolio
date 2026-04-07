import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  BookOpen,
  Code,
  ShieldCheck,
  ExternalLink,
  FileText,
  Globe,
  Laptop,
  Library,
  Video,
  User,
  Lightbulb,
  Briefcase,
  Hammer,
  Server,
  Code2,
  Trophy,
  Braces,
} from "lucide-react";
import AnimatedContent from "@/app/animations/AnimatedContent";
import Link from "next/link";
const githubRepos = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    description:
      "A comprehensive repository of solved problems and notes related to Data Structures and Algorithms. Ideal for interview prep and competitive programming.",
    link: "https://github.com/Abhay-Pratap-Singh01/AI-Powered-Performance-Analyzer-for-OS-Processes-main",
    icon: <Code className="h-5 w-5" />,
    author: "Abhay Pratap Singh",
    highlyRecommended: false,
  },
  {
    id: 2,
    title: "Database Management System (DBMS)",
    description:
      "Resources and notes for understanding core concepts of DBMS including ER diagrams, normalization, SQL queries, and indexing strategies.",
    link: "https://github.com/Abhay-Pratap-Singh01/LOSTit",
    icon: <Library className="h-5 w-5" />,
    author: "Abhay Pratap Singh",
    highlyRecommended: false,
  },
  {
    id: 3,
    title: "Cybersecurity Essentials",
    description:
      "Learn the fundamentals of cybersecurity through curated notes, tools, and labs covering topics such as networking, cryptography, and ethical hacking.",
    link: "https://github.com/Abhay-Pratap-Singh01/Billmate",
    icon: <ShieldCheck className="h-5 w-5" />,
    author: "Abhay Pratap Singh",
    highlyRecommended: false,
  },
  {
    id: 4,
    title: "Developer Portfolios",
    description:
      "A curated list of developer portfolios for your inspiration. Explore examples to help you build or enhance your own portfolio.",
    link: "https://github.com/emmabostian/developer-portfolios",
    icon: <User className="h-5 w-5" />,
    author: "Emma Bostian",
    highlyRecommended: false,
  },
  {
    id: 5,
    title: "Skills for Hackathon",
    description:
      "Comprehensive guide offering insights and resources for both beginners and experienced participants in hackathons.",
    link: "https://github.com/nishant-Tiwari24/skills-for-hackathon",
    icon: <Lightbulb className="h-5 w-5" />,
    author: "Nishant Tiwari",
    highlyRecommended: false,
  },
  {
    id: 6,
    title: "2025 SWE College Jobs",
    description:
      "A comprehensive list of Software Engineering internships and new grad positions for college students, updated regularly.",
    link: "https://github.com/speedyapply/2025-SWE-College-Jobs",
    icon: <Briefcase className="h-5 w-5" />,
    author: "Speedy Apply",
    highlyRecommended: false,
  },
  {
    id: 7,
    title: "Build Your Own X",
    description:
      "Master programming by building real projects from scratch—databases, interpreters, Docker, and more. A hands-on way to learn deeply.",
    link: "https://github.com/codecrafters-io/build-your-own-x",
    icon: <Hammer className="h-5 w-5" />,
    author: "CodeCrafters",
    highlyRecommended: true,
  },
  {
    id: 8,
    title: "DevOps Bootcamp",
    description:
      "Full DevOps curriculum by Kunal Kushwaha. Includes projects, assignments, and notes to master DevOps tools and pipelines.",
    link: "https://github.com/kunal-kushwaha/DevOps-Bootcamp",
    icon: <Server className="h-5 w-5" />,
    author: "Kunal Kushwaha",
    highlyRecommended: true,
  },
  {
    id: 9,
    title: "DSA Bootcamp Java",
    description:
      "Java DSA bootcamp course with structured learning, problem sets, and videos. Perfect for beginner to intermediate level.",
    link: "https://github.com/kunal-kushwaha/DSA-Bootcamp-Java",
    icon: <Code2 className="h-5 w-5" />,
    author: "Kunal Kushwaha",
    highlyRecommended: true,
  },
  {
    id: 10,
    title: "Competitive Programming Resources",
    description:
      "All-in-one repo for CP including playlists, notes, and practice problems. Great for contest prep.",
    link: "https://github.com/kunal-kushwaha/Competitive-Programming-Resources",
    icon: <Trophy className="h-5 w-5" />,
    author: "Kunal Kushwaha",
    highlyRecommended: false,
  },
  {
    id: 11,
    title: "Python for Algorithms, Data Structures, and Interviews",
    description:
      "Hands-on repo from the Udemy course covering Python fundamentals for technical interviews.",
    link: "https://github.com/jmportilla/Python-for-Algorithms--Data-Structures--and-Interviews",
    icon: <Braces className="h-5 w-5" />,
    author: "Jose Portilla",
    highlyRecommended: false,
  },
  {
    id: 12,
    title: "Sigma Web Dev Course",
    description:
      "CodeWithHarry's Sigma course for mastering frontend and backend web dev. Beginner-friendly and project-driven.",
    link: "https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",
    icon: <Globe className="h-5 w-5" />,
    author: "CodeWithHarry",
    highlyRecommended: false,
  },
];

const videos = [
  {
    id: 13,
    title: "Sigma Web Development Course by CodeWithHarry",
    description:
      "A complete beginner-to-advanced web development series. It covers HTML, CSS, JS, Bootstrap, React, Node.js, and more with real-world projects.",
    link: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
    icon: <Video className="h-5 w-5" />,
  },
  {
    id: 14,
    title: "DSA in Java by Kunal Kushwaha",
    description:
      "Learn Data Structures and Algorithms in Java with hands-on coding, explanations, and visualizations. Great for interview prep.",
    link: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
    icon: <Video className="h-5 w-5" />,
  },
  {
    id: 15,
    title: "DSA in C++ by Take U Forward (Striver)",
    description:
      "Striver's A2Z DSA Sheet covered in-depth with C++ examples and clear explanations. Perfect for placements and mastering DSA.",
    link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
    icon: <Video className="h-5 w-5" />,
  },
  {
    id: 16,
    title: "React 19 Full Course by Thapa Technical",
    description:
      "In-depth full course on React v19 from basics to advanced concepts including hooks, routing, and projects.",
    link: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp1Rab71vx2zMF6qpwGDB2Z1",
    icon: <Video className="h-5 w-5" />,
  },
  {
    id: 17,
    title: "DevOps Bootcamp by Kunal Kushwaha",
    description:
      "From Git and Linux to Docker, Kubernetes, and CI/CD, this course covers everything needed to get started with DevOps.",
    link: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak",
    icon: <Video className="h-5 w-5" />,
  },
  {
    id: 18,
    title: "Algorithms by Abdul Bari",
    description:
      "Highly detailed and mathematically clear explanations of classical algorithms and data structures.",
    link: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
    icon: <Video className="h-5 w-5" />,
  },
  {
    id: 19,
    title: "Complete Backend Course by Sheryians Coding School",
    description:
      "End-to-end backend development covering Node.js, Express, MongoDB, and more with real-world use cases.",
    link: "https://www.sheryians.com/courses/courses-details/Back-End%20Domination%3A%20Create%20Efficient%20Back-End.",
    icon: <Video className="h-5 w-5" />,
  },
];

const articles = [
  {
    id: 4,
    title: "Modern JavaScript Explained For Dinosaurs",
    description:
      "Understanding the evolution of JavaScript ecosystem and modern tooling. This article walks through the history of JavaScript development practices, explaining how we arrived at today's complex ecosystem of bundlers, transpilers, and package managers.",
    link: "https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "A Complete Guide to Flexbox",
    description:
      "Everything you need to know about CSS Flexbox layout. This comprehensive guide by CSS-Tricks explains all Flexbox properties with visual examples, making it the go-to reference for creating flexible, responsive layouts.",
    link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: 6,
    title: "React as a UI Runtime",
    description:
      "Deep dive into React's architecture by Dan Abramov. This article explores the internal mechanics of React, explaining concepts like reconciliation, fibers, and the rendering process that make React's declarative programming model possible.",
    link: "https://overreacted.io/react-as-a-ui-runtime/",
    icon: <FileText className="h-5 w-5" />,
  },
];

const platforms = [
  {
    id: 13,
    title: "freeCodeCamp Learning Platform",
    description:
      "Learn to code with free interactive lessons and earn certifications. This platform offers thousands of hours of structured curriculum covering web development, data science, and more, all completely free and accessible to anyone.",
    link: "https://www.freecodecamp.org/",
    icon: <Laptop className="h-5 w-5" />,
  },
  {
    id: 14,
    title: "Codecademy",
    description:
      "Interactive coding lessons with immediate feedback. Codecademy's learn-by-doing approach lets you write code directly in the browser with real-time feedback, making it ideal for beginners who want hands-on practice from day one.",
    link: "https://www.codecademy.com/",
    icon: <Laptop className="h-5 w-5" />,
  },
  {
    id: 15,
    title: "Frontend Mentor",
    description:
      "Improve your front-end skills by building real projects. This platform provides professional designs for you to implement, bridging the gap between tutorials and real-world development by focusing on practical challenges with community feedback.",
    link: "https://www.frontendmentor.io/",
    icon: <Laptop className="h-5 w-5" />,
  },
];

// Calculate total resources
const totalResources =
  githubRepos.length + videos.length + articles.length + platforms.length;

export default function ModernLearningResources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a101f] to-[#0f172a] text-white py-12 px-4 md:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto pt-10">
        <div className="space-y-6 text-center mb-20">
          <h1 className="text-4xl font-bold text-center mb-1 text-white">
            Learning <span className="text-[#c27aff] relative">Resources</span>
          </h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg  leading-relaxed">
            A curated collection of the best resources to help you grow as a
            developer, organized by type for easier discovery
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <span className="inline-block px-5 py-2 bg-[#1a2035]/50 rounded-full text-sm font-medium text-[#c27aff] backdrop-blur-sm border border-[#c27aff]/20">
              {totalResources} Resources
            </span>
          </div>
        </div>

        {/* GitHub Repositories Section */}
        <section id="repos" className="mb-20">
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
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#1a2035] p-2.5 rounded-lg shadow-[0_0_15px_rgba(194,122,255,0.1)] text-[#c27aff]">
                <Code className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                GitHub{" "}
                <span className="text-[#c27aff] relative">Repositories</span>
              </h2>
            </div>
          </AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubRepos.map((resource) => (
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 40 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                key={resource.id}
                threshold={0.2}
              >
                <ResourceCard resource={resource} type="Repository" />
              </AnimatedContent>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section id="tutorials" className="mb-20">
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
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#1a2035] p-2.5 rounded-lg shadow-[0_0_15px_rgba(194,122,255,0.1)] text-[#c27aff]">
                <Video className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Youtube{" "}
                <span className="text-[#c27aff] relative">Tutorials</span>
              </h2>
            </div>
          </AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((resource) => (
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 40 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                key={resource.id}
                threshold={0.2}
              >
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  type="Video"
                />
              </AnimatedContent>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        {/* <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#1a2035] p-2.5 rounded-lg shadow-[0_0_15px_rgba(194,122,255,0.1)] text-[#c27aff]">
              <FileText className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                type="Article"
              />
            ))}
          </div>
        </section> */}

        {/* Learning Platforms Section */}
        {/* <section className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#1a2035] p-2.5 rounded-lg shadow-[0_0_15px_rgba(194,122,255,0.1)] text-[#c27aff]">
              <Laptop className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Learning{" "}
              <span className="text-[#c27aff] relative">Platforms</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                type="Platform"
              />
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
}

// Resource Card Component
function ResourceCard({ resource, type }) {
  return (
    <Link
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#c27aff]/10 to-[#c27aff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      <div className="bg-[#111627]/80  border border-[#c27aff]/10 rounded-xl p-6 h-full flex flex-col transition-transform duration-500 group-hover:border-[#c27aff]/30 group-hover:shadow-[0_0_25px_rgba(194,122,255,0.15)] group-hover:scale-105">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#1a2035] p-2.5 rounded-lg shadow-[0_0_15px_rgba(194,122,255,0.1)] text-[#c27aff]">
              {resource.icon}
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#c27aff]/10 text-[#c27aff]">
              {type}
            </span>
          </div>
          <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-[#c27aff] transition-colors duration-300" />
        </div>

        <h3 className="font-bold text-lg mb-3 group-hover:text-[#c27aff] transition-colors duration-300">
          {resource.title}
        </h3>

        <p className="text-gray-400 text-sm flex-grow leading-relaxed">
          {resource.description}
        </p>
        {type === "Repository" && (
          <div className="my-3 flex flex-col gap-2">
            <div>
              <Badge
                className={
                  "bg-purple-500/20 border-2 border-purple-400 text-white"
                }
              >
                Author
              </Badge>
              <span className="font-semibold text-sm">
                {" "}
                : {resource.isMe ? "Me" : resource.author}
              </span>
            </div>
            <span>
              {resource.highlyRecommended && (
                <Badge
                  className={
                    "bg-purple-500/20 border-2 border-purple-400 text-white"
                  }
                >
                  Highly Recommaded
                </Badge>
              )}
            </span>
          </div>
        )}
        <div className="mt-6 pt-4 border-t border-[#c27aff]/10 flex justify-between items-center">
          <span className="text-xs font-semibold text-gray-500">
            {new URL(resource.link).hostname.replace("www.", "")}
          </span>
          <span className="text-xs font-medium text-[#c27aff] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Explore <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
