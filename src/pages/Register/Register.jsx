import { Link, useNavigate } from "react-router";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import background from "./background.svg";
import { useEffect, useState } from "react";
import { auth, login, register } from "../../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import "./Register.scss";
import AdvicePopup from "../../components/AdvicePopup/AdvicePopup";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adviceEmail, setAdviceEmail] = useState("");
  const [advicePassword, setAdvicePassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleClickRegister = async (e) => {
    e.preventDefault();
    if (email === "") {
      setAdviceEmail("Preencha o campo de email");
      setAdvicePassword("");
      return;
    }
    if (password === "") {
      setAdvicePassword("Preencha o campo de senha");
      setAdviceEmail("");
      return;
    }
    setAdviceEmail("");
    setAdvicePassword("");

    try {
      await register(email, password);
      navigate("/login");
      console.log("Registro realizado com sucesso!");
    } catch (err) {
      setAdvicePopupActive(true);
      setAdvicePopupText("Email já cadastrado ou inválido");
    }
  };

  const [advicePopupActive, setAdvicePopupActive] = useState(false);
  const [advicePopupText, setAdvicePopupText] = useState("");

  return (
    <div className="register">
      {advicePopupActive && (
        <AdvicePopup
          advicePopupActive={advicePopupActive}
          setAdvicePopupActive={setAdvicePopupActive}
          advicePopupText={advicePopupText}
        />
      )}
      <div className="register__bakground">
        <img src={background} alt="Logo Magazord" />
      </div>
      <div className="register__form">
        <h1>Tutoriais de Produto/Front</h1>
        <p>Crie sua conta</p>
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
          <fieldset>
            <Label label="Senha" />
            <Input
              setValue={setPassword}
              value={password}
              type="password"
              placeholder="Digite sua senha"
            />
            <span>{advicePassword}</span>
          </fieldset>
          <button onClick={handleClickRegister} type="submit">
            Criar conta
          </button>
          <Link to="/login">Já possuo conta</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
