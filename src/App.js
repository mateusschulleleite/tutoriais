import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Load from "./components/Load";
import Tutors from "./components/Tutors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/auth";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="App">
      <Load />
      <Tutors />
      <Footer />
    </div>
  );
}

export default App;
