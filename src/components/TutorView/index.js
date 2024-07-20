import React, { useEffect, useState } from "react";
import "./TutorView.css";
import IconeCopiar from "./icone-copiar.png";
import IconeCopiado from "./icone-copiado.png";

export default function TutorView(props) {
  const [subtutorialRenderizado, setSubtutorialRenderizado] = useState([]);

  useEffect(() => {
    if (props.subtutoriais && typeof props.subtutoriais === "object") {
      setSubtutorialRenderizado(Object.values(props.subtutoriais));
    }
  }, [props.subtutoriais]);

  function handleClickLink(e) {
    const itemClicado = e.currentTarget;

    const linkDoItem = itemClicado.dataset.link;
    navigator.clipboard.writeText(linkDoItem)

    itemClicado.querySelector('span').textContent = 'Link Copiado';
    itemClicado.querySelector('img').setAttribute('src', IconeCopiado)

    setTimeout(() => {
      itemClicado.querySelector('span').textContent = 'Copiar Link';
      itemClicado.querySelector('img').setAttribute('src', IconeCopiar)
    }, 3000)
  }

  return (
    <div className="tutoriais-sublista">
      <div className="sublista-titulo">
        <h1>Links</h1>
      </div>
      <div className="sublista">
        <ul>
          {subtutorialRenderizado.map((elemento, index) => {
            return index !== 0 && (
              <li index={index}>
                <a className="tutorial-link" target="_blank" href={elemento.link}>{elemento.nome}</a>
                <div onClick={(e) => handleClickLink(e)} data-link={elemento.link} className="copiar-link">
                  <div className="icone-copiar">
                    <img src={IconeCopiar} alt="Icone de Copiar" />
                  </div>
                  <span>Copiar Link</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
