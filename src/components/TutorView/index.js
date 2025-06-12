import React, { useEffect, useState } from "react";
import "./TutorView.css";
import IconeCopiar from "./icone-copiar.png";
import IconeCopiado from "./icone-copiado.png";
import iconeLupa from "./icone-lupa.png";
import { FaRegTrashAlt } from "react-icons/fa";
import { excluirItemDoArray } from "../../firebase/dbService";
import Theme from "../Theme/Theme";

export default function TutorView({
  moduleSelected,
  data,
  userIsAdmin,
  items,
  setItems
}) {

  useEffect(() => {
    const module = data.find((m) => m.id === moduleSelected);
    if (module && module.items) {
      setItems(module.items);
    } else {
      setItems([]);
    }
  }, [moduleSelected]);

  function handleClickLink(e) {
    const itemClicado = e.currentTarget;

    const linkDoItem = itemClicado.dataset.link;
    navigator.clipboard.writeText(linkDoItem);

    itemClicado.querySelector("span").textContent = "Link Copiado";
    itemClicado.querySelector("img").setAttribute("src", IconeCopiado);

    setTimeout(() => {
      itemClicado.querySelector("span").textContent = "Copiar Link";
      itemClicado.querySelector("img").setAttribute("src", IconeCopiar);
    }, 3000);
  }

  

  const handleTrash = (value) => {
    excluirItemDoArray(moduleSelected, value);
  };

  return (
    <div className="tutoriais-sublista">
      <div className="sublista-titulo">
        <h1>Lista de Tutoriais</h1>
      </div>
      <div className="sublista">
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <div className="tutorial-topo">
                  <a href={item.link} className="tutorial-link" target="_blank">
                    {item.name}
                    {item.newDate &&
                      (() => {
                        const datePast = item.newDate.toDate();
                        const today = new Date();
                        const diffEmMs = today - datePast;
                        const diffEmDias = diffEmMs / (1000 * 60 * 60 * 24);

                        if (diffEmDias <= 30) {
                          return <span>Novidade</span>;
                        } else {
                          return null;
                        }
                      })()}
                  </a>
                  <div>
                    <div
                      onClick={(e) => handleClickLink(e)}
                      data-link={item.link}
                      className="copiar-link"
                    >
                      <div className="icone-copiar">
                        <img src={IconeCopiar} alt="Icone de Copiar" />
                      </div>
                      <span>Copiar Link</span>
                    </div>
                    {userIsAdmin === "admin" && (
                      <div className="trash" onClick={() => handleTrash(item)}>
                        <FaRegTrashAlt />
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
