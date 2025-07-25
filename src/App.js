import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import { GlobalBackgroundGradient } from './components/animations/GlobalBackgroundGradient/GlobalBackgroundGradient';
import './App.css';

function App() {
  return (
    <div className="App">
       {/* Global Background Gradient Animation */}
      <GlobalBackgroundGradient
        gradientBackgroundStart="rgb(15, 23, 42)"    // Base dark blue
        gradientBackgroundEnd="rgb(30, 41, 59)"      // Slightly lighter blue
        firstColor="96, 165, 250"                    // Light blue
        secondColor="168, 85, 247"                   // Purple
        thirdColor="34, 197, 94"                     // Green
        fourthColor="251, 191, 36"                   // Yellow
        fifthColor="239, 68, 68"                     // Red
        pointerColor="102, 126, 234"                 // Interactive gradient color
        size="70%"                                   // Size of gradient orbs
        blendingValue="hard-light"                   // CSS blend mode
        interactive={true}                           // Enable mouse interaction
      />
      <ScrollProgress />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;