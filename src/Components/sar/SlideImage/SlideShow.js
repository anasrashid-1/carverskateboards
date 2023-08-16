



import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import './SlideShow.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faUser, faBars ,faCartShopping, faCaretDown, faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";

const slideImages = [
    "https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/150/Web_Banner-1_1.jpg?c=1",
"https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/149/dclassic_2023-07-21_143800.113.JPG?c=1",
    "https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/145/Web_Banner__2.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/148/web_banner_1__92539.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/147/Web_Banner_1_2.jpg?c=1"

  
];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideImages.length) % slideImages.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slideImages.map((image, index) => (
          <Slide key={index} image={image} />
        ))}
      </div>
      <div className="navigation">
          <FontAwesomeIcon icon={faAngleLeft} className="arrow left" onClick={prevSlide}/>

        <div className="pagination">
          {slideImages.map((_, index) => (
            <span
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
            >
              &#9679;
            </span>
          ))}
        </div>
        <FontAwesomeIcon icon={faAngleRight} className="arrow right" onClick={nextSlide}/>

     
      </div>
    </div>
  );
};

export default SlideShow;

