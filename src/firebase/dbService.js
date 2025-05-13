import { db } from "./firebaseConfig";
import { arrayUnion, collection, doc, getDocs, updateDoc } from "firebase/firestore";

export const buscarDados = async () => {
  const querySnapshot = await getDocs(collection(db, "tutoriais"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const enviarDados = async (module, name, link, newDate) => {
  const items = "items";
  try {
    await updateDoc(doc(db, "tutoriais", module), {
      [items]: arrayUnion({ name, link, newDate }),
    });
    return(true)
  } catch (error) {
    alert("Erro ao enviar dados.");
    return(true)
  }
};
