import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">ToDo<span className="check">✓</span></div>
      <div className="menu">
        <a href="#">kategorije</a>
        <a href="#">cenovnik</a>
        <a href="#">kontakt</a>
        <a href="#" className="login-btn">prijavi se</a>
      </div>
    </nav>
  );
};

export default Navbar;
