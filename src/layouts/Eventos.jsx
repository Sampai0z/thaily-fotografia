import { useState, useEffect } from "react";
import fotos from "../assets/fotos.json"; // Importando o arquivo JSON
import c from "../styles/layouts/Ensaios.module.css";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Eventos() {
  const [categoriaFilter, setCategoriaFilter] = useState("prewedding");
  const [showFotos, setShowFotos] = useState(false); // Estado para controlar o tempo de espera
  const [selectedImage, setSelectedImage] = useState(null); // Estado para armazenar a imagem selecionada para exibir no modal

  // Filtro dinâmico com base na categoria selecionada
  const fotosFilter =
    categoriaFilter === "casamento"
      ? fotos.categoria == "prewedding" ||
        fotos.categoria == "casamento" ||
        fotos.categoria == "aniversario"
      : fotos.filter(
          (pasta) =>
            pasta.categoria && pasta.categoria.toLowerCase() === categoriaFilter
        );

  // Função para mudar o filtro
  const handleFilterChange = (categoria) => {
    setCategoriaFilter(categoria.toLowerCase());
  };

  // Espera 1 segundos antes de mostrar as fotos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFotos(true); // Após 1 segundos, mostrar as fotos
    }, 1000);

    // Limpa o timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []); // Este useEffect será executado apenas uma vez, quando o componente for montado

  // Função para abrir o modal com a imagem clicada
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl); // Armazena a URL da imagem no estado
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedImage(null); // Reseta o estado, fechando o modal
  };

  return (
    <div>
      {/* Botões para mudar a categoria do filtro */}
      <div className={c.subMenu}>
        <button onClick={() => handleFilterChange("aniversario")}>
          Aniversário
        </button>
        <button onClick={() => handleFilterChange("casamento")}>
          Casamento
        </button>
        <button onClick={() => handleFilterChange("prewedding")}>
          Pré-Weeding
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
                      onClick={() => openModal(link)} // Chama a função para abrir o modal
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
    </div>
  );
}
