import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Animate on menu open
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      });
    }
  }, [menuOpen]);

  return (
    <nav className="px-6 py-6 sm:px-10 md:px-[60px] select-none flex items-center justify-between bg-white relative">
  
      <Link to="/" className="cursor-pointer">
        <p className="font-Basement font-extrabold text-xl text-Richblack">_OJ</p>
      </Link>

    
      <div className="hidden md:flex gap-[40px] items-center">
        <Link to="/Project" className="cursor-pointer hover:underline text-[12px] font-on">Projcets</Link>
        <Link to="/About" className="cursor-pointer hover:underline text-[12px] font-on">About</Link>
        <a
          href="/OJO.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-[12px] font-on"
        >
          Résumé
        </a>
      </div>

      {/* Hamburger */}
     <button
  className="md:hidden"
  onClick={() => {
    gsap.fromTo(
      '#hamburger-icon',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
    );
    setMenuOpen((prev) => !prev);
  }}
  aria-label="Toggle menu"
>
  <span id="hamburger-icon">
    {menuOpen ? <X size={24} /> : <Menu size={24} />}
  </span>
</button>


      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute top-[70px] left-0 w-full h-screen bg-white shadow-lg flex-col items-center justify-center px-6 gap-4 md:hidden z-50 ${
          menuOpen ? 'flex' : 'hidden'
        }`}
      >
        <Link to="/Project" onClick={() => setMenuOpen(false)} className="text-[14px] font-on">Projcets</Link>
        <Link to="/About" onClick={() => setMenuOpen(false)} className="text-[14px] font-on">About</Link>
        <a
          href="https://your-resume-link.com/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] font-on"
          onClick={() => setMenuOpen(false)}
        >
          Résumé
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
