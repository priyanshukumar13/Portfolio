import { Code, Server, Database, Globe, Laptop } from "lucide-react"
import Link from "next/link"

// Using the same AnimatedContent component from your original code
const AnimatedContent = ({
  children,
  distance = 150,
  direction = "vertical",
  reverse = false,
  config = { tension: 80, friction: 20 },
  initialOpacity = 0.2,
  animateOpacity = true,
  scale = 1.1,
  threshold = 0.2,
}) => {
  return <div className="transition-all duration-700 ease-out">{children}</div>
}

export default function InternshipTimeline() {
  const internshipItems = [
    // {
    //   icon: <Code className="w-9 h-9" />,
    //   company: "TechStart Solutions",
    //   period: "Jun 2023 - Aug 2023",
    //   role: "Frontend Development Intern",
    //   description:
    //     "Worked on developing responsive user interfaces using React and Next.js for client projects, focusing on performance optimization and accessibility.",
    //   achievements: [
    //     "Implemented 5 new features for the company's main product",
    //     "Reduced load time by 30% through code optimization",
    //     "Created reusable component library used across multiple projects",
    //   ],
    //   website: "#",
    //   technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    // },
    // {
    //   icon: <Server className="w-9 h-9" />,
    //   company: "CloudNative Systems",
    //   period: "Jan 2023 - Apr 2023",
    //   role: "Backend Engineering Intern",
    //   description:
    //     "Assisted in developing and maintaining RESTful APIs and microservices architecture for a cloud-based platform serving enterprise clients.",
    //   achievements: [
    //     "Developed 3 new API endpoints with comprehensive documentation",
    //     "Implemented caching strategy that improved response times by 40%",
    //     "Wrote unit and integration tests achieving 90% code coverage",
    //   ],
    //   website: "#",
    //   technologies: ["Node.js", "Express", "MongoDB", "Docker"],
    // },
    // {
    //   icon: <Database className="w-9 h-9" />,
    //   company: "DataViz Analytics",
    //   period: "Sep 2022 - Dec 2022",
    //   role: "Data Engineering Intern",
    //   description:
    //     "Collaborated with the data team to build ETL pipelines and create interactive dashboards for business intelligence and analytics.",
    //   achievements: [
    //     "Designed data pipeline processing over 1M records daily",
    //     "Created 5 interactive dashboards for executive decision-making",
    //     "Optimized SQL queries reducing execution time by 50%",
    //   ],
    //   website: "#",
    //   technologies: ["Python", "SQL", "Tableau", "AWS"],
    // },
    // {
    //   icon: <Globe className="w-9 h-9" />,
    //   company: "WebSphere Innovations",
    //   period: "May 2022 - Aug 2022",
    //   role: "Full Stack Development Intern",
    //   description:
    //     "Contributed to the development of a web application for small businesses, working across the entire stack from database to frontend.",
    //   achievements: [
    //     "Implemented user authentication and authorization system",
    //     "Developed responsive UI components following design specifications",
    //     "Participated in daily stand-ups and biweekly sprint planning",
    //   ],
    //   website: "#",
    //   technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    // },
    // {
    //   icon: <Laptop className="w-9 h-9" />,
    //   company: "InnoTech Startups",
    //   period: "Jan 2022 - Apr 2022",
    //   role: "UI/UX Development Intern",
    //   description:
    //     "Worked closely with designers to implement user interfaces and improve user experience for a SaaS product in the education sector.",
    //   achievements: [
    //     "Redesigned key user flows increasing conversion rate by 25%",
    //     "Created interactive prototypes for user testing",
    //     "Implemented design system ensuring consistent UI across platform",
    //   ],
    //   website: "#",
    //   technologies: ["Figma", "HTML/CSS", "JavaScript", "React"],
    // },
  ]

  return (
    <div className="min-h-screen bg-[#0a101f] text-slate-200 py-12 pr-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mt-10 pl-4 mb-16">
          <h1 className="text-4xl font-bold mb-2 text-purple-400">Internship Experience</h1>
          <p className="text-slate-400">
            A timeline of my internship journey, showcasing my professional growth and technical skills development.
          </p>
        </div>

        {
            internshipItems.length === 0 && (
                <div className="text-center py-16">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#2a3349] flex items-center justify-center mb-4">
                    <Code className="text-gray-400" size={24} />
                </div>
                <h3 className="text-xl mb-2 text-purple-400 font-bold">Placify Python Intern</h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  
                </p>
                </div>
            )
        }

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-purple-600/20" />

          <div className="space-y-16">
            {internshipItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute left-5 md:left-1/2 top-1/2 -translate-x-1/2 p-5 rounded-full flex justify-center items-center bg-purple-500/50">
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500" />
                </div>
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
                  <div
                    className={`transition-transform hover:scale-105 duration-300
                      ${index % 2 === 0 ? "ml-11" : " ml-11 md:ml-0"} 
                      ${index % 2 === 0 ? "md:ml-auto " : "md:mr-auto"} 
                      md:w-[calc(50%-40px)] p-6 rounded-lg 
                      bg-slate-800/50
                    `}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg text-purple-500">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.company}</h3>
                        <div className="text-sm text-slate-400">
                          {item.period} | {item.role}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4">{item.description}</p>

                    {item.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                        <ul className={`space-y-1 ${index % 2 === 0 ? "md:pl-0" : ""}`}>
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-slate-400">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="text-xs bg-purple-900/40 text-purple-300 px-2 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={item.website}
                      className="inline-block text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Visit Website
                    </Link>
                  </div>
                </AnimatedContent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Internship Experience",
  description: "A timeline of my internship journey and professional growth",
}

