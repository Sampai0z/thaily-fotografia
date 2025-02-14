import BannerComponent from "../components/BannerComponent.jsx";
import Depoimentos from "../components/Depoimentos.jsx";
import Divider from "../components/Divider.jsx";
import SlideEnsaios from "../components/SlideEnsaios.jsx";

export default function HomePage() {
  return (
    <>
      <BannerComponent />
      <Divider text="ALGUNS TRABALHOS" />
      <SlideEnsaios />
      <Divider text="DEPOIMENTOS" />
      <Depoimentos />
    </>
  );
}
