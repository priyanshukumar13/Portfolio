import Image from "next/image";
import { Quote } from "lucide-react";
import SpotlightCard from "@/app/animations/SpotlightCard";
import AnimatedContent from "@/app/animations/AnimatedContent";

const testimonials = [
  // {
  //   name: "John Doe",
  //   title: "Senior Software Engineer",
  //   company: "Tech Innovations Inc.",
  //   image: "https://picsum.photos/200/300",
  //   quote: `Working with Atharva was an absolute game-changer. His technical expertise, combined with his problem-solving mindset, consistently delivered outstanding results. From optimizing backend processes to implementing scalable architectures, his ability to handle complex systems with precision is truly impressive. Atharva's proactive approach, coupled with his dedication to quality, made him an invaluable asset to our team. His attention to detail and ability to collaborate seamlessly with cross-functional teams ensured our project's success.`,
  // },
  // {
  //   name: "Emily Carter",
  //   title: "Product Manager",
  //   company: "NextGen Solutions",
  //   image: "https://picsum.photos/200/300",
  //   quote: `Atharva's professionalism and dedication to delivering exceptional results were evident throughout our collaboration. His in-depth knowledge of modern web technologies, coupled with his ability to implement creative solutions, elevated our project's functionality and user experience. Whether it was resolving complex bugs or optimizing performance, Atharva consistently went above and beyond to exceed expectations. His commitment to staying updated with industry trends makes him a valuable tech leader.`,
  // },
  // {
  //   name: "Michael Smith",
  //   title: "Full-Stack Developer",
  //   company: "CodeCrafters LLC",
  //   image: "https://picsum.photos/200/300",
  //   quote: `Atharva is an exceptional developer with a remarkable ability to deliver high-quality solutions under tight deadlines. His proficiency in front-end and back-end development, combined with his keen eye for design, resulted in a seamless and visually appealing product. His expertise in frameworks like React, Next.js, and Tailwind CSS enabled us to build dynamic and responsive interfaces with ease. Atharva's collaborative attitude and problem-solving skills make him a true team player.`,
  // },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#0c0e1a] text-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16 pt-10">
          <h1 className="text-4xl font-bold mb-4 text-white">
            What My{" "}
            <span className="text-purple-400">Clients & Colleagues</span> Say{" "}
            <span className="text-purple-400">?</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Read what my teammates and colleagues say about working with me.
          </p>
        </header>
        
        {testimonials.length === 0 && (
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 rounded-full bg-[#2a3349] flex items-center justify-center mb-4">
              <Quote className="text-gray-400" size={24} />
            </div>
            <h3 className="text-xl mb-2 text-purple-400 font-bold">No Testimonials yet..</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Stay tuned! I&apos;ll be sharing testimonials and feedback soon.
              Check back later.
            </p>
          </div>
        
        )}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={index % 2 !== 0 ? true : false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              key={index}
            >
              <div
                className={`grid md:grid-cols-5 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`md:col-span-1 ${
                    index % 2 === 0 ? "" : "md:order-2"
                  }`}
                >
                  <div className="aspect-square hover:scale-105 duration-300 transition-transform relative max-w-[200px] mx-auto md:mx-0 ">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={200}
                      height={200}
                      className="rounded-md object-cover transition-all duration-300"
                    />
                  </div>
                  <div className="text-center md:text-left mt-4">
                    <h3 className="font-bold text-xl text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    <p className="text-[#a855f7] text-sm font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Quote Section */}
                <SpotlightCard
                  className={`md:col-span-4 bg-[#131629] p-8 rounded-lg border border-gray-800 relative group hover:border-[#a855f7]/30 transition-all duration-300 ${
                    index % 2 === 0 ? "" : "md:order-1"
                  }`}
                  spotlightColor="rgba(138, 43, 226, 0.25)"
                >
                  <blockquote className="text-gray-300 italic">
                    {testimonial.quote}
                  </blockquote>
                </SpotlightCard>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </div>
  );
}
