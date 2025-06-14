"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlitchLogo from '../components/GlitchLogo';
import Footer from '../components/Footer';
import Menu from '../components/Menu';


const Navlinks = ({ isComplete }) => {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isComplete) setShowNav(true);
  }, [isComplete]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showNav && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed top-0 left-0 w-full z-[999999] transition-all duration-300 ${
            scrolled
              ? "bg-black/70  backdrop-blur-sm shadow-md"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-screen-xl overflow-x-hidden mx-auto flex items-center justify-between px-4 md:px-6 h-[80px]">
            <GlitchLogo />

            <div className="flex items-center gap-4">
              <Cart />
              <button
                onClick={() => setMenuOpen(true)}
                className="text-white px-4 py-2 font-semibold text-base md:text-lg border border-white rounded-xl hover:bg-white hover:text-black transition"
              >
                Menu
              </button>
            </div>
          </div>
        </motion.nav>
      )}

      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navlinks;
