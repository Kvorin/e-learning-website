import React, { useState, useContext, useEffect } from "react";
import reducer from "./reducer";
import { auth, db } from "../firebase/firebase";
import { EndScreen } from "../components";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  //tests components
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [secondScore, setSecondScore] = useState(0);
  const [message, setMessage] = useState("");

  const setupUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const loginUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logoutUser = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsuscribe;
  }, []);

  const value = {
    currentUser,
    loginUser,
    setupUser,
    logoutUser,
    gameState,
    setGameState,
    userName,
    setUserName,
    score,
    setScore,
    message,
    setMessage,
    currentUserEmail,
    setCurrentUserEmail,
    secondScore,
    setSecondScore,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
