import { useEffect, useState } from "react";

export default function Ensaios() {
  const [images, setImages] = useState([]);
  const idPasta = "1dwto-Gd3XmT209WQAtL3WLevp6gLRVPm";
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${idPasta}'+in+parents&fields=files(id,name,mimeType)&key=${apiKey}`
      );
      const data = await response.json();

      if (response.status === 200) {
        console.log("Requisição bem-sucedida:", data);
      } else {
        console.error("Erro na requisição", data);
      }

      if (data.files) {
        setImages(data.files);
      }
    };

    fetchImages();
  }, [apiKey, idPasta]);

  return (
    <div>
      <h1>Imagens</h1>
      {images.map((file) => (
        <div key={file.id}>
          <img
            src={`http://localhost:5000/proxy?url=https://drive.google.com/uc?export=view&id=${file.id}`}
            alt={file.name}
            width={300}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </div>
  );
}
