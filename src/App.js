import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import './App.css';

function App() {
  return (
    <div className="App">
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