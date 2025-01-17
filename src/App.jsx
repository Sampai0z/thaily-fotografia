import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./layouts/HomePage.jsx";
import Ensaios from "./layouts/Ensaios.jsx";
// import NewMeetupsPage from "./pages/NewMeetup.js";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ensaios" element={<Ensaios />} />
            {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
