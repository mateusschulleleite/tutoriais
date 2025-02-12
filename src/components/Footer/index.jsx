import React from "react";
import "./Footer.css";
import logoMagazord from "../Footer/magazord-logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo-magazord">
        <img src={logoMagazord} alt="Logo da Magazord" />
      </div>
      <p>Desenvolvido por Mateus Schulle Leite</p>
    </footer>
  );
}
