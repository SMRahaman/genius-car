import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../FirebaseConfig/FirebaseConfig";
export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  const googleProvider = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const facebookProvider = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      onSubscribe();
    };
  }, []);
  const authinfo = {
    googleProvider,
    register,
    login,
    facebookProvider,
    user,
    logout,
  };
  return (
    <div>
      <UserContext.Provider value={authinfo}>{children}</UserContext.Provider>
    </div>
  );
};

export default AuthContext;
