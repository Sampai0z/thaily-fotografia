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
        <a href="https://wa.me/5511948413121" target="_blank" className={c.a}>
          <button className={c.bannerButton}>
            Contate-me &nbsp;<i className="fa-brands fa-whatsapp"></i>
          </button>
        </a>
      </div>
    </div>
  );
}
