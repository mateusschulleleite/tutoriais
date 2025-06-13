import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Load from "./components/Load";
import Tutors from "./components/Tutors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/auth";
import { useNavigate } from "react-router";
import { buscarDados } from "./firebase/dbService";
import { buscarUsers } from "./firebase/dbService";
import Header from "./components/Header";

function App() {
  const navigate = useNavigate();
  const [newTutor, setNewTutor] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState();
  const [userActive, setUserActive] = useState();
  const [items, setItems] = useState([]);
  const [moduleSelected, setModuleSelected] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        const carregarUsers = async () => {
          await buscarUsers().then((dadosBuscados) => {
            const userLogged = dadosBuscados.filter(
              (dado) => dado.uid === user.uid
            );
            setUserActive(userLogged[0]);
            setUserIsAdmin(userLogged[0] ? userLogged[0].type : false);
          });
        };

        carregarUsers();
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const carregarTarefas = async () => {
      await buscarDados().then((dadosBuscados) => {
        setData(dadosBuscados);
      });
    };

    carregarTarefas();
  }, []);

  return (
    <div className="App">
      <Load />
      <Header
        data={data}
        setItems={setItems}
        userActive={userActive}
        userIsAdmin={userIsAdmin}
      />
      <Tutors
        moduleSelected={moduleSelected}
        setModuleSelected={setModuleSelected}
        items={items}
        setItems={setItems}
        setNewTutor={setNewTutor}
        data={data}
        userIsAdmin={userIsAdmin}
      />
      <Footer />
    </div>
  );
}

export default App;
