import Banner from "../assets/banner.jpg";
import c from "../styles/layouts/HomePage.module.css";

export default function BannerComponent() {
  return (
    <div className={c.box}>
      <img src={Banner} alt="banner" className={c.banner} />
      <div className={c.bannerBox}>
        <p className={c.bannerText}>
          Colecionando momentos e eternizando memórias
        </p>
        <button className={c.bannerButton}>Contate-me</button>
      </div>
    </div>
  );
}
