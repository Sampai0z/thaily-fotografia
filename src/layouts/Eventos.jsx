import { useState, useEffect, useMemo } from "react";
import fotos from "../assets/fotos.json"; // Importando o arquivo JSON
import c from "../styles/layouts/Ensaios.module.css";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Eventos() {
  const [categoriaFilter, setCategoriaFilter] = useState("aniversario");
  const [showFotos, setShowFotos] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // Estado para controlar quantas fotos exibir por pasta (chave = índice da pasta)
  const [visiblePhotos, setVisiblePhotos] = useState({});

  // Filtra as pastas com base na categoria selecionada.
  // Se for "casamento", exibe as pastas cuja categoria for prewedding, casamento ou aniversario.
  const fotosFilter = useMemo(() => {
    return categoriaFilter === "todos"
      ? fotos.filter(
          (pasta) =>
            pasta.categoria &&
            ["prewedding", "casamento", "aniversario"].includes(
              pasta.categoria.toLowerCase()
            )
        )
      : fotos.filter(
          (pasta) =>
            pasta.categoria && pasta.categoria.toLowerCase() === categoriaFilter
        );
  }, [categoriaFilter]);

  // Sempre que o filtro (ou o resultado filtrado) mudar,
  // inicializa o estado de quantas imagens serão exibidas por pasta com 10.
  useEffect(() => {
    const initialVisible = {};
    fotosFilter.forEach((pasta, i) => {
      initialVisible[i] = 15;
    });
    setVisiblePhotos(initialVisible);
  }, [categoriaFilter, fotosFilter]);

  // Simula um carregamento de 1 segundo antes de exibir as fotos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFotos(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Abre o modal exibindo a imagem clicada
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Fecha o modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Atualiza o número de fotos visíveis para a pasta (exibe todas as imagens)
  const loadMorePhotos = (index, totalPhotos) => {
    setVisiblePhotos((prev) => ({
      ...prev,
      [index]: totalPhotos,
    }));
  };

  // Altera o filtro (categoria)
  const handleFilterChange = (categoria) => {
    setCategoriaFilter(categoria.toLowerCase());
  };

  return (
    <div>
      {/* Botões para alterar o filtro */}
      <div className={c.subMenu}>
        <button
          onClick={() => handleFilterChange("aniversario")}
          className={`${categoriaFilter === "aniversario" ? c.ativo : ""}`}
        >
          Aniversário
        </button>
        <button
          onClick={() => handleFilterChange("casamento")}
          className={`${categoriaFilter === "casamento" ? c.ativo : ""}`}
        >
          Casamento
        </button>
        <button
          onClick={() => handleFilterChange("prewedding")}
          className={`${categoriaFilter === "prewedding" ? c.ativo : ""}`}
        >
          Pré-Weeding
        </button>
      </div>

      {/* Enquanto as fotos não são exibidas, mostra um loading */}
      {!showFotos && (
        <div className={c.circularProgress}>
          <CircularProgress />
        </div>
      )}

      {/* Exibe as pastas filtradas */}
      {showFotos && fotosFilter.length > 0 ? (
        fotosFilter.map((pasta, index) => (
          <div key={pasta.id || index} className={c.containerImagens}>
            <span className={c.nomePasta}>
              {pasta.pasta.replace(/-/g, " ")}
            </span>

            {pasta.arquivos.length > 0 ? (
              <>
                <div className={c.galeria}>
                  {pasta.arquivos
                    .slice(0, visiblePhotos[index] || 15)
                    .map((link, idx) => (
                      <img
                        key={idx}
                        src={link}
                        alt={`Imagem ${idx + 1} de ${pasta.pasta}`}
                        className={c.fotos}
                        onClick={() => openModal(link)}
                      />
                    ))}
                </div>
                {/* Se ainda houver fotos para exibir, mostra o botão "Carregar mais" */}
                {visiblePhotos[index] < pasta.arquivos.length && (
                  <Button
                    onClick={() => loadMorePhotos(index, pasta.arquivos.length)}
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
        ))
      ) : showFotos ? (
        <p>
          Nenhuma imagem encontrada para a categoria &quot;{categoriaFilter}
          &quot;.
        </p>
      ) : null}

      {/* Modal para exibir a imagem em destaque */}
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
    </div>
  );
}
