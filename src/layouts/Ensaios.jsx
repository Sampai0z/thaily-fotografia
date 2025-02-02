export default function Ensaios() {
  const urls = [];

  for (let index = 1; index <= 20; index++) {
    urls.push();
  }

  return (
    <div>
      {urls.map((url, index) => (
        <img key={index} src={url} alt={`Imagem ${index + 1}`} width="30%" />
      ))}
    </div>
  );
}
