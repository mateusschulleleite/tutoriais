// src/services/auth.js
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase"; // Importa o app do Firebase

const auth = getAuth(app);

// Fazer login
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Criar conta
export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Recuperar senha
export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export { auth };
