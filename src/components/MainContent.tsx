// src/components/MainContent.tsx

import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './Navbar';

const MainContent: React.FC = () => {
    return (
      <div>
        <Navbar />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <footer className="py-10 text-center text-gray-500">
        © 2024 Eeshan V. All rights reserved.</footer>
      </div>
    );
  };
  
  export default MainContent;