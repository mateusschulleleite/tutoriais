import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const buscarDados = async () => {
  const querySnapshot = await getDocs(collection(db, "Tutoriais"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
