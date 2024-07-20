import React from "react";
import "./TutorsList.css";
import seta from "./seta.png";

export default function TutorsList(props) {
  const handleItemClick = (index) => {
    props.setItemLista(index);
    props.setSubtutoriais(props.tutoriais[index]) 
  };

  return (
    <div className="tutoriais-lista">
      <div className="tutoriais-titulo">
        <h1>Lista de Tutoriais</h1>
      </div>
      <ul className="lista-de-tutoriais">
        {props.tutoriais.map((tutorial, index) => {
          return (
            <li onClick={() => handleItemClick(index)} index={index}>
              <div className="lista-titulo">
                <h2>{tutorial.nome}</h2>
                <div className="seta">
                  <img src={seta} alt="Icone de seta" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
