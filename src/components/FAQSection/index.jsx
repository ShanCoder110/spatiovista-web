"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How accurate are your drone surveys?",
    answer:
      "Our AI-powered drone surveys achieve 95-98% accuracy rates, significantly higher than traditional methods. We use advanced photogrammetry and LiDAR technology for precise measurements.",
  },
  {
    question: "How long does a typical survey take?",
    answer:
      "Most surveys are completed in 2-3 days, compared to weeks with traditional methods. Data processing and analysis are delivered in real-time through our AI platform.",
  },
  {
    question: "What types of terrain can you survey?",
    answer:
      "Our drones can access virtually any terrain including mountainous areas, wetlands, forests, and urban environments that are difficult or dangerous for traditional survey teams.",
  },
  {
    question: "Do you provide ongoing support after the survey?",
    answer:
      "Yes! We offer comprehensive data analysis, regular updates, and technical support. Our platform provides continuous monitoring and insights for your projects.",
  },
  {
    question: "What data formats do you deliver?",
    answer:
      "We provide data in multiple formats including GIS-compatible files, 3D models, orthomosaic maps, point clouds, and custom reports tailored to your specific needs.",
  },
  {
    question: "How much does a drone survey cost?",
    answer:
      "Our surveys typically cost 70% less than traditional methods, ranging from $500-$2,000 depending on scope and complexity. Contact us for a custom quote based on your project requirements.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full flex flex-col items-center py-10 px-4 bg-background"
      id="faq"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-2">
        Frequently Asked <span className="text-secondary">Questions</span>
      </h2>
      <p className="text-lg md:text-xl text-[color:var(--color-accent-dark-brown)] text-center mb-12 max-w-2xl mx-auto">
        Everything you need to know about our AI-powered drone surveying
        technology and process.
      </p>

      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-background/90 border border-[color:var(--color-accent-blue)] rounded-2xl shadow-lg overflow-hidden transition-all backdrop-blur-md"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary group hover:bg-background/50 transition-colors"
            >
              <span className="text-lg font-semibold text-text-secondary">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-secondary transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-6 text-[color:var(--color-accent-dark-brown)] text-base transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100 pb-5"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
