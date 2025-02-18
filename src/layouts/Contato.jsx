import c from "../styles/layouts/Contato.module.css";
import { Link } from "react-router-dom";
import Thaily from "/Thaily.jpg";
import PropTypes from "prop-types";

export default function Contato() {
  return (
    <div className={c.container}>
      <div className={c.card}>
        <div className={c.cardContent}>
          <img className={c.image} src={Thaily} alt="thaily perfil" />
          <h1 className={c.title}>Entre em Contato</h1>
          <p className={c.description}>
            Adoraria ouvir de você! Sinta-se à vontade para entrar em contato
            por qualquer um dos seguintes métodos:
          </p>
          <div className={c.contactList}>
            <ContactItem
              icon={<i className="fa-brands fa-whatsapp"></i>}
              text="+55 (11) 93456-7890"
              href="https://wa.me/5511948413121"
            />
            <ContactItem
              icon={<i className="fa fa-envelope"></i>}
              text="hello@photographername.com"
              href="mailto:hello@photographername.com"
            />
            <ContactItem
              icon={<i className="fa-brands fa-instagram"></i>}
              text="@thaily_fotografia"
              href="https://instagram.com/thaily_fotografia"
            />
          </div>
        </div>
        <div className={c.footer}>
          <p className={c.footerText}>
            Geralmente, respondo dentro de 24 horas. Estou ansiosa para me
            conectar com você!
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, text, href }) {
  return (
    <Link href={href} className={c.contactItem}>
      <div className={c.icon}>{icon}</div>
      <span>{text}</span>
    </Link>
  );
}

ContactItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
