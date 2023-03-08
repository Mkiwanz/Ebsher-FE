import React, { useState } from "react";
import "./imageSlider.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ImageSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <ArrowBackIosIcon
        className="left-arrow"
        sx={{ color: "#57a750" }}
        fontSize="large"
        onClick={prevSlide}
      />
      <ArrowForwardIosIcon
        className="right-arrow"
        sx={{ color: "#57a750" }}
        fontSize="large"
        onClick={nextSlide}
      />
      {props.slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.path} alt={slide.name} className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
