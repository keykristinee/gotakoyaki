import React, { useState, useEffect } from 'react';
// Make sure this imports the CSS file where you put the slider styles
import '../styles/HomePage.css'; 

const images = [
  '/slide1.png',
  '/slide2.png',
  '/slide3.png',
  '/slide4.png',
];

export default function PhotoBannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);

  return (
    <div className="photo-banner-slider">
      <div 
        className="photo-banner-slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Banner ${idx + 1}`}
            className="photo-banner-img"
          />
        ))}
      </div>

      {/* Dots navigation */}
      <div className="photo-banner-slider-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`photo-banner-dot${idx === current ? ' active' : ''}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}