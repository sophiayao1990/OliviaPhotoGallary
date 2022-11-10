import { useState } from "react";
import "./PhotoGallary.css";
import gallaryImages from "../imageData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const PhotoGallary = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const closeSlide = () => {
    setOpenModal(false);
  };
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(gallaryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber === gallaryImages.length - 1
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
            <img src={gallaryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      <div className="gallaryWrap">
        {gallaryImages.map((slide, index) => {
          return (
            <div
              className="singlePhotoContainer"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <div className="single">
                <img src={slide.img} alt="" />
                <p className="description">
                  {slide.description} -{" "}
                  <span className="date">{slide.date}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallary;
