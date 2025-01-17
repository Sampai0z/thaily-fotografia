import Banner from "../assets/banner.jpg";
import c from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={c.box}>
        <img src={Banner} alt="banner" className={c.banner} />
        <div className={c.bannerBox}>
          <p className={c.bannerText}>
            Colecionando momentos e eternizando memórias
          </p>
          <button className={c.bannerButton}>Contacte-me</button>
        </div>
      </div>
    </>
  );
}
