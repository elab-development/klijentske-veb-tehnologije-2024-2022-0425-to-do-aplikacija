import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Organizujte svoj dan sa našom ToDoo aplikacijom</h1>
        <p>Jednostavan način da pratite svoje zadatke, ciljeve i projekte. Naša aplikacija vam pomaže da ostanete organizovani i produktivni svaki dan.</p>
        <ul>
          <li>Lako dodavanje i uređivanje zadataka</li>
          <li>Postavljanje podsetnika i rokova</li>
          <li>Kategorizacija zadataka po prioritetima</li>
          <li>Praćenje napretka</li>
        </ul>
        <button className="cta-btn">Registruj se</button>
      </div>
      <div className="hero-image">
        <img src="/path-to-your-image.png" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
