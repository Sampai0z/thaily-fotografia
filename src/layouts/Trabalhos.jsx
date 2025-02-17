import { useState } from "react";
import { useNavigate } from "react-router-dom";
import c from "../styles/layouts/Trabalhos.module.css";

const images = [
  { src: "selamento.jpg", alt: "Selamento", tipo: "Casamento", categoria: "casamento" },
  { src: "pre_wedding.jpg", alt: "Pre wedding", tipo: "Casamento", categoria: "prewedding" },
  { src: "cerimonia_casamento.jpg", alt: "Cerimônia de Casamento", tipo: "Casamento", categoria: "casamento" },
  { src: "ensaio_infantil.jpg", alt: "Ensaio Infantil", tipo: "Infantil", categoria: "infantil" },
  { src: "ensaio_masculino.jpg", alt: "Ensaio Masculino", tipo: "Pré-Missão", categoria: "gabriel" },
  { src: "ensaio_feminino.jpg", alt: "Ensaio Feminino", tipo: "Pré-Missão", categoria: "ensaio_pamella" },
  { src: "ensaio_masculino_2.jpg", alt: "Ensaio Masculino", tipo: "Pós-Missão", categoria: "ensaio_masculino2" },
  { src: "ensaio_feminino_2.jpg", alt: "Ensaio Feminino", tipo: "Pós-Missão", categoria: "ensaio_gomes" },
  { src: "aniversario.jpg", alt: "Eventos", tipo: "Aniversário", categoria: "aniversario" },
];

const categorias = [
  { label: "Todos", value: "todos" },
  { label: "Casamento", value: "casamento" },
  { label: "Pré-Missão", value: "pré-missão" },
  { label: "Pós-Missão", value: "pós-missão" },
  { label: "Aniversário", value: "aniversario" },
  { label: "Infantil", value: "infantil" },
];

export default function Trabalhos() {
  const navigate = useNavigate();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");

  // Value do Array categorias: categoria de images 
  const categoriaMap = {
    "casamento": ["casamento", "prewedding"],
    "pré-missão": ["gabriel", "ensaio_pamella"],
    "pós-missão": ["ensaio_masculino2", "ensaio_gomes"],
    "aniversario": ["aniversario"],
    "infantil": ["infantil"],
  };

  // Filtra as imagens de acordo com a categoria selecionada
  const imagensFiltradas = categoriaSelecionada === "todos"
    ? images
    : images.filter((image) => categoriaMap[categoriaSelecionada]?.includes(image.categoria));

  const handleCategoriaClick = (value) => {
    setCategoriaSelecionada(value);
  };

  return (
    <div className={c.Container}>
      {/* Menu de Categorias */}
      <nav className={c.menu}>
        {categorias.map((item) => (
          <span 
            key={item.value}
            className={categoriaSelecionada === item.value ? c.ativo : ""}
            onClick={() => handleCategoriaClick(item.value)}
          >
            {item.label}
          </span>
        ))}
      </nav>

      {/* Galeria de Fotos */}
      <div className={c.ContainerFotos}>
        {imagensFiltradas.map((image, index) => (
          <div key={index} className={c.foto} onClick={() => navigate(`/trabalhos/${image.categoria}`)}>
            <img src={image.src} alt={image.alt} />
            <span className={c.titulo}>{image.alt}</span>
            <span className={c.categoria}>{image.tipo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
