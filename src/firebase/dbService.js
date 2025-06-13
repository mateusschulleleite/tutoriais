import { db } from "./firebaseConfig";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const buscarUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const buscarDados = async () => {
  const querySnapshot = await getDocs(collection(db, "tutoriais"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const buscarAtividades = async () => {
  const querySnapshot = await getDocs(collection(db, "activities"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const enviarDados = async (module, name, link, newDate, user) => {
  const items = "items";
  try {
    await updateDoc(doc(db, "tutoriais", module), {
      [items]: arrayUnion({ name, link, newDate }),
    });

    try {
      await addDoc(collection(db, "activities"), {
        name: name,
        date: newDate,
        readBy: [],
        user: user,
      });
    } catch (error) {
      console.log(error);
    }
    return true;
  } catch (error) {
    alert("Erro ao enviar dados.");
    return true;
  }
};

export const excluirItemDoArray = async (moduleSelected, itemParaRemover) => {
  try {
    const docRef = doc(db, "tutoriais", moduleSelected);

    await updateDoc(docRef, {
      items: arrayRemove(itemParaRemover),
    });

    window.location.reload();
  } catch (error) {
    alert("Erro ao remover item");
  }
};
