import Banner from "../assets/banner.jpg";
import c from "../styles/layouts/HomePage.module.css";

export default function BannerComponent() {
  return (
    <div className={c.box}>
      <img src={Banner} alt="banner" className={c.banner} />
      <p className={c.bannerText}>Instantes de uma vida</p>
      <p className={c.bannerText2}>
        A fotografia que te faz sentir, lembrar e amar. Que te faz recordar para
        sempre de um momento ou fase de sua vida. Que te traz a experiência de
        auto conhecimento, se amando mais e se vendo pelo olhar de uma outra
        pessoa. Notando em si detalhes que talvez nunca tenha percebido serem
        tão lindos. A fotografia, a arte do registro sagrado, trazendo a
        nostalgia de coisas que fazem parte da sua história e de quem você é
      </p>
    </div>
  );
}
