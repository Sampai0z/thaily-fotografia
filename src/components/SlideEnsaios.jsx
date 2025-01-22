import React, { useState } from "react";
import c from "../styles/SlideEnsaios.module.css"

const images = [
    { src: "selamento.jpg", alt: "Selamento" },
    { src: "pre_wedding.jpg", alt: "Pre_Wedding" },
    { src: "", alt: "Cerimônia de Casamento" },
    { src: "ensaio_feminino.jpg", alt: "Ensaio Feminino" },
    { src: "ensaio_infantil.jpg", alt: "Ensaio Infantil" },
    { src: "ensaio_masculino.jpg", alt: "Ensaio Masculino" },
    { src: "aniversario.jpg", alt: "Aniversário" },
  ];

export default function SlideEnsaios () {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      console.log("Next index:", newIndex); // Verifique o índice correto
      return newIndex;
    });
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      console.log("Prev index:", newIndex); // Verifique o índice correto
      return newIndex;
    });
  };

  console.log(currentIndex)

  return (
    <>
      <div className={c.titleworks}>
        <hr />
        <span> ALGUNS TRABALHOS </span>
        <hr />
      </div>
      <div className={c.sliderContainer}>
        <button className={c.prevButton} onClick={prevSlide}>
          ❮
        </button>
        <div className={c.slider}>
        {images.map((image, index) => (
          <div
              key={index}
              className={`${c.slide} ${index === currentIndex ? c.active : c.inactive}`}
          >
              <a className={c.vermais} href={`#`}>Ver mais</a>
              <img src={image.src} alt={image.alt} />
          </div>
          ))}

        </div>
        <button className={c.nextButton} onClick={nextSlide}>
          ❯
        </button>
      </div>
    </>
  );
};
