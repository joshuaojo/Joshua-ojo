import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const boxRefs = useRef([]);
  const containerRef = useRef(null);

  const projects = [
    {
      title: "Cineverse",
      desc: "A modern movie streaming platform with sleek UI and real-time API integration.",
      img: "Cineverse.avif",
      link: "https://cineverse-eta-seven.vercel.app/login", 
    },
    {
      title: "Zortcloud",
      desc: "Zortcloud makes business simpler with cloud tools for CRM, sales, hospitals, and schools all in one platform.",
      img: "Zortcloud.avif",
      link: "https://zortcloud.com",
    },
    {
      title: "Nyla Ai",
      desc: "Africa's AI-powered Health Companion.",
      img: "Nyla.avif",
      link: "https://nyla.africa",
    },
    {
      title: "WorkBeta",
      desc: "Handyman platform .",
      img: "wb.avif",
      link: "https://workbeta.com",
    },
    {
      title: "Travel App",
      desc: "A mobile-first app design for booking trips, flights, and hotels.",
      img: "Cineverse.png",
      link: "https://example.com/travel-app",
    },
    {
      title: "Food Delivery Platform",
      desc: "End-to-end solution for browsing restaurants and tracking orders live.",
      img: "Cineverse.png",
      link: "https://example.com/food-delivery",
    },
    {
      title: "AI SaaS Platform",
      desc: "Integrated AI-driven dashboards for analytics and automation.",
      img: "Cineverse.png",
      link: "https://example.com/ai-saas",
    },
    {
      title: "Healthcare Portal",
      desc: "Patient management system with appointment booking and secure records.",
      img: "Cineverse.png",
      link: "https://example.com/healthcare",
    },
  ];

  
  useEffect(() => {
    boxRefs.current.forEach((box, i) => {
      if (box) {
        gsap.fromTo(
          box,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: box,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="md:px-[70px] pt-[200px]">
      <h1 className="text-4xl md:text-5xl font-on text-center text-Richblack">
        My Projects
      </h1>

     
      <div
        ref={containerRef}
        className="flex flex-col gap-16 pt-24"
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (boxRefs.current[index] = el)}
            className="rounded-xl overflow-hidden shadow-lg bg-white transition-transform hover:scale-105"
          >
            {/* Image Section */}
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[637px] overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="px-4 py-3">
              <h2 className="text-xl font-bold text-Richblack">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600">{project.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Project;
