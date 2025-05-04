import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const sections = ["home", "skills", "projects", "work"];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-end items-center gap-6 py-4 px-10 bg-black text-white">
      {/* Nav Links */}
      <ul className="flex items-center gap-8 text-lg font-light">
        {sections.map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-green-400 font-semibold"
            className="cursor-pointer transition hover:text-green-400"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </ScrollLink>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="flex items-center gap-4 ml-6">
        <a
          href="https://www.linkedin.com/in/jojokoh/"
          className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/drjoelkoh"
          className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/kjinxu"
          className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Contact Me Button */}
      <a
        href="mailto:joel.kohjing@gmail.com"
        className="ml-6 border border-white px-6 py-2 font-bold rounded transition hover:bg-white hover:text-black"
      >
        Contact me
      </a>
    </nav>
  );
};

export default Navbar;
