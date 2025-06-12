import React from "react";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Theme from "../Theme/Theme";
import { logout } from "../../firebase/auth";

export default function Header({setItems, data, userActive}) {
  console.log(userActive)
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

  return (
    <header className="header">
      <div className="header__search">
        <input onChange={(e) => handleSearch(e.target.value)} placeholder="Buscar tutoriais"></input>
        <div>
          <CiSearch />
        </div>
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
