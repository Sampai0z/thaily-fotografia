import { useState, useRef, useEffect } from "react";
import c from "../styles/components/SlideEnsaios.module.css";
import Seta from "../../public/arrow.svg"
import { useNavigate } from "react-router-dom";

const images = [
  { src: "selamento.jpg", alt: "Selamento", path: "selamento" },
  { src: "pre_wedding.jpg", alt: "Pre_Wedding", path: "prewedding" },
  { src: "ensaio_feminino.jpg", alt: "Ensaio Feminino", path: "ensaio_pamella" },
  { src: "ensaio_infantil.jpg", alt: "Ensaio Infantil", path: "infantil" },
  { src: "ensaio_masculino.jpg", alt: "Ensaio Masculino", path: "gabriel" },
  { src: "aniversario.jpg", alt: "Aniversário", path: "aniversario" },
];

export default function SlideEnsaios() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const navigate = useNavigate();

  // Função para avançar imagem
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Função para voltar imagem
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Swipe Touch para mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const deltaX = startX.current - endX;

    if (deltaX > 50) {
      nextImage();
    } else if (deltaX < -50) {
      prevImage();
    }
  };

  // Permitir controle pelo teclado (setas esquerda e direita)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function Trabalhos() {
    navigate("/Trabalhos");
  }

  return (
    <div className={c.sliderContainer}>
      {/* Botão de voltar */}
      <button className={c.arrowLeft} onClick={prevImage}>
        <img src={Seta} alt=""/>
      </button>

      <div
        className={c.slider}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${c.slide} ${index === currentIndex ? c.active : c.inactive}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => Trabalhos()}
            />
          </div>
        ))}
        {/* 🔵 Indicadores (marcadores) */}
        <div className={c.indicators}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${c.dot} ${index === currentIndex ? c.activeDot : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Botão de avançar */}
      <button className={c.arrowRight} onClick={nextImage}>
        <img src={Seta} alt=""/>
      </button>

      
    </div>
  );
}
