import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, Monitor, Repeat } from "lucide-react";
import Link from "next/link";
import AnimatedContent from "../animations/AnimatedContent";
import SpotlightCard from "../animations/SpotlightCard";

const resources = [
  {
    title: "Learning Resources",
    description:
      "A collection of articles and tutorials on various topics in technology.",
    icon: BookOpen,
    count: 15,
  },
  {
    title: "Webinars",
    description:
      "Webinars on technology, leadership, and personal growth on YouTube.",
    icon: Monitor,
    count: 10,
  },
];

export default function FeaturedResources() {
  return (
    <div className="bg-[#0a101f] rounded-lg text-white p-4 md:p-12">
      <div className="max-w-6xl mx-auto">
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
          <h2 className="text-4xl font-bold text-center mb-2">
            Featured <span className="text-purple-400">Resources</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Discover curated resources to enhance your productivity and
            professional growth.
          </p>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 50 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                key={idx}
              >
                <Link href={'/resources/learning-resources'}>
                <SpotlightCard
                  className="rounded-lg bg-gradient-to-br transition-transform duration-500 hover:scale-105 cursor-pointer from-[#0a101f] border-2 border-purple-400/40 to-[#131c35] p-6"
                  spotlightColor="rgba(138, 43, 226, 0.25)"
                >
                  <div className="  flex items-start gap-4">
                    <Icon className="text-purple-500 mt-1" size={24} />
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl text-purple-400 font-semibold">
                          {resource.title}
                        </h3>
                        <span className="text-sm text-gray-400">
                          {resource.count}{" "}
                          {resource.count === 1 ? "article" : "articles"}
                        </span>
                      </div>
                      <p className="text-gray-400">{resource.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
                </Link>
              </AnimatedContent>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/resources/learning-resources"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
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
              <Button
                className={
                  "bg-gradient-to-r transition-transform duration-300 hover:scale-105 from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 cursor-pointer text-white px-8 py-3 rounded-lg"
                }
              >
                View All Resources <ChevronRight className="ml-2" />
              </Button>
            </AnimatedContent>
          </Link>
        </div>
      </div>
    </div>
  );
}
