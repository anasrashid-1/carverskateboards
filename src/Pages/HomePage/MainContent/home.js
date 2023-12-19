import React from 'react'
import SlideShow from '../SlideImage/SlideShow'
import ArrivalProduct from '../Arrivals/ArrivalProduct'
import CarverData from '../Carver/CarverData'
import YouTubeVideo from '../Youtube/YouTubeVideo'

function MainContent() {
  return (
    <>
    {/* <SlideShow/> */}
      {/* <ArrivalProduct/> */}
      <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/150/Web_Banner-1_1.jpg?c=1"
                      className="d-block w-100"
                      alt="Product"
                    />
                  </div>
                  {/* Add more carousel items here if needed */}
                  <div className="carousel-item active">
                    <img
                      src="https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/149/dclassic_2023-07-21_143800.113.JPG?c=1"
                      className="d-block w-100"
                      alt="Product"
                    />
                  </div>
                  <div className="carousel-item active">
                    <img
                      src="https://cdn11.bigcommerce.com/s-icfw6t6sn3/images/stencil/original/carousel/145/Web_Banner__2.jpg?c=1"
                      className="d-block w-100"
                      alt="Product"
                    />
                  </div>
                </div>
                {/* Carousel controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                  sx={{ backgroundColor: "black" }} // Apply black background color
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                  sx={{ backgroundColor: "black" }} 
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <br />
      <CarverData/>
      <YouTubeVideo/>
    </>
  )
}

export default MainContent