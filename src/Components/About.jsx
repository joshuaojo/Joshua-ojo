import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="md:px-[70px] md:pt-12 pt-10 px-5">
      {/* Responsive Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 lg:gap-0 items-start">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/about.avif"
            alt="About"
            className="w-full max-w-[613px] h-auto lg:h-[681px] object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:pl-10 pt-5 lg:pt-3">
          <p className="font-on text-3xl sm:text-4xl md:text-5xl">Hi, I’m Joshua</p>

          <p className="font-on text-Richblack pt-5 leading-loose max-w-3xl text-sm sm:text-base">
            I'm a FullStack Developer &amp; UI/UX Designer passionate about crafting
            seamless digital experiences and minimalistic designs. I believe that
            great designs happen by constantly evolving and learning, and being
            ready to adapt to any changes.
          </p>

          <p className="font-on text-Richblack pt-5 leading-loose max-w-3xl text-sm sm:text-base">
            I am a passionate FullStack developer and UI/UX designer with
            experience working with companies like{" "}
            <span className="font-semibold">Zortcloud</span>,{" "}
            <span className="font-semibold">Nuvo AI</span>,{" "}
            <span className="font-semibold">PriceWise</span>, and{" "}
            <span className="font-semibold">WorkBeta</span>, where I’ve designed
            and developed intuitive, user-centered digital experiences.
          </p>

          <p className="font-on text-Richblack pt-5 leading-loose max-w-3xl text-sm sm:text-base">
            Whether it’s building sleek, high-performance websites or designing
            intuitive interfaces, I focus on creating products that look amazing
            and feel effortless to use. With a strong foundation in modern web
            technologies and a keen eye for design, I specialize in building
            accessible and visually appealing interfaces. Have a project in mind?
            Let’s talk—{" "}
            <span className="text-blue-500 underline cursor-pointer">
              drop me a message
            </span>{" "}
            and let’s make it happen!
          </p>

          {/* Tools */}
          <div className="pt-5 space-y-2">
            <p className="font-on text-Richblack">Here are the tools I use:</p>
            <p className="font-on text-Richblack">Design — Figma</p>
            <p className="font-on text-Richblack">Web — HTML, CSS, JavaScript, React, Node.js</p>
            <p className="font-on text-Richblack">App — Flutter</p>
          </div>

          {/* Contact */}
          <p className="font-on text-Richblack pt-5">Let’s connect!</p>
          <p className="font-on text-blue-500 text-lg sm:text-xl break-words">
            ojojoshua123009@gmail.com
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
