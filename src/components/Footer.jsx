import c from "../styles/Footer.module.css";
import logo from "../assets/logoDark.png";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={c.footer}>
      <div className={c.footer_content}>
        <div>
          <img src={logo} alt="Thaily Fotografia Logo" className={c.image} />
        </div>
        <div className={c.pages}>
          <ul>
            <li>
              <Link to="/" className={c.link}>
                INICIO
              </Link>
            </li>
            <li>
              <Link to="/ensaios" className={c.link}>
                TRABALHOS
              </Link>
            </li>
            <li>
              <Link to="/ensaios" className={c.link}>
                SOBRE
              </Link>
            </li>
          </ul>
        </div>
        <div className={c.contato}>
          <h2>CONTATO:</h2>
          <div className={c.contatoListaDiv}>
            <ul className={c.contatoLista}>
              <li>
                <i className="fa-brands fa-whatsapp"></i> (12)93456-7890
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i> thaily_fotografia
              </li>
            </ul>
            <ul className={c.contatoLista}>
              <li>
                <i className="fa-brands fa-facebook"></i> thaily_fotografia
              </li>
              <li>
                <i className="fa-brands fa-youtube"></i> thaily_fotografia
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <span className={c.line}></span> */}
      <div className={c.line}></div>
      <div className={c.direitos}>
        <div>©2025 All Rights Reserved.</div>
        <div>DuoWave.</div>
      </div>
    </footer>
  );
}
