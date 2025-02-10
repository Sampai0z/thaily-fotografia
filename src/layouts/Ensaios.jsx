import { useState, useEffect } from "react";
import fotos from "../assets/fotos.json";
import c from "../styles/layouts/Ensaios.module.css";

export default function Ensaios() {
  const [categoriaFilter, setCategoriaFilter] = useState("ensaio");
  const [showFotos, setShowFotos] = useState(false);

  const click = (i) => {
    console.log(i);
  };

  const fotosFilter =
    categoriaFilter === "todos"
      ? fotos
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
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Imagens</h1>

      <div>
        <button onClick={() => handleFilterChange("ensaio")}>Ensaio</button>
        <button onClick={() => handleFilterChange("casamento")}>
          Casamento
        </button>
        <button onClick={() => handleFilterChange("outro")}>Outro</button>
        <button onClick={() => handleFilterChange("todos")}>Todos</button>
      </div>

      {!showFotos && <p>Aguarde enquanto carregamos as imagens...</p>}

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
                      onClick={() => click(idx)}
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
              Nenhuma imagem encontrada para a categoria `{categoriaFilter}`.
            </p>
          )}
    </div>
  );
}
