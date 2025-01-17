import c from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function NavBar() {
  return (
    <>
      <header className={c.header}>
        <img src={logo} alt="teste" />
        <ul className={c.navBar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ensaios">Ensaios</Link>
          </li>
          <li>
            <Link to="/eventos">Eventos</Link>
          </li>
          <li>
            <Link to="/eventos">Eventos</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
