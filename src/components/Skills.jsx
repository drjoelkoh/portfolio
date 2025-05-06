import React from "react";
import Slider from "react-slick";
import { FaReact, FaPython, FaJsSquare, FaHtml5, FaCuttlefish, FaJava, FaDocker, FaCode } from "react-icons/fa";
import { SiTensorflow, SiKubernetes, SiMysql, SiMongodb } from "react-icons/si";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
    const settings = {
        dots: false,
        arrows: false, // Hides the prev/next arrows
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Adjust depending on how many logos you want shown at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 640,
            settings: { slidesToShow: 2 },
          },
        ],
      };
      

  const skills = [
    { name: "React", icon: <FaReact size={100} className="text-cyan-400" /> },
    { name: "C", icon: <FaCuttlefish size={100} className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJsSquare size={100} className="text-yellow-400" /> },
    { name: "Python", icon: <FaPython size={100} className="text-yellow-300" /> },
    { name: "TensorFlow", icon: <SiTensorflow size={100} className="text-orange-500" /> },
    { name: "HTML", icon: <FaHtml5 size={100} className="text-orange-600" /> },
    { name: "Java", icon: <FaJava size={100} className="text-red-600" /> },
    { name: "C#", icon: <FaCode size={100} className="text-purple-400" /> }, // fallback
    { name: "Docker", icon: <FaDocker size={100} className="text-blue-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes size={100} className="text-blue-300" /> },
    { name: "MySQL", icon: <SiMysql size={100} className="text-blue-500" /> },
    { name: "NoSQL", icon: <SiMongodb size={100} className="text-green-500" /> },
  ];

  return (
    <section id="skills" className="w-full py-20 bg-black text-white">
    <div className="w-full bg-zinc-950 rounded-3xl shadow-lg shadow-zinc-800/50 px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="max-w-7xl mx-auto">
      <Slider {...settings}>
        {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
            {/* Directly render the JSX icon */}
            <div className="w-full flex justify-center">
                {skill.icon}
            </div>
            <p className="text-white mt-2">{skill.name}</p>
            </div>
            
        ))}
        </Slider>
      </div>
      </div>
    </section>
  );
};

export default Skills;

