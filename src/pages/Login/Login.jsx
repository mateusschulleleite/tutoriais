import { Link, useNavigate } from "react-router";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import "./Login.scss";
import background from "./background.svg";
import { useEffect, useState } from "react";
import { auth, login } from "../../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import AdvicePopup from "../../components/AdvicePopup/AdvicePopup";

const Login = () => {
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

  const handleClickLogin = async (e) => {
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
      await login(email, password);
      console.log("Login realizado com sucesso!");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      setAdvicePopupActive(true);
      setAdvicePopupText("Email ou senha inválidos");
    }
  };

  const [advicePopupActive, setAdvicePopupActive] = useState(false);
  const [advicePopupText, setAdvicePopupText] = useState("");

  return (
    <div className="login">
      {advicePopupActive && (
        <AdvicePopup
          advicePopupActive={advicePopupActive}
          setAdvicePopupActive={setAdvicePopupActive}
          advicePopupText={advicePopupText}
        />
      )}
      <div className="login__bakground">
        <img src={background} alt="Logo Magazord" />
      </div>
      <div className="login__form">
        <h1>Tutoriais de Produto/Front</h1>
        <p>Entre na sua conta</p>
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
          <button onClick={handleClickLogin} type="submit">
            Entrar
          </button>
          <Link to="/recovery">Esqueci a senha</Link>
        </form>
        <div>
          <span>Nao possui uma conta?</span>
          <Link to="/register">Criar conta</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
