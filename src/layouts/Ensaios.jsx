import fotos from "../assets/fotos.json"; // Importando o arquivo JSON
import c from "../styles/layouts/Ensaios.module.css";

export default function Ensaios() {
  //https://ilhuuqdlugmuluraghjz.supabase.co/storage/v1/object/public/thaily-fotografia/pamella/49.jpeghttps://ilhuuqdlugmuluraghjz.supabase.co/storage/v1/object/public/thaily-fotografia/paulino/38.jpeg

  let urls = [];
  for (let index = 1; index <= 39; index++) {
    let url = `https://ilhuuqdlugmuluraghjz.supabase.co/storage/v1/object/public/thaily-fotografia/paulino/${index}.jpeg`;
    urls.push(url);
  }
  console.log(urls);

  return (
    <div>
      <h1>Imagens</h1>
      {fotos.map((pasta, index) => (
        <div key={pasta.id || index} className={c.containerImagens}>  {/* Use um ID único se possível */}
          <span className={c.nomePasta}>{pasta.pasta}</span>
          {pasta.arquivos.length > 0 ? (
            <div className={c.galeria}>
              {pasta.arquivos.map((link, idx) => (
                <img
                  key={idx}
                  src={link}
                  alt={`Imagem ${idx + 1} de ${pasta.pasta}`}
                  className={c.fotos}
                />
              ))}
            </div>
          ) : (
            <p>Sem imagens disponíveis</p>
          )}
        </div>
      ))}
    </div>
  );
}
