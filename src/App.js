import logo from './logo.svg';
import './App.css';

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20 scroll-smooth overflow-x-hidden">
        <Hero /> 
        <Skills />
        <Projects />
        <Work />
      </main>
    </div>
  );
}

export default App;
