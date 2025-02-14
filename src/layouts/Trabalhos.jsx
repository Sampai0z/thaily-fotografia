// import * from "react";
// import c from "../styles/layouts/Trabalhos.module.css";

// import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

export default function Trabalhos() {
  const navigate = useNavigate();

  const card = () => {
    let teste = "gabriel";
    navigate(`/trabalhos/${teste}`);
    console.log("click");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          card();
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image="https://ilhuuqdlugmuluraghjz.supabase.co/storage/v1/object/public/thaily-fotografia/gabriel-morango/1.jpeg"
          alt="ensaio masc - pre missão"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ensaio Masculino
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            PRÉ MISSÃO
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
