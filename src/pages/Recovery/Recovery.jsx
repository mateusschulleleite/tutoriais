import { Link, useNavigate } from "react-router";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import "./Recovery.scss";
import background from "./background.svg";
import { useEffect, useState } from "react";
import { auth, resetPassword } from "../../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import AdvicePopup from "../../components/AdvicePopup/AdvicePopup";

const Recovery = () => {
  const [email, setEmail] = useState("");
  const [adviceEmail, setAdviceEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleClickRecovery = async (e) => {
    e.preventDefault();
    if (email === "") {
      setAdviceEmail("Preencha o campo de email");
      return;
    }
    setAdviceEmail("");

    try {
      await resetPassword(email);
      alert("Email de recuperação enviado com sucesso!");
      setEmail("");
    } catch (error) {
      setAdvicePopupActive(true);
      setAdvicePopupText("Email inválido");
    }
  };

  const [advicePopupActive, setAdvicePopupActive] = useState(false);
  const [advicePopupText, setAdvicePopupText] = useState("");

  return (
    <div className="recovery">
      {advicePopupActive && (
        <AdvicePopup
          advicePopupActive={advicePopupActive}
          setAdvicePopupActive={setAdvicePopupActive}
          advicePopupText={advicePopupText}
        />
      )}
      <div className="recovery__bakground">
        <img src={background} alt="Logo Magazord" />
      </div>
      <div className="recovery__form">
        <h1>Tutoriais de Produto/Front</h1>
        <p>Recuperar senha</p>
        <form>
          <fieldset>
            <Label label="Email" />
            <Input
              required={true}
              setValue={setEmail}
              value={email}
              type="email"
              placeholder="Digite seu email"
            />
            <span>{adviceEmail}</span>
          </fieldset>
          <button onClick={handleClickRecovery} type="submit">
            Entrar
          </button>
          <Link to="/login">Já possuo conta</Link>
        </form>
        <div>
          <span>Nao possui uma conta?</span>
          <Link to="/register">Criar conta</Link>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
