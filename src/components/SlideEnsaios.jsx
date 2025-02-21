import { useState, useRef, useEffect } from "react";
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
  const startX = useRef(0);

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

  function Trabalhos(caminho) {
    const eventos = ["Pre_Wedding", "Selamento", "Aniversário"];
    const ensaios = ["Ensaio Feminino", "Ensaio Masculino", "Ensaio Infantil"];

    if (eventos.includes(caminho)) {
      window.location.href = "/eventos";
    } else if (ensaios.includes(caminho)) {
      window.location.href = "/ensaios";
    } else {
      console.error("Caminho não reconhecido:", caminho);
    }
  }

  return (
    <div className={c.sliderContainer}>
      {/* 🔽 Botão de voltar */}
      <button className={c.arrowLeft} onClick={prevImage}>
      &#11164;
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
              onClick={() => Trabalhos(image.alt)}
            />
          </div>
        ))}
      </div>

      {/* 🔽 Botão de avançar */}
      <button className={c.arrowRight} onClick={nextImage}>
      &#11166;
      </button>

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
  );
}
