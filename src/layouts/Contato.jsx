import Thaily from "/contato.jpg";
import c from "../styles/layouts/Contato.module.css";

export default function Contato() {
  return (
    <div className={c.container}>
      <div className={c.cardWrapper}>
        <div className={c.decorPurple} />
        <div className={c.decorRose} />

        <div className={c.card}>
          <div className={c.profileWrapper}>
            <div className={c.profileRing} />
            <div className={c.profileInner} />
            <div className={c.profileImageWrapper}>
              <img
                src={Thaily}
                alt="Profile photo"
                width={200}
                height={200}
                className={c.profileImage}
              />
            </div>
          </div>

          <div className={c.headerContent}>
            <h1 className={c.title}>Entre em Contato</h1>
            <p className={c.subtitle}>
              Adoraria ouvir de você! Sinta-se à vontade para entrar em contato
              por qualquer um dos seguintes métodos:
            </p>
          </div>

          <div className={c.contactList}>
            <a
              href="https://wa.me/5511948413121"
              className={c.contactButton}
              target="_blank"
            >
              <div className={`${c.iconWrapper} ${c.whatsappIcon}`}>
                {<i className="fa-brands fa-whatsapp"></i>}
              </div>
              <span className={c.contactText}>+55 (11) 93456-7890</span>
            </a>

            <a
              href="mailto:thailyfotografa@gmail.com"
              className={c.contactButton}
              target="_blank"
            >
              <div className={`${c.iconWrapper} ${c.emailIcon}`}>
                {<i className="fa fa-envelope"></i>}
              </div>
              <span className={c.contactText}>thailyfotografa@gmail.com</span>
            </a>
            <a
              href="https://instagram.com/thaily_fotografia"
              className={c.contactButton}
              target="_blank"
            >
              <div className={`${c.iconWrapper} ${c.instaIcon}`}>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <span className={c.contactText}>@thaily_fotografia</span>
            </a>
          </div>

          <div className={c.footer}>
            <p className={c.footerText}>
              <span className={c.footerIcon}>
                <i className="fa fa-camera"></i>
              </span>
              <span>
                Geralmente, respondo dentro de 24 horas. Estou ansiosa para me
                conectar com você!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
