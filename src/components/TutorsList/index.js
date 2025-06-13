import React from "react";
import "./TutorsList.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function TutorsList({
  data,
  setModuleSelected,
}) {
  const handleModuleClick = (module) => {
    setModuleSelected(module);
  };
  const modules = data.map((m) => m.id);
  return (
    <div className="tutoriais-lista">
      <div className="tutoriais-titulo">
        <h1>Lista de Módulos</h1>
      </div>
      <ul className="lista-de-tutoriais">
        {modules.map((module, index) => {
          return (
            <li onClick={() => handleModuleClick(module)} key={index}>
              <div className="lista-titulo">
                <h2 style={{ textTransform: "capitalize" }}>{module}</h2>
                <div className="seta">
                  <MdOutlineArrowForwardIos />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
