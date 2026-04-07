import {
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import AnimatedContent from "../../animations/AnimatedContent";

export default function JourneyTimeline() {
  const timelineItems = [
    {
      icon: <Lightbulb className="w-9 h-9" />,
      company: "Placify Technologies",
      period: "June 2024 - July 2024",
      role: "Python Intern",
      description:
        "Completed internship training focused on Python programming, practical scripting, and structured problem solving.",
      achievements: [
        "Built mini scripts and automation tasks in Python",
        "Practiced debugging, error handling, and clean implementation",
      ],
      website: "#",
    },
      
    {
        icon: <GraduationCap className="w-9 h-9" />,
        company: "Lovely Professional University, Punjab",
        period: "2023 - Present",
        role: "B.Tech CSE Student",
        description:
          "Pursuing Computer Science and Engineering with focus on software development, cloud technologies, and AI-powered solutions.",
        achievements: [
          "Current CGPA: 6.14",
          "Built LOSTit, AI Performance Analyzer, and VeriScan projects",
        ],
        website: "https://www.lpu.in/",
        isEducation:true,
    },      
    // {
    //   icon: <Award className="w-9 h-9" />,
    //   company: "Competetive Exams",
    //   period: "2023",
    //   role: "MHCET , JEE , JEE Advanced",
    //   description:
    //     "Part of the TechStars Toronto Accelerator program, securing our first official funding for Speak AI.",
    //   achievements: [
    //     "Succesfull Qualify JEE MIANS with Impresive Percentile",
    //     "JEE Advanced",
    //     "Defined strategic planning and networking for future growth",
    //   ],
    //   website: "#",
    // },
   
    {
      icon: <GraduationCap className="w-9 h-9" />,
      company: "Army Public School, Jalandhar",
      period: "2022 - 2023",
      role: "Student",
      description:
        "Successfully completed higher secondary education.",
      achievements: [
        "Completed Class XII (Science) with 74.60%",
        // "In VII won the State Level Drawinf Competetions Splash 2017",
      ],
      website: "#",
      isEducation: true,
    },
    {
      icon: <GraduationCap className="w-9 h-9" />,
      company: "Army Public School, Jalandhar",
      period: "2021 - 2022",
      role: "Student",
      description: "Successfully completed secondary education.",
      achievements: [
        "Completed Class X (Science) with 92.60%",
        // "In VII won the State Level Drawinf Competetions Splash 2017",
      ],
      website: "#",
      isEducation: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a101f] text-slate-200 py-12 pr-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mt-10 pl-4 mb-16">
          <h1 className="text-4xl font-bold mb-2 text-purple-400">Journey</h1>
          <p className="text-slate-400">
            A timeline of my professional journey, highlighting key milestones
            and experiences.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-purple-600/20" />

          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className={`absolute left-5 md:left-1/2 top-1/2 -translate-x-1/2 p-5 rounded-full flex justify-center items-center ${
                    item.isEducation ? "bg-green-600/50" : "bg-purple-500/50"
                  }`}
                >
                  <div
                    className={`absolute left-5 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${
                      item.isEducation ? "bg-green-600" : "bg-purple-500"
                    }`}
                  />
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
          ${item.isEducation ? "bg-slate-600/50 " : "bg-slate-800/50 "}
        `}
                  >
                    <div className={`flex items-center gap-3 mb-4 `}>
                      <div
                        className={`p-2 rounded-lg ${
                          item.isEducation
                            ? " text-green-500"
                            : " text-purple-500"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3
                          className={
                            item.isEducation
                              ? "text-xl text-green-500 font-semibold"
                              : "text-xl font-semibold"
                          }
                        >
                          {item.company}
                        </h3>
                        <div
                          className={
                            item.isEducation
                              ? "text-sm text-green-500 font-medium"
                              : "text-sm text-slate-400"
                          }
                        >
                          {item.period} | {item.role}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4">{item.description}</p>

                    {item.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">
                          Key Achievements:
                        </h4>
                        <ul
                          className={`space-y-1 ${
                            index % 2 === 0 ? "md:pl-0" : ""
                          }`}
                        >
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-slate-400">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link
                      href={item.website}
                      className={`inline-block text-sm ${item.isEducation ?"text-green-400 hover:text-green-300":"text-purple-400 hover:text-purple-300"} transition-colors`}
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
  );
}

export const metadata = {
  title: "Priyanshu Kumar - Journey",
  description: "Journey Page of my Portfolio website",
};