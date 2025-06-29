"use client";
import React from "react";
import project from "../../assets/project.png";

const projects = [
  {
    title: "Lahore Urban Planning Data Analysis",
    image: project,
    tags: ["Lahore", "Urban Planning", "Data Digitization"],
    description:
      "Completed detailed analysis, digitization, and structuring of Lahore's urban planning data to support smart city decisions.",
  },
  {
    title: "Sargodha Business Units Digitization",
    image: project,
    tags: ["Sargodha", "Business", "Data Mapping"],
    description:
      "Digitized and categorized business units across Sargodha, including spatial data cleanup and classification.",
  },
  {
    title: "Lahore Industrial Units Analysis",
    image: project,
    tags: ["Lahore", "Industry", "GIS"],
    description:
      "Performed complete data extraction, validation, and geospatial mapping of Lahore's industrial units.",
  },
  {
    title: "Faisalabad Industrial Units Mapping",
    image: project,
    tags: ["Faisalabad", "Industrial Mapping", "GIS"],
    description:
      "Analyzed and digitized spatial data of Faisalabad's industrial sectors, improving visibility for infrastructure planning.",
  },
  {
    title: "Sargodha Road Network Digitization",
    image: project,
    tags: ["Sargodha", "Road Mapping", "Transport"],
    description:
      "Processed and digitized Sargodha's entire road network, enabling improved infrastructure insights.",
  },
  {
    title: "Lahore Road Infrastructure Mapping",
    image: project,
    tags: ["Lahore", "Transportation", "GIS"],
    description:
      "Conducted full-scale road data analysis and digitization for Lahore, optimizing road asset tracking and planning.",
  },
  {
    title: "More Projects Coming",
    image: "",
    tags: [],
    description:
      "We're continuously processing geospatial datasets and building valuable spatial intelligence for real-world use cases.",
    comingSoon: true,
  },
];

const ProjectCard = ({ title, image, tags, description, comingSoon }) => (
  <div className="mb-8 break-inside-avoid relative group transition-transform duration-300 hover:-translate-y-2 w-full max-w-sm">
    <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-secondary bg-background h-full hover:border-opacity-100 transition-all">
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 via-transparent to-transparent pointer-events-none"></div>
        </>
      ) : (
        <div className="h-56 w-full bg-background flex items-center justify-center border-b-2 border-secondary">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
        </div>
      )}

      {tags.length > 0 && (
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-white text-xs px-3 py-1 rounded-full shadow-md font-semibold bg-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="p-6 pt-16 flex flex-col relative z-10">
        <div className="absolute -top-6 left-6 w-12 h-1.5 rounded-full shadow-lg"></div>
        <h3 className="text-2xl font-bold mb-2 drop-shadow-md text-text-primary">
          {title}
        </h3>
        <p className="mb-6 text-base leading-relaxed text-accent-dark-brown">
          {description}
        </p>

        {comingSoon && (
          <div className="animate-pulse flex space-x-2 justify-center">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#6894ca" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#5b8d5a" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#6894ca" }}
            ></div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 w-full mx-auto bg-background" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
            Our Projects
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-accent-dark-brown">
            Innovative geospatial solutions and mapping projects delivered for
            various industries and use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
