import fotos from "../assets/fotos.json"; // Importando o arquivo JSON

export default function Ensaios() {
  // https://ilhuuqdlugmuluraghjz.supabase.co/storage/v1/object/public/thaily-fotografia/pamella/49.jpeghttps://ilhuuqdlugmuluraghjz.supabase.co/storage/v1/object/public/thaily-fotografia/paulino/38.jpeg

  // let urls = [];
  // for (let index = 1; index <= 39; index++) {
  //   let url = `https://ilhuuqdlugmuluraghjz.supabase.co/storage/v1/object/public/thaily-fotografia/paulino/${index}.jpeg`;
  //   urls.push(url);
  // }
  // console.log(urls);

  return (
    <div>
      <h1>Imagens</h1>
      {fotos.map((pasta, index) => (
        <div key={index}>
          <h2>{pasta.pasta}</h2>
          {/* {pasta.arquivos.length > 0 ? (
            <div>
              {pasta.arquivos.map((link, idx) => (
                <img
                  key={idx}
                  src={link}
                  alt={`Imagem ${idx + 1}`}
                  style={{ maxWidth: "50%", margin: "10px" }}
                />
              ))}
            </div>
          ) : (
            <p>Sem imagens disponíveis</p>
          )} */}
        </div>
      ))}
    </div>
  );
}
