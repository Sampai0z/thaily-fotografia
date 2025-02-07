import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./layouts/HomePage.jsx";
import Ensaios from "./layouts/Ensaios.jsx";
import Footer from "./components/Footer.jsx";
import Sobre from "./layouts/Sobre.jsx";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ensaios" element={<Ensaios />} />
            <Route path="/sobre" element={<main className="mainSobre"><Sobre /></main>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
