import React, { useState, useEffect } from 'react';
import { Menu, X, Grid } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Categories', href: '#categories' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#">
            <h1 style={{ color: 'var(--white)', margin: 0, fontSize: '24px' }}>
              Oracle<br/>Photography
            </h1>
          </a>
        </div>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="nav-action-mobile">
             <a href="#gallery" className="btn">All Work</a>
          </div>
        </nav>

        <div className="header-action">
          <a href="#gallery" className="nav-menu" style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--white)', textTransform: 'uppercase', fontSize: '14px', fontWeight: '600', letterSpacing: '1px'}}>
            <Grid size={16} /> All Work
          </a>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: 'var(--white)' }}
        >
          {isMobileMenuOpen ? <X size={28} style={{color: 'var(--primary-color)'}}/> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
