import c from "../styles/layouts/Ensaios.module.css";
import fotos from "../assets/fotos.json";
import { useState, useEffect, useMemo } from "react";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Ensaios() {
  const [categoriaFilter, setCategoriaFilter] = useState("ensaio");
  const [showFotos, setShowFotos] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visiblePhotos, setVisiblePhotos] = useState({});
  const { id } = useParams();

  const fotosFilter = useMemo(() => {
    return categoriaFilter === "todos"
      ? fotos.filter(
          (pasta) =>
            pasta.categoria &&
            (pasta.categoria.toLowerCase() === "ensaio" ||
              pasta.categoria.toLowerCase() === "infantil")
        )
      : fotos.filter(
          (pasta) =>
            pasta.categoria && pasta.categoria.toLowerCase() === categoriaFilter
        );
  }, [categoriaFilter]);

  useEffect(() => {
    setCategoriaFilter(id);
    const timer = setTimeout(() => {
      setShowFotos(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const initialVisible = {};
    fotosFilter.forEach((pasta, i) => {
      initialVisible[i] = 10;
    });
    setVisiblePhotos(initialVisible);
  }, [categoriaFilter, fotosFilter]);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const loadMorePhotos = (index, totalPhotos) => {
    setVisiblePhotos((prev) => ({
      ...prev,
      [index]: totalPhotos,
    }));
  };

  return (
    <>
      <Button>
        <Link to="/trabalhos">Voltar</Link>
      </Button>

      {!showFotos && (
        <div className={c.circularProgress}>
          <CircularProgress />
        </div>
      )}

      {showFotos && fotosFilter.length > 0 ? (
        fotosFilter.map((pasta, index) => (
          <div key={pasta.id || index}>
            <div className={c.banner}>
              <img src={pasta.banner} alt={pasta.alt} />
            </div>
            <span className={c.nomePasta}>
              <p>{pasta.pasta.replace(/-/g, " ")}</p>
              <h1>{pasta.tipo.replace(/-/g, " ")}</h1>
            </span>

            <div className={c.containerImagens}>
              {pasta.arquivos.length > 0 ? (
                <>
                  <div className={c.galeria}>
                    {pasta.arquivos
                      .slice(0, visiblePhotos[index] || 10)
                      .map((link, idx) => (
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
                  {visiblePhotos[index] < pasta.arquivos.length && (
                    <Button
                      onClick={() =>
                        loadMorePhotos(index, pasta.arquivos.length)
                      }
                      style={{ color: "#8a51bf" }}
                    >
                      Carregar mais
                    </Button>
                  )}
                </>
              ) : (
                <p>Sem imagens disponíveis</p>
              )}
            </div>
          </div>
        ))
      ) : showFotos ? (
        <p>
          Nenhuma imagem encontrada para a categoria &quot;{categoriaFilter}
          &quot;.
        </p>
      ) : null}

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
