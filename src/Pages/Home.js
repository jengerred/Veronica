import React, { useState } from 'react';
import '../Home.css';

function Home() {
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    {
      image: "/Veronica-1.png",
      numbertext: "1 / 3"
    },
    {
      image: "/Veronica-2.png",
      numbertext: "2 / 3"
    },
    {
      image: "/Veronica-3.png",
      numbertext: "3 / 3"
    }
  ];

  const showSlides = (n) => {
    document.querySelectorAll('.mySlides').forEach((slide) => {
      slide.style.display = 'none';
    });
    document.querySelector(`#slide-${n}`).style.display = 'block';
    document.querySelectorAll('.dot').forEach((dot) => {
      dot.className = dot.className.replace('active', '');
    });
    document.querySelector(`#dot-${n}`).classList.add('active');
    setSlideIndex(n);
  };

  const handlePrevClick = () => {
    if (slideIndex > 1) {
      showSlides(slideIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (slideIndex < slides.length) {
      showSlides(slideIndex + 1);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
  });

  return (
    <div className="body">
    <div className="border">
      <div className="header">
        <h1>Queen Veronica's Webpage</h1>
      </div>
      
      <div className="author-div">
        <div className="author">
          Author: Veronica Bowen
        </div> 
      </div>
      <br/>

      <img className="queen" src="/Veronica-Queen.png" alt="Veronica"/>

      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div key={index} id={`slide-${index + 1}`} className={`mySlides fade`}>
            <div className="numbertext">{slide.numbertext}</div>
            <img src={slide.image} style={{ width: "100%" }} alt={slide.numbertext} />
          </div>
        ))}
        
        <a id='prev' className="prev" onClick={handlePrevClick}>&#10094;</a>
        <a id='next' className="next" onClick={handleNextClick}>&#10095;</a>
        
      </div>
      
      <br/>
      
      <div style={{ textAlign: "center" }}>
        {Array.from({ length: slides.length }, (_, i) => (
          <span
            key={i}
            id={`dot-${i + 1}`}
            className={`dot ${i + 1 === slideIndex ? 'active' : ''}`}
            onClick={() => showSlides(i + 1)}
          >
          </span>
        ))}
      </div>
      
     <p className="copyright">© 2024. Veronica Bowen. All rights reserved.</p>
     </div>
    </div>
);
};

export default Home;