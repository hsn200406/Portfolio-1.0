import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import ManuProjects from "./components/ManuProjects";
import Projects from './components/Projects';

// Main App Component
const App = () => {

  return (
    <Router>
      <nav className="navbar">
      <div className="logo"></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manu-projects" element={<ManuProjects />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
