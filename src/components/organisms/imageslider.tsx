import { useState } from "react";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/image1.svg","/image2.svg","/image3.svg",
  ];

  const handleNextClick = () => {
    const nextIndex = currentImageIndex + 1 >= images.length ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = currentImageIndex - 1 < 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 z-10 cursor-pointer" onClick={handlePrevClick}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-0 z-10 cursor-pointer" onClick={handleNextClick}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div className="relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute transition-all duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            } ${index > currentImageIndex ? "left-full" : "right-full"} transform ${
              index === currentImageIndex ? "" : "scale-75"
            }`}
            style={{ transformOrigin: index > currentImageIndex ? "left" : "right" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;