import { useState, useEffect } from "react";
import fotos from "../assets/fotos.json"; // Importando o arquivo JSON
import c from "../styles/layouts/Ensaios.module.css";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Ensaios() {
  const [categoriaFilter, setCategoriaFilter] = useState("ensaio");
  const [showFotos, setShowFotos] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(categoriaFilter);

  const fotosFilter =
    categoriaFilter === "todos"
      ? fotos.categoria == "ensaio" || fotos.categoria == "infantil"
      : fotos.filter(
          (pasta) =>
            pasta.categoria && pasta.categoria.toLowerCase() === categoriaFilter
        );

  const handleFilterChange = (categoria) => {
    setCategoriaFilter(categoria.toLowerCase());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFotos(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={c.subMenu}>
        <button
          onClick={() => handleFilterChange("ensaio")}
          className={c.letra}
        >
          Ensaio
        </button>
        <button onClick={() => handleFilterChange("infantil")}>
          Ensaio Infantil
        </button>
      </div>

      {!showFotos && (
        <div className={c.circularProgress}>
          <CircularProgress />
        </div>
      )}

      {showFotos && fotosFilter.length > 0
        ? fotosFilter.map((pasta, index) => (
            <div key={pasta.id || index} className={c.containerImagens}>
              <span className={c.nomePasta}>
                {pasta.pasta.replace(/-/g, " ")}
              </span>

              {pasta.arquivos.length > 0 ? (
                <div className={c.galeria}>
                  {pasta.arquivos.map((link, idx) => (
                    <img
                      key={idx}
                      src={link}
                      alt={`Imagem ${idx + 1} de ${pasta.pasta}`}
                      className={c.fotos}
                      loading="lazy"
                      onClick={() => openModal(link)}
                    />
                  ))}
                </div>
              ) : (
                <p>Sem imagens disponíveis</p>
              )}
            </div>
          ))
        : showFotos && (
            <p>
              Nenhuma imagem encontrada para a categoria &quot;{categoriaFilter}
              &quot;.
            </p>
          )}

      <Dialog open={selectedImage !== null} onClose={closeModal}>
        <DialogContent>
          <img
            src={selectedImage}
            alt="Imagem grande"
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="#7960ae">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
