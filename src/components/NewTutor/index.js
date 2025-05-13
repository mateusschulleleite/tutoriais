import "./NewTutor.css";
import { enviarDados } from "../../firebase/dbService";
import { useState } from "react";

const NewTutor = ({ setNewTutor, data }) => {
  const [module, setModule] = useState("relatorios");
  const [name, setName] = useState();
  const [link, setLink] = useState();
  const [loading, setLoading] = useState(false);

  const modules = data.map((d) => {
    return d.id;
  });

  const enviarTutorial = async () => {
    if(name === '' || name === undefined || link === '' || link === '') {
      return;
    }
    setLoading(true);
    const newDate = new Date();
    const dados = await enviarDados(module, name, link, newDate);
    setModule("banners");
    setName();
    setLink();
    if (dados) {
      setLoading(false);
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.nextElementSibling.style.display = "block";
    } else {
      e.target.nextElementSibling.style.display = "none";
    }
  };

  if (loading)
    return (
      <div className="newTutor">
        <div style={{ width: "max-content" }} className="newTutor__container">
          <p style={{ marginBottom: "60px" }}>Cadastrando</p>
          <svg viewBox="0 0 240 240" height="240" width="240" class="pl">
            <circle
              stroke-linecap="round"
              stroke-dashoffset="-330"
              stroke-dasharray="0 660"
              stroke-width="20"
              stroke="#000"
              fill="none"
              r="105"
              cy="120"
              cx="120"
              class="pl__ring pl__ring--a"
            ></circle>
            <circle
              stroke-linecap="round"
              stroke-dashoffset="-110"
              stroke-dasharray="0 220"
              stroke-width="20"
              stroke="#000"
              fill="none"
              r="35"
              cy="120"
              cx="120"
              class="pl__ring pl__ring--b"
            ></circle>
            <circle
              stroke-linecap="round"
              stroke-dasharray="0 440"
              stroke-width="20"
              stroke="#000"
              fill="none"
              r="70"
              cy="120"
              cx="85"
              class="pl__ring pl__ring--c"
            ></circle>
            <circle
              stroke-linecap="round"
              stroke-dasharray="0 440"
              stroke-width="20"
              stroke="#000"
              fill="none"
              r="70"
              cy="120"
              cx="155"
              class="pl__ring pl__ring--d"
            ></circle>
          </svg>
        </div>
      </div>
    );

  return (
    <div className="newTutor">
      <div className="newTutor__container">
        <p>Cadastrar novo tutorial</p>
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
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <p>Por favor, preencha o nome</p>
        </fieldset>
        <fieldset>
          <label>Link do tutorial</label>
          <input
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => setLink(e.target.value)}
          ></input>
          <p>Por favor, preencha o link</p>
        </fieldset>
        <div className="newTutor__container-buttons">
          <div
            onClick={() => {
              enviarTutorial();
            }}
            className="newTutor__container-buttons--new"
          >
            Cadastrar
          </div>
          <div
            onClick={() => {
              setNewTutor(false);
            }}
            className="newTutor__container-buttons--cancel"
          >
            Cancelar
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTutor;
