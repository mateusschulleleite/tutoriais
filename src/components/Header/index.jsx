import React, { useState } from "react";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Theme from "../Theme/Theme";
import { logout } from "../../firebase/auth";
import { MdAddToPhotos } from "react-icons/md";
import { enviarDados } from "../../firebase/dbService";

export default function Header({ setItems, data, userActive, userIsAdmin }) {
  const [module, setModule] = useState("banners");
  const [name, setName] = useState();
  const [link, setLink] = useState();

  const handleSearch = (value) => {
    const dados = [];

    if (value) {
      data.forEach((d) => {
        const encontrados = d.items.filter((i) =>
          i.name.toLowerCase().includes(value.toLowerCase())
        );
        dados.push(...encontrados);
      });
      setItems(dados);
    } else {
      setItems([]);
    }
  };

  const handleOpenNewTutorial = () => {
    document
      .querySelector(".header__search--add-container")
      .classList.add("open");
  };

  const handleCloseNewTutorial = () => {
    document
      .querySelector(".header__search--add-container")
      .classList.remove("open");
    setModule("banners");
    setName("");
    setLink("");
  };

  const modules = data.map((d) => {
    return d.id;
  });

  const enviarTutorial = async () => {
    if (name === "" || name === undefined || link === "") {
      return;
    }
    const newDate = new Date();
    const dados = await enviarDados(module, name, link, newDate);
    setModule("banners");
    setName();
    setLink();
    if (dados) {
      window.location.reload();
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.nextElementSibling.style.display = "block";
    } else {
      e.target.nextElementSibling.style.display = "none";
    }
  };

  return (
    <header className="header">
      <div className="header__search">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar tutoriais"
        ></input>
        <div className="header__search--icon">
          <CiSearch />
        </div>
        {userIsAdmin === "admin" && (
          <div
            onClick={() => handleOpenNewTutorial()}
            title="Adicionar tutorial"
            className="header__search--add"
          >
            <MdAddToPhotos />
            <div className="header__search--add-container">
              <fieldset>
                <label>Selecione o módulo</label>
                <select
                  value={module}
                  onChange={(e) => setModule(e.target.value)}
                  style={{ textTransform: "capitalize" }}
                >
                  {modules.map((module, index) => {
                    return (
                      <option
                        value={module}
                        key={index}
                        style={{ textTransform: "capitalize" }}
                      >
                        {module}
                      </option>
                    );
                  })}
                </select>
              </fieldset>
              <fieldset>
                <label>Nome do tutorial</label>
                <input
                  value={name}
                  onBlur={(e) => handleBlur(e)}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <p>Por favor, preencha o nome</p>
              </fieldset>
              <fieldset>
                <label>Link do tutorial</label>
                <input
                  value={link}
                  onBlur={(e) => handleBlur(e)}
                  onChange={(e) => setLink(e.target.value)}
                ></input>
                <p>Por favor, preencha o link</p>
              </fieldset>
              <div>
                <button
                  onClick={() => {
                    enviarTutorial();
                  }}
                  className="header__search--add-new"
                >
                  Cadastrar
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseNewTutorial();
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="header__options">
        <div className="header__options--image">
          <FaUserCircle />
        </div>
        <div className="header__options--name">
          <h3>{userActive?.name || "Usuário"}</h3>
        </div>
        <div onClick={() => logout()} className="header__options--logout">
          <IoLogOutOutline />
          <span>Sair</span>
        </div>
        <Theme />
      </div>
    </header>
  );
}
