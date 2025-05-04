import React from 'react';

const projects = [
  {
    title: 'LLM Webscraper',
    description: 'Web scraping tool using LLMs to extract data from websites.',
    link: 'https://github.com/yourusername/llm-webscraper',
  },
  {
    title: 'MRT Face Recognition Gantry',
    description: 'Facial recognition system for MRT gantry entry.',
    link: '',
  },
  {
    title: 'Asset Sentiment Analysis',
    description: 'Uses NLP and scraping to analyze asset sentiment.',
    link: 'https://github.com/yourusername/asset-sentiment',
  },
  // Add more projects here
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
              <p className="text-red-500 font-semibold">Project unavailable</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
