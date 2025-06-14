import React from "react";
import "./DeleteTutorPopup.scss";

export default function DeleteTutorPopup({ deleteTutor, setDeletePopup }) {
  return (
    <div style={{ top: window.scrollY }} className="deleteTutorPopup">
      <div>
        <p>Tem certeza de que deseja excluir este tutorial?</p>
        <div>
          <button onClick={deleteTutor} className="deleleteTutorPopup--confirm">
            Confirmar
          </button>
          <button
            onClick={() => {
              setDeletePopup(false);
              document.querySelector("body").style.overflowY = "scroll";
              document.querySelector("body").style.paddingRight = "0px";
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
