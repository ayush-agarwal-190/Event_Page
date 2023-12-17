import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'; // Import the CSS

const Banner = () => {
  return (
    <div className="banner">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} onClickItem={console.log}>
        <div>
          <img src="/images/download.jpg" alt="Banner 1" />
        </div>
        <div>
          <img src="/images/download.jpg" alt="Banner 2" />
        </div>
        <div>
          <img src="/images/download.jpg" alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
