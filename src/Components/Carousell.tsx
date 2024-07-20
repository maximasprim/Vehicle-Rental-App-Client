import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://i.pinimg.com/736x/34/f7/9a/34f79a75857dc0d0d418f08169b8ccbb.jpg',
  'https://i.pinimg.com/736x/4d/d1/62/4dd162d214c7c5a2c4d39714cb8cde69.jpg',
  'https://i.pinimg.com/736x/1b/ef/8f/1bef8fdbffc34de9260d34bd4b1a393e.jpg',
  'https://i.pinimg.com/736x/ee/fa/18/eefa1899ff2d7ab63f6dd202e8030c3d.jpg',
  'https://i.pinimg.com/736x/30/b8/78/30b878efa11616a73a73b2ed916124d9.jpg',
  'https://i.pinimg.com/564x/ef/4c/fe/ef4cfe03542a4465f7241ad07c7b62ce.jpg',
  'https://i.pinimg.com/564x/e4/07/bd/e407bd9575f5a7b4b26a94a5ffbb32af.jpg'
];

const CarouselComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false, // This ensures the carousel continues to work when hovered
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-800">
      <div className="w-full max-w-7xl"> {/* Set a maximum width here */}
        <Slider {...settings} className="w-full h-fit">
          {images.map((image, index) => (
            <div key={index} className="w-full h-[700px]">
              <img src={image} alt={`carousel-${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;
