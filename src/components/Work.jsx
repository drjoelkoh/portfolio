import React from 'react';

const workItems = [
  {
    title: "Diploma in Multimedia & Infocomm Technology",
    place: "Nanyang Polytechnic",
    date: "April 2021 - April 2021",
    description: "Web Design & Development | Open-Source Web Solutions Development | Cyber security essentials | Mobile App Development | Distributed System Development with Java EE"
  },
  {
    title: "IT Associate Intern Consultant",
    place: "Anacle Systems Pte Ltd",
    date: "August 2020 - February 2021",
    description: "Participated in the end-to-end software implementation lifecycle, including application testing, client onboarding, and post-deployment support. Collaborated with on-site and off-shore teams to troubleshoot issues, integrate tenant data, and ensure system stability and continuity."
  },
  {
    title: "Bachelor with Honours in Computing Science",
    place: "Singapore Institute of Technology | University of Glasgow",
    date: "August 2023 - Present",
    description: "Computer Organisation & Architecture | Database Systems | Data Structures & Algorithm | Cloud and Distributed Computing | Internet of Things: Protocols and Networks |  Data Analytics | Machine Learning"
  },
  {
    title: "Backend Developer for Live Translation System",
    place: "Singapore Institute of Technology",
    date: "September 2024 - March 2025",
    description: "Developed backend services for a real-time live translation system using pretrained AI models from GitHub and Hugging Face. Enabled automated transcription and multilingual translation of online meeting speeches for improved accessibility and communication."
  }

];

const Work = () => {
    return (
      <section id="work" className="py-20 m-0 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Work & Study</h2>
        <div className="max-w-5xl mx-auto space-y-8 px-6">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-neutral-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.place}</p>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default Work;