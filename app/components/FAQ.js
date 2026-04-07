"use client";

import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import AnimatedContent from "../animations/AnimatedContent";

const faqData = new Map([
  [
    "General",
    [
      {
        q: "Are you available for hire?",
        a: "Yes, I am open to work opportunities. Feel free to reach out!",
      },
      {
        q: "Are you open to collaborations?",
        a: "Absolutely! I'm always open to interesting collaborations.",
      },
      // { q: "Do you offer free consultations?", a: "I offer a short free consultation. Contact me for details." },
    ],
  ],
  [
    "Services",
    [
      // { q: "Will you promote my product or service?", a: "I only promote products I genuinely believe in." },
      {
        q: "Do you provide learning materials or recommend resources ?",
        a: "Yes, I can share useful resources!",
      },
      // { q: "How soon can I expect a response?", a: "Typically within 24-48 hours." },
    ],
  ],
  //   [
  //     "Engagements",
  //     [
  //       { q: "Are you available for speaking engagements or workshops?", a: "Yes, feel free to reach out to discuss!" },
  //       { q: "Can I get feedback on my startup, product, or idea?", a: "Yes, I'm open to giving feedback." },
  //     ],
  //   ],
  [
    "Projects",
    [
      {
        q: "Where can I find examples of your previous work or projects?",
        a: "You can check my portfolio or GitHub.",
      },
      {
        q: "Can I propose a custom project or service?",
        a: "Yes, I'm open to custom project proposals.",
      },
      {
        q: "How can I stay updated on your latest projects or insights?",
        a: "Follow me on LinkedIn or my blog.",
      },
    ],
  ],
]);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0a101f] text-white py-16 px-6">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 60 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <h2 className="text-3xl font-bold text-center  mb-4">
          Frequently{" "}
          <span className="text-purple-400">Asked Get in Questions</span>
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Find answers to common questions about my services, collaborations,
          and how we can work together.
        </p>
      </AnimatedContent>
      <div className="max-w-4xl mx-auto">
        {[...faqData.entries()].map(([category, questions], categoryIndex) => (
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 60 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            key={categoryIndex}
          >
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {category}
              </h3>
              <div className="space-y-4">
                {questions.map((item, questionIndex) => {
                  const questionKey = `${categoryIndex}-${questionIndex}`;
                  return (
                    <div
                      key={questionKey}
                      className="border border-gray-700 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left bg-[#111827] hover:bg-[#1f2937] flex justify-between items-center"
                        onClick={() => toggleQuestion(questionKey)}
                      >
                        <span className="font-semibold">{item.q}</span>
                        {openIndex === questionKey ? (
                          <ChevronUp className="w-5 h-5 text-purple-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-purple-400" />
                        )}
                      </button>
                      {openIndex === questionKey && (
                        <div className="px-6 py-4 bg-[#1f2937]">
                          <p className="text-gray-300">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
