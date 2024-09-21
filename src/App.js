import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';         // Header component
import Projects from './components/Projects';     // Projects component (with ProjectCard)
import Contact from './components/Contact';        // Contact component
import Footer from './components/Footer';          // Footer component
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        {/* Home page with all components */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <AboutMe />
                <Projects />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
