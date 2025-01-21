import c from "../styles/NavBar.module.css";
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
        <img src={logo} alt="teste" />
        <ul className={c.navBar}>
          <li>
            <Link to="/" className={c.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/ensaios" className={c.link}>
              Ensaios
            </Link>
          </li>
          <li>
            <Link to="/eventos" className={c.link}>
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/eventos" className={c.link}>
              Eventos
            </Link>
          </li>
        </ul>
        {/* responsive nav-bar */}

        <div className={c.div_nav_responsive}>
          <div
            className={isActive ? `${c.icon} ${c.iconActive}` : c.icon}
            onClick={toggleAll}
          >
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
                to="/ensaios"
                className={c.link_responsive}
                onClick={toggleAll}
              >
                Ensaios
              </Link>
              <Link
                to="/eventos"
                className={c.link_responsive}
                onClick={toggleAll}
              >
                Eventos
              </Link>
              <Link
                to="/contact-me"
                className={c.link_responsive}
                onClick={toggleAll}
              >
                Contact
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
