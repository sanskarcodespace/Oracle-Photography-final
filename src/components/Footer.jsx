import React from 'react';
import { Star, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col brand-col">
            <h2 className="footer-logo">Oracle<br/>Photography</h2>
            <p>Creating memories for a lifetime. Professional photography services tailored to your budget and vision.</p>
            
            <div className="google-reviews">
              <div className="review-rating">
                <span className="rating-number">4.8</span>
                <div className="stars">
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                </div>
              </div>
              <p className="review-count">Based on 32 Google Reviews</p>
            </div>
          </div>
          
          <div className="footer-col links-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#categories">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col contact-col">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="info-icon" />
                <span>187, HBH Colony, Sector 28,<br/>Faridabad, Haryana 121008</span>
              </li>
              <li>
                <Phone size={18} className="info-icon" />
                <a href="tel:+919717333513">097173 33513</a>
              </li>
              <li>
                <Mail size={18} className="info-icon" />
                <a href="mailto:info@oraclephotography.com">info@oraclephotography.com</a>
              </li>
            </ul>
            <a href="https://maps.google.com/?q=187,+HBH+Colony,+Sector+28,+Faridabad,+Haryana+121008" target="_blank" rel="noopener noreferrer" className="btn btn-outline footer-map-btn">Get Directions</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Oracle Photography. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
