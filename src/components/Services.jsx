import React, { useState } from 'react';
import './Services.css';

const servicesList = [
  "Headshots and Portraits", "Baby Photography", "Black-and-White Photography", 
  "Bridal Photography", "Children's Photography", "Commercial Photography", 
  "Corporate Photography", "Couples Photography", "Events and Parties", 
  "Family and Group Photography", "Glamour Photography", "Group Photography", 
  "Headshot Photography", "Home Service", "Individual Photography", 
  "Maternity and Newborn Photography", "Newborn Photography", "Photo Retouching", 
  "Portrait Photography", "Product Photography", "Property Photography", 
  "Videography Services", "Wedding and Engagement Photography"
];

// Helper to assign a random placeholder image to the service
const getPlaceholderImage = (index) => {
  const images = ['hero1.jpg', 'hero2.jpg', 'maternity.jpg', 'product.jpg', 'baby.jpg'];
  return `/images/${images[index % images.length]}`;
};

const Services = () => {
  const [visibleServices, setVisibleServices] = useState(6);

  const loadMore = () => {
    setVisibleServices((prev) => Math.min(prev + 6, servicesList.length));
  };

  return (
    <section className="services-section" id="categories">
      <div className="container">
        <div className="section-title">
          <h2>Categories</h2>
          <p>Explore our wide range of photography and videography services tailored to capture your special moments.</p>
        </div>
        
        <div className="services-grid">
          {servicesList.slice(0, visibleServices).map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-img" style={{ backgroundImage: `url(${getPlaceholderImage(index)})` }}>
                <div className="service-overlay">
                  <h4 className="service-title">{service}</h4>
                  <p className="service-desc">Hire Oracle Photography for {service}.</p>
                  <a href="#gallery" className="service-link">See Album</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleServices < servicesList.length && (
          <div className="text-center mt-4" style={{ marginTop: '50px' }}>
            <button className="btn" onClick={loadMore}>Load More Categories</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
