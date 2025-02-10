import { useState, useEffect } from "react";
import fotos from "../assets/fotos.json"; // Importando o arquivo JSON
import c from "../styles/layouts/Ensaios.module.css";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Ensaios() {
  const [categoriaFilter, setCategoriaFilter] = useState("ensaio");
  const [showFotos, setShowFotos] = useState(false); // Estado para controlar o tempo de espera
  const [selectedImage, setSelectedImage] = useState(null); // Estado para armazenar a imagem selecionada para exibir no modal

  // Filtro dinâmico com base na categoria selecionada
  const fotosFilter =
    categoriaFilter === "todos"
      ? fotos
      : fotos.filter(
          (pasta) =>
            pasta.categoria && pasta.categoria.toLowerCase() === categoriaFilter
        );

  // Função para mudar o filtro
  const handleFilterChange = (categoria) => {
    setCategoriaFilter(categoria.toLowerCase());
  };

  // Espera 5 segundos antes de mostrar as fotos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFotos(true); // Após 5 segundos, mostrar as fotos
    }, 5000);

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
      <h1>Imagens</h1>

      {/* Botões para mudar a categoria do filtro */}
      <div>
        <button onClick={() => handleFilterChange("ensaio")}>Ensaio</button>
        <button onClick={() => handleFilterChange("casamento")}>
          Casamento
        </button>
        <button onClick={() => handleFilterChange("outro")}>Outro</button>
        <button onClick={() => handleFilterChange("todos")}>Todos</button>
      </div>

      {/* Exibe um texto enquanto espera 5 segundos */}
      {!showFotos && <CircularProgress />}

      {/* Exibindo as imagens filtradas após 5 segundos */}
      {showFotos && fotosFilter.length > 0
        ? fotosFilter.map((pasta, index) => (
            <div key={pasta.id || index} className={c.containerImagens}>
              <span className={c.nomePasta}>{pasta.pasta}</span>

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
          <Button onClick={closeModal} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
