// Importando o Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2IvpJKH_AGPqwoZOYFujhau8gemcI5Ak",
  authDomain: "tutoriais-front.firebaseapp.com",
  projectId: "tutoriais-front",
  storageBucket: "tutoriais-front.firebasestorage.app",
  messagingSenderId: "977355259303",
  appId: "1:977355259303:web:df1fbf4018a2c2ae864a82",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

