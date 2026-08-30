import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section className="intro-section" id="about">
      <div className="container intro-container">
        
        <div className="intro-text-col">
          <h2 className="intro-title">Because every picture tells a story, let me help you tell yours.</h2>
          <p className="intro-text">
            Oracle Photography is a popular production house located in Faridabad that makes your occasions memorable for a lifetime. Be it Engagement, Pre-wedding, Wedding, Maternity, Baby shower, Birthday shoots, Product Photography, or Food Photography.
          </p>
          <p className="intro-text">
            Oracle Photography is the best choice as we offer simple and clear pricing structures with pre-defined goals and delivery date with no hidden charges. We provide pricing structure per your budget.
          </p>
          <div className="intro-action">
            <a href="#contact" className="read-more-link">
              <span className="line"></span> READ MORE
            </a>
          </div>
        </div>

        <div className="intro-image-col">
          <div className="collage-wrapper">
            <div className="collage-img img-1" style={{ backgroundImage: "url('/images/maternity.jpg')" }}></div>
            <div className="collage-img img-2" style={{ backgroundImage: "url('/images/hero1.jpg')" }}></div>
            <div className="collage-img img-3" style={{ backgroundImage: "url('/images/hero2.jpg')" }}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;
