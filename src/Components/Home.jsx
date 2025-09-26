import React, { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "./Footer";

const Home = () => {
  const firstBoxRef = useRef(null);
  const boxRefs = useRef([]);
  const [visibleBoxes, setVisibleBoxes] = useState([]);
  const [reset, setReset] = useState(false);

  // ✅ Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleBoxes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -150px 0px" } // 👈 stops first box from auto-showing on tablets
    );

    boxRefs.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      boxRefs.current.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, []);

  // ✅ Reset when user scrolls back to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setReset(true);
        setVisibleBoxes([]);
      } else {
        setReset(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll to projects
  const scrollToProjects = () => {
    if (firstBoxRef.current) {
      firstBoxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

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
      desc: "Handyman platform.",
      img: "wb.avif",
      link: "https://workbeta.com",
    },
  ];

  return (
    <div className="xl:px-[70px] px-0.5 md:px-[60px] select-none pt-[254px]">
      {/* Hero Section */}
      <div>
        <p className="font-on text-center text-Richblack">
          My name is Ojo Joshua and I’m a
        </p>

        <div className="text-center group">
          <p className="xl:text-8xl lg:text-6xl md:text-5xl text-4xl cursor-pointer font-on pt-2 text-toggle text-fill uiux">
            UI/UX designer
          </p>
          <p className="xl:text-8xl lg:text-6xl md:text-5xl text-4xl cursor-pointer font-on pt-5 text-toggle text-outline fullstack">
            & Full-Stack developer
          </p>
        </div>
      </div>

      {/* Scroll trigger */}
      <div
        onClick={scrollToProjects}
        className="flex flex-col items-center pt-[185px] cursor-pointer gap-2"
      >
        <p className="font-on text-center text-sm">Selected projects</p>
        <ChevronDown className="w-4 h-4 text-black" />
      </div>

      {/* Project Boxes (hidden until scroll) */}
      <div className="flex flex-col gap-16 w-full pt-24">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => {
              boxRefs.current[index] = el;
              if (index === 0) firstBoxRef.current = el;
            }}
            data-index={index}
            className={`block rounded-xl overflow-hidden transition-all duration-700 shadow-lg transform hover:-translate-y-2
              ${visibleBoxes.includes(String(index)) && !reset
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}
          >
            {/* Image Section */}
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[637px] overflow-hidden rounded-t-xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Text Section */}
            <div className="px-4 py-3 bg-white">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-Richblack">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {project.desc}
              </p>
            </div>
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
