import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Hero.css';

const Hero = () => {
  const slides = [
    {
      image: '/images/hero1.jpg',
      title: 'Pre-Wedding',
      subtitle: 'Make it Professional',
      buttonText: 'Read More',
    },
    {
      image: '/images/hero2.jpg',
      title: 'Engagement',
      subtitle: 'Memories for a Lifetime',
      buttonText: 'See Album',
    }
  ];

  return (
    <section className="hero-section" id="home">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="hero-slide-bg" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
              <div className="container hero-content">
                <h2 className="animate-title">{slide.title}</h2>
                <h3 className="animate-subtitle">{slide.subtitle}</h3>
                <a href="#about" className="btn btn-outline animate-btn">{slide.buttonText}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
