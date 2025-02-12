import { useState } from "react";
import c from "../styles/components/SlideEnsaios.module.css";

const images = [
  { src: "selamento.jpg", alt: "Selamento" },
  { src: "pre_wedding.jpg", alt: "Pre_Wedding" },
  { src: "ensaio_feminino.jpg", alt: "Ensaio Feminino" },
  { src: "ensaio_infantil.jpg", alt: "Ensaio Infantil" },
  { src: "ensaio_masculino.jpg", alt: "Ensaio Masculino" },
  { src: "aniversario.jpg", alt: "Aniversário" },
];

export default function SlideEnsaios() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  function Trabalhos(caminho){
    const eventos = ["Pre_Wedding", "Selamento", "Aniversário"];
    const ensaios = ["Ensaio Feminino", "Ensaio Masculino", "Ensaio Infantil"];

    if (eventos.includes(caminho)) {
      window.location.href = '/eventos';
    } else if (ensaios.includes(caminho)) {
      window.location.href = '/ensaios';
    } else {
      console.error('Caminho não reconhecido:', caminho);
    }
  }

  return (
    <>
      <div className={c.sliderContainer}>
        <button className={c.prevButton} onClick={prevSlide}>
          ❮
        </button>
        <div className={c.slider}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${c.slide} ${
                index === currentIndex ? c.active : c.inactive
              }`}
            >
              <img src={image.src} alt={image.alt} onClick={() => Trabalhos(image.alt)}/>
            </div>
          ))}
        </div>
        <button className={c.nextButton} onClick={nextSlide}>
          ❯
        </button>
      </div>
    </>
  );
}
