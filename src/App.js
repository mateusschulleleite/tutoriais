import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Load from "./components/Load";
import Tutors from "./components/Tutors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/auth";
import { useNavigate } from "react-router";
import NewTutor from "./components/NewTutor";
import { buscarDados } from "./firebase/dbService";

function App() {
  const navigate = useNavigate();
  const [newTutor, setNewTutor] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

   const [data, setData] = useState([])
  
    useEffect(() => {
      const carregarTarefas = async () => {
        await buscarDados().then((dadosBuscados) => {
          setData(dadosBuscados)
        });
      };
    
      carregarTarefas()
    }, []);

  return (
    <div className="App">
      <Load />
      {newTutor && <NewTutor setNewTutor={setNewTutor} data={data} />}
      <Tutors setNewTutor={setNewTutor} data={data} />
      <Footer />
    </div>
  );
}

export default App;
