import { useState } from "react";
import "./PhotoGallary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const PhotoGallary = (props) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    // console.log(index);
    setSlideNumber(index);
    setOpenModal(true);
  };

  const closeSlide = () => {
    setOpenModal(false);
  };
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(props.gallaryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber === props.gallaryImages.length - 1
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="closeBtn"
            onClick={closeSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="prevBtn"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="nextBtn"
            onClick={nextSlide}
          />
          <div className="fullScreenImage">
            <img src={props.gallaryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      <div className="gallaryWrap">
        {props.gallaryImages.map((slide, index) => {
          return (
            <div
              className="single"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <img src={slide.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallary;
