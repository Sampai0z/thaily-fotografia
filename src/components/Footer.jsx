import c from "../styles/components/Footer.module.css";
import logo from "../assets/logoDark.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={c.footer}>
      <div className={c.footer_content}>
        <div>
          <Link to="/">
            <img src={logo} alt="Thaily Fotografia Logo" className={c.image} />
          </Link>
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
                ENSAIOS
              </Link>
            </li>
            <li>
              <Link to="/eventos" className={c.link}>
                EVENTOS
              </Link>
            </li>
            <li>
              <Link to="#" className={c.link}>
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
                <i className="fa-brands fa-whatsapp"></i>
                <a
                  href="https://wa.me/5511948413121"
                  className={c.a}
                  target="_blank"
                >
                  &nbsp; (12)93456-7890
                </a>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
                <a
                  href="https://www.instagram.com/thaily_fotografia/"
                  className={c.a}
                  target="_blank"
                >
                  &nbsp; thaily_fotografia
                </a>
              </li>
            </ul>
            <ul className={c.contatoLista}>
              <li>
                <i className="fa-brands fa-facebook "></i>
                <a
                  href="https://www.facebook.com/profile.php?id=61560249990121&locale=pt_BR]"
                  className={c.a}
                  target="_blank"
                >
                  &nbsp; thaily_fotografia
                </a>
              </li>
              <li>
                <i className="fa-brands fa-youtube"></i>
                <a
                  href="https://www.youtube.com/@thailyfotografa"
                  className={c.a}
                  target="_blank"
                >
                  &nbsp; thaily_fotografia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={c.line}></div>
      <div className={c.direitos}>
        <div>©2025 All Rights Reserved.</div>
        <div>DuoWave.</div>
      </div>
    </footer>
  );
}
