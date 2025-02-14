import Banner from "../assets/banner.jpg";
import c from "../styles/layouts/HomePage.module.css";

export default function BannerComponent() {
  return (
    <div className={c.box}>
      <img src={Banner} alt="banner" className={c.banner} />
      <p className={c.bannerText}>Instantes de uma vida</p>
    </div>
  );
}
