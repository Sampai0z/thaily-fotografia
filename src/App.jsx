import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./layouts/HomePage.jsx";
import Ensaios from "./layouts/Ensaios.jsx";
import Eventos from "./layouts/Eventos.jsx";
import Footer from "./components/Footer.jsx";
import Sobre from "./layouts/Sobre.jsx";
import ScrollToTop from "./components/ScrollTo.jsx";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ensaios" element={<Ensaios />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/sobre" element={<Sobre /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
