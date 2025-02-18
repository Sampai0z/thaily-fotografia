import c from "../styles/components/NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useState } from "react";
import { Backdrop } from "@mui/material";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavBar = () => {
    setIsActive(!isActive);
  };

  const [open, setOpen] = useState(false);

  const toggleAll = () => {
    toggleNavBar();
    handleToggle();
  };

  const handleClose = () => {
    setOpen(false);
    toggleNavBar();
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className={c.header}>
        <Link to="/">
          <img src={logo} alt="teste" />
        </Link>
        <ul className={c.navBar}>
          <li>
            <Link to="/" className={c.link}>
              Início
            </Link>
          </li>

          <li>
            <Link to="Trabalhos" className={c.link}>
              Trabalhos
            </Link>
          </li>
          <li>
            <Link to="/contato" className={c.link}>
              Contato
            </Link>
          </li>
          <li>
            <Link to="/sobre" className={c.link}>
              Sobre
            </Link>
          </li>
        </ul>
        {/* responsive nav-bar */}

        <div className={c.div_nav_responsive} onClick={toggleAll}>
          <div className={isActive ? `${c.icon} ${c.iconActive}` : c.icon}>
            <div className={`${c.hamburguer} ${c.hamburguerIcon}`}></div>
          </div>

          <div
            className={
              isActive ? `${c.menu} ${c.menuOpen}` : `${c.menu} ${c.menuClose}`
            }
          >
            <div className={c.navBar_responsive}>
              <Link to="/" className={c.link_responsive} onClick={toggleAll}>
                Home
              </Link>
              <Link
                to="/trabalhos"
                className={c.link_responsive}
                onClick={toggleAll}
              >
                Trabalhos
              </Link>
              <Link
                to="/contato"
                className={c.link_responsive}
                onClick={toggleAll}
              >
                Contato
              </Link>
              <Link
                to="/sobre"
                className={c.link_responsive}
                onClick={toggleAll}
              >
                Sobre
              </Link>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer - 1251,
                }}
                open={open}
                onClick={handleClose}
              ></Backdrop>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
