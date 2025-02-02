export default function Ensaios() {
  const urls = [];

  for (let index = 1; index <= 17; index++) {
    urls.push(
      `https://storage.cloud.google.com/thaily-fotografia/Marangon%20(${index}%20de%2017).jpg`
    );
  }

  return (
    <div>
      {urls.map((url, index) => (
        <img key={index} src={url} alt={`Imagem ${index + 1}`} width="30%" />
      ))}
    </div>
  );
}
