import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
