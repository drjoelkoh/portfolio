import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Make sure you have react-icons installed
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 bg-black text-white"
    >
      <button className="mb-4 px-4 py-1 border border-purple-500 text-xl rounded-full text-purple-400 hover:bg-purple-500 hover:text-black transition">
        Welcome to my Portfolio
      </button>

      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hello I am <span className="text-white">Joel Koh</span>
      </h1>
      
      <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-6 h-[60px]">
        <TypeAnimation
          sequence={[
            "Aspiring IT Consultant",
            1500,
            "Software Developer",
            1500,
            "Tech Project Manager",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="max-w-2xl text-lg text-gray-300 mb-2">
      I am a Computing Science student specializing Internet of Things at Singapore Institute of Technology with a joint degree at University of Glasgow. I am passionate about leveraging technology and effective project management to drive innovation, optimize system efficiency, and deliver impactful solutions in real-world applications. 
      </p>
      <p className="max-w-2xl text-lg text-gray-300 mb-2"> 
      During the journey of my degree studies, I have greatly enhanced proficiency in the various programming languages, software engineering skills and developed the ability to effectively manage a team by organizing tasks and ensuring timely delivery of project milestones. With my diverse experience in software development, AI-driven solutions, and leadership, I am particularly interested in project management, where I can oversee the successful execution of technology-driven initiatives. I enjoy coordinating teams, organizing tasks, and ensuring timely delivery of project milestones.
      </p>
      <p className="max-w-2xl text-lg text-gray-300 mb-8"> 
      This portfolio showcases some of my work, highlighting my dedication to learning and growing as a computer scientist.
      </p>

      <a
        href="mailto:joel.kohjing@gmail.com"
        className="group flex items-center gap-3 text-pink-500 text-xl font-bold transition-transform"
      >
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          Let's Connect
        </span>
        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </section>
  );
};

export default Hero;
