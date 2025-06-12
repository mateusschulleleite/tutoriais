import React from "react";
import "./TutorsList.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function TutorsList({
  setNewTutor,
  data,
  setModuleSelected,
  userIsAdmin,
}) {
  const handleModuleClick = (module) => {
    setModuleSelected(module);
  };
  const modules = data.map((m) => m.id);
  return (
    <div className="tutoriais-lista">
      {userIsAdmin === "admin" && (
        <button
          onClick={() => {
            setNewTutor(true);
          }}
          class="cssbuttons-io-button"
        >
          Cadastrar Novo Tutorial
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      )}
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
