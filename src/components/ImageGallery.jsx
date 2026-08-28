import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';

const GalleryWithCarousel = () => {
  return (
    <div id = "imageGallery" className="flex justify-center items-center bg-bg py-8 md:py-16">
      <div className="w-3/4 md:w-2/3 lg:w-1/2">
        <Carousel showThumbs={true} showIndicators={false} showStatus={false} infiniteLoop autoPlay>
          <div>
            <img
              src="Zahorabreña Alta-2.jpg"
              alt="image 1"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-4.jpg"
              alt="image 2"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-5.jpg"
              alt="image 3"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-7.jpg"
              alt="image 4"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-9.jpg"
              alt="image 5"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-10.jpg"
              alt="image 6"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-11.jpg"
              alt="image 7"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-13.jpg"
              alt="image 8"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-14.jpg"
              alt="image 9"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-15.jpg"
              alt="image 10"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-16.jpg"
              alt="image 11"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-17.jpg"
              alt="image 12"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-18.jpg"
              alt="image 13"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-21.jpg"
              alt="image 14"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-22.jpg"
              alt="image 15"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-23.jpg"
              alt="image 16"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-24.jpg"
              alt="image 17"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-25.jpg"
              alt="image 18"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-26.jpg"
              alt="image 19"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-27.jpg"
              alt="image 20"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-28.jpg"
              alt="image 21"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-29.jpg"
              alt="image 22"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-30.jpg"
              alt="image 23"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-31.jpg"
              alt="image 24"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-32.jpg"
              alt="image 25"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-33.jpg"
              alt="image 26"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-34.jpg"
              alt="image 27"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-35.jpg"
              alt="image 28"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-37.jpg"
              alt="image 29"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="Zahorabreña Alta-38.jpg"
              alt="image 30"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default GalleryWithCarousel;
