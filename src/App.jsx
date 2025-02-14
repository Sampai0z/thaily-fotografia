import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./layouts/HomePage.jsx";
import Ensaios from "./layouts/Ensaios.jsx";
// import Trabalhos from "./layouts/Trabalhos.jsx";
// import Contato from "./layouts/Contato.jsx";
import Eventos from "./layouts/Eventos.jsx";
import Footer from "./components/Footer.jsx";
import Sobre from "./layouts/Sobre.jsx";
import ScrollToTop from "./components/ScrollTo.jsx";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function WhatsAppButton() {
  return (
    <Fab
      color="success" // Cor verde
      aria-label="whatsapp"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        backgroundColor: "#25D366", // Cor oficial do WhatsApp
        "&:hover": { backgroundColor: "#1EBE57" },
      }}
      onClick={() => window.open("https://wa.me/5511948413121", "_blank")}
    >
      <WhatsAppIcon />
    </Fab>
  );
}

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <ScrollToTop />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/trabalhos" element={<Trabalhos />} /> */}
            <Route path="/ensaios" element={<Ensaios />} />
            <Route path="/eventos" element={<Eventos />} />
            {/* <Route path="/contato" element={<Contato />} /> */}
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
