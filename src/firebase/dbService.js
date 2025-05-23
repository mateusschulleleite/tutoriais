import { db } from "./firebaseConfig";
import { arrayRemove, arrayUnion, collection, doc, getDocs, updateDoc } from "firebase/firestore";

export const buscarUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

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

export const excluirItemDoArray = async (moduleSelected, itemParaRemover) => {
  try {
    const docRef = doc(db, "tutoriais", moduleSelected);

    await updateDoc(docRef, {
      items: arrayRemove(itemParaRemover)
    });

    window.location.reload();
  } catch (error) {
    alert("Erro ao remover item");
  }
}