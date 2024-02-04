import { SliderData } from "./SliderData";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function ImageSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  console.log(currentSlide);
  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}
          >
            {index === currentSlide && (
              <img key={index} src={slide.image} alt="" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ImageSlider;
