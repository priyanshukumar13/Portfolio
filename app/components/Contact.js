"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import FAQSection from "./FAQ";
import { FaGithub } from "react-icons/fa";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import AnimatedContent from "../animations/AnimatedContent";
import { toast } from "sonner";
import SocialLinkGrid from "./SocialGrid";

export default function ContactPage() {
  const [isLoading, setisLoading] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setisLoading(true);
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
  
      const data = await res.json();
  
      if (data.error) {
        seterror(data.error);
        toast(data.error); // Show error toast
      } else {
        setname("");
        setemail("");
        setsubject("");
        setmessage("");
        toast("Message sent successfully!",{
          className: "bg-purple-400 text-[#0a101f]",
        }); // Show success toast
      }
  
    } catch (error) {
      console.error(error);
      seterror("An error occurred. Please try again later.");
      toast("An error occurred. Please try again later."); // Error toast
    } finally {
      setisLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-[#0a101f] text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
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
          <h1 className="text-4xl font-bold text-center mb-2 ">
            Get in <span className="text-purple-400"> Touch</span>
          </h1>
        </AnimatedContent>
        {/* <SocialLinkGrid/> */}
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
          <p className="text-center text-gray-300 font-medium  mb-12">
            Have a question or want to work together? I&apos;d love to hear from
            you.
          </p>
        </AnimatedContent>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-12">
            {/* Connect with Me */}
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
              <div>
                <h2 className="text-xl font-semibold mb-4 text-purple-400">
                  Connect with Me
                </h2>
                <div className="flex space-x-4 mt-6">
                  {[
                    {
                      href: "#",
                      icon: <FaGithub className="w-5 h-5" />,
                      label: "GitHub",
                      friction: 35,
                    },
                    {
                      href: "#",
                      icon: <FaTwitter className="w-5 h-5" />,
                      label: "Twitter",
                      friction: 30,
                    },
                    {
                      href: "#",
                      icon: <FaLinkedin className="w-5 h-5" />,
                      label: "LinkedIn",
                      friction: 25,
                    },
                    {
                      href: "#",
                      icon: <MdEmail className="w-5 h-5" />,
                      label: "Email",
                      friction: 20,
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
                        aria-label={link.label}
                        className="text-gray-400 hover:text-white transition"
                      >
                        {link.icon}
                      </Link>
                    </AnimatedContent>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-300 font-medium ">
                  Follow me on social media or send me an email.
                </p>
              </div>
            </AnimatedContent>
          </div>
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
            {/* Contact Form */}
            <div className="bg-[#0d1321] p-6 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label className="text-lg text-gray-300  font-medium ">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full px-4 py-2 bg-[#131720] border border-gray-700 text-white rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 font-medium ">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-1 w-full px-4 py-2 bg-[#131720] border border-gray-700 text-white rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 font-medium ">
                    Subject
                  </label>
                  <input
                    value={subject}
                    type="text"
                    onChange={(e) => setsubject(e.target.value)}
                    placeholder="What's this about?"
                    className="mt-1 w-full px-4 py-2 bg-[#131720] border border-gray-700 text-white rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 font-medium ">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    placeholder="Your message..."
                    className="mt-1 w-full px-4 py-2 bg-[#131720] border border-gray-700 text-white rounded-md focus:outline-none min-h-[150px]"
                  />
                </div>
                <Button
                  onClick={(e) => {
                    handleSubmit(e);
                    setisLoading(true);
                  }}
                  className="w-full bg-purple-400 hover:bg-purple-500"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </AnimatedContent>
        </div>

        <FAQSection />
      </div>
    </div>
  );
}
