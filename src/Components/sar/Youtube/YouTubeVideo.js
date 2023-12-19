import React from 'react';
import './YoutubeVideo.css'; // Import your CSS file for styling

const YouTubeVideo = () => {
  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/NEdMHSByXG4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
