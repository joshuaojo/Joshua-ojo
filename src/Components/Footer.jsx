import React from "react";

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-20 pb-5">
      {/* Divider */}
      <div className="border-t border-gray-600 w-full"></div>

      {/* Quote */}
      <p className="cursor-pointer font-on pt-5 text-toggle text-outline fullstack text-center text-4xl md:text-6xl">
        Fueled by curiosity, driven by{" "}
        <span className="text-fill uiux text-Richblack">innovation</span>
      </p>

      {/* Footer Links */}
      <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Back to top */}
        <a
          href="#"
          onClick={scrollToTop}
          className="underline-offset-4 text-Richblack font-on hover:text-gray-300 transition text-center md:text-left"
        >
          Back to the top
        </a>

        {/* Social Links */}
        <div className="flex flex-wrap gap-6 justify-center">
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="font-on hover:text-blue-500 border-b cursor-pointer text-Richblack"
          >
            X
          </a>
          <a
            href="https://www.behance.net/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="font-on hover:text-blue-500 border-b cursor-pointer text-Richblack"
          >
            Behance
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-ojo-494a09244"
            target="_blank"
            rel="noopener noreferrer"
            className="font-on hover:text-blue-500 border-b cursor-pointer text-Richblack"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/joshuaojo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-on hover:text-blue-500 border-b cursor-pointer text-Richblack"
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="font-on text-Richblack">© Joshua</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
