// src/services/auth.js
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase"; // Importa o app do Firebase
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const auth = getAuth(app);

// Fazer login
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Criar conta
export const register = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    try {
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: user.email,
        uid: user.uid,
        type: 'default'
      })

      return true;
    } catch (firestoreError) {
      console.error("Erro ao salvar no Firestore:", firestoreError.message);
      try {
        await deleteUser(user);
        alert("Erro ao criar conta, entre em contato com o suporte");
      } catch (deleteError) {
        console.error("Erro ao deletar usuário:", deleteError.message);
      }
      throw firestoreError;
    }
  } catch (authError) {
    console.error("Erro ao registrar:", authError.code, authError.message);
    throw authError;
  }
};

// Recuperar senha
export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("Usuário deslogado com sucesso!");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
};

export { auth };
