import React from 'react';

const Slide = ({ image }) => {
  return (
    <div className="slide">
      <img src={image} alt="Slide" />
    </div>
  );
};

export default Slide;
