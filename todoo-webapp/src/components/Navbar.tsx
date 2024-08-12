import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../pictures/logo.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <div className="nav-items">
        <div className="dkategorije">
          <a href="kategorije">kategorije</a>
        </div>
        <div className="dcenovnik">
          <a href="cenovnik">cenovnik</a>
        </div>
        <div className="dkontakt">
          <a href="kontakt">kontakt</a>
        </div>
        <div className="dprijavi">
          <a href="prijavi-se">prijavi se</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;