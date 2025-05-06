import React from 'react';

const projects = [
  {
    title: 'Web LMS',
    description: 'A web-based Learning Management System designed to support secondary school institutes in Singapore.',
    link: 'https://github.com/drjoelkoh/Web-Programming-LMS',
  },
  {
    title: 'Live Translation System',
    description: 'Collaborative project with Panasonic Industrial Devices Singapore Pte. Ltd. to transcript and translate speeches in an online meeting using pretrained AI models.',
    link: '',
  },
  {
    title: 'MRT Face Recognition Gantry ',
    description: 'Facial recognition system for MRT gantry entry.',
    link: 'https://github.com/drjoelkoh/Cloud-MRT-Face-Gantry-System',
  },
  {
    title: 'Online Bank System',
    description: 'An Object Oriented Programming development of a bank system.',
    link: 'https://github.com/drjoelkoh/Object-Oriented-Programming-Bank-System',
  },
  {
    title: 'DSA Airport System',
    description: 'Airport system that calculates shortest and cheapest routes using data structures and algorithms.',
    link: 'https://github.com/drjoelkoh/DSA-Airport-System',
  },
  {
    title: 'Diet Tracker',
    description: 'Development of an Android app that tracks and analyses calories and uses a food recognition AI model to identify food and calories.',
    link: 'https://github.com/drjoelkoh/DietTracker',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <h2 className="text-center text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-4">{proj.description}</p>
            {proj.link ? (
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block border px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                View More
              </a>
            ) : (
              <p className="text-red-500 font-semibold">Project is unavailable for viewing due to licensing</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
