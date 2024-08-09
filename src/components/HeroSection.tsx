import React from 'react';
import './HeroSection.css';
import slika1 from '../pictures/slika1.png';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-image">
          <img src={slika1} alt="slika1" />
        </div>
        <div className="hero-text">
          <h1>Organizujte svoj dan sa našom ToDoo aplikacijom</h1>
          <p>
            Jednostavan način da pratite svoje zadatke, ciljeve i projekte. Naša aplikacija vam pomaže da ostanete organizovani i produktivni svaki dan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
