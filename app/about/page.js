import { ChevronRight, Briefcase } from "lucide-react";
import Link from "next/link";

export default function AboutMeSection() {
  return (
    <div className="min-h-screen pt-20 bg-[#0a0e1a] text-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">About <span className="text-purple-400"> Me</span></h1>
          <p className="text-center max-w-2xl mx-auto">
            I&apos;m a passionate software developer and problem solver, always eager to build impactful solutions and contribute to the tech community.
          </p>
        </div>

        {/* Experience paragraphs */}
        <div className="space-y-6">
          <p className="leading-relaxed">
            I have a strong background in full-stack development, data structures, and algorithms. Over the years, I have honed my skills through competitive programming, open-source contributions, and real-world projects.
          </p>
          <p className="leading-relaxed">
            My expertise includes Java, JavaScript, React, Node.js, PHP, and SQL. I&apos;m passionate about solving real-world problems, as seen in my projects like Zero Hunger and ThirdEye. I&apos;m also an advocate for clean code, efficient algorithms, and scalable architectures.
          </p>
        </div>

        {/* Cards section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Professional Journey Card */}
          <div className="bg-[#131a2c] rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#1e2a47] p-2 rounded-md">
                <Briefcase className="text-blue-400 h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold">Professional Journey</h2>
            </div>
            <p className="text-gray-300 text-sm">
              Explore my career path, key milestones, and the experiences that shaped my professional growth.
            </p>
            <Link href="/about/journey" className="text-blue-400 flex items-center gap-1 text-sm ">
              View Journey <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-purple-400 rounded-lg p-8 text-center space-y-6">
          <h2 className="text-2xl font-bold">Let&apos;s Work Together</h2>
          <p className="max-w-2xl mx-auto">
            Whether you need technical leadership, consulting, or development expertise, I&apos;m here to help your team
            succeed.
          </p>
          <div>
            <button className="bg-white text-purple-900 font-bold px-6 py-2 rounded-md  hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

