// import * from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";

import { useNavigate } from "react-router-dom";
import c from "../styles/layouts/Trabalhos.module.css";

const images = [
  { src: "selamento.jpg", alt: "Selamento", tipo:"Casamento", categoria: "casamento", },
  { src: "pre_wedding.jpg", alt: "Pre wedding", tipo:"Casamento", categoria: "prewedding" },
  { src: "cerimonia_casamento.jpg", alt: "Cerimônia de Casamento", tipo:"Casamento", categoria: "casamento", },
  { src: "ensaio_infantil.jpg", alt: "Ensaio Infantil", tipo:"Infantil", categoria:"infantil" },
  { src: "ensaio_masculino.jpg", alt: "Ensaio Masculino", tipo:"Pré-Missão", categoria:"gabriel" },
  { src: "ensaio_feminino.jpg", alt: "Ensaio Feminino", tipo:"Pré-Missão", categoria:"ensaio_pamella" },
  { src: "ensaio_masculino_2.jpg", alt: "Ensaio Masculino", tipo:"Pós-Missão", categoria:"ensaio_masculino2" },
  { src: "ensaio_feminino_2.jpg", alt: "Ensaio Feminino", tipo:"Pós-Missão", categoria:"ensaio_gomes" },
  { src: "aniversario.jpg", alt: "Eventos", tipo:"Aniversário", categoria: "aniversario" },
];

export default function Trabalhos() {
  const navigate = useNavigate();

  const card = (categoria) => {
    let teste = categoria;
    navigate(`/trabalhos/${teste}`);
    console.log("click");
  };

  return (
    <div className={c.Container}>
      <span className={c.menu}>MENU?</span>
      <div className={c.ContainerFotos}>
      {images.map((image, index) => (
        <div key={index} className={c.foto} onClick={() => card(image.categoria)}>
              <img 
                src={image.src}
              />
              <span className={c.titulo}>{image.alt}</span>
              <span className={c.categoria}>{image.tipo}</span>
            </div>
      ))}
      </div>
    </div>
  );
}
