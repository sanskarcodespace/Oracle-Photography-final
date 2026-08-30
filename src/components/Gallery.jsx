import React, { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Gallery.css';

const images = [
  { src: "/images/hero1.jpg", width: 1600, height: 900 },
  { src: "/images/hero2.jpg", width: 1600, height: 900 },
  { src: "/images/maternity.jpg", width: 900, height: 1200 },
  { src: "/images/product.jpg", width: 900, height: 1200 },
  { src: "/images/baby.jpg", width: 900, height: 1200 }
];

const baseTitles = [
  "Pre Wedding Elegance",
  "Product Showcase",
  "Maternity Glow",
  "Birthday Moments",
  "Engagement Joy"
];

const baseCategories = [
  "Pre Wedding",
  "Product",
  "Maternity",
  "Birthday",
  "Engagement"
];

// Generate more photos for masonry effect
const photos = Array.from({ length: 15 }).map((_, i) => {
  const baseImg = images[i % images.length];
  // Slightly adjust height for masonry variance
  const variance = (i % 3 === 0) ? -100 : (i % 2 === 0 ? 100 : 0);
  return {
    src: baseImg.src,
    width: baseImg.width,
    height: baseImg.height + variance,
    key: i,
    title: baseTitles[i % baseTitles.length],
    category: baseCategories[i % baseCategories.length]
  };
});

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Our Work</h2>
          <p>Explore some of our favorite captured moments</p>
        </div>
        
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          onClick={({ index }) => setIndex(index)}
          columns={(containerWidth) => {
            if (containerWidth < 600) return 1;
            if (containerWidth < 900) return 2;
            return 3;
          }}
          spacing={20}
          renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
            <div style={{ ...wrapperStyle, position: "relative" }} className="gallery-item-wrapper">
              {renderDefaultPhoto({ wrapped: true })}
              <div className="gallery-item-overlay">
                <div className="gallery-item-content">
                  <h3 className="gallery-item-title">{photo.title}</h3>
                  <span className="gallery-item-category">{photo.category}</span>
                </div>
              </div>
            </div>
          )}
        />

        <Lightbox
          index={index}
          slides={photos}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
        
        <div className="text-center mt-4" style={{ marginTop: '50px' }}>
          <a href="#" className="btn">View All Work</a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
