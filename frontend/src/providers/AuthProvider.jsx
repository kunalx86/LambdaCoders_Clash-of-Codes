import { initFirebase } from "@/firebase";
import { getAuth, onAuthStateChanged, signInWithPhoneNumber } from "@firebase/auth";

import { createContext, useState, useEffect, useContext } from "react";

const auth = getAuth();

const AuthContext = createContext({
  user: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  loginWithPhone: async ({ phoneNo }) => {},
  confirmOTP: async ({ otp }) => {},
});

export default function AuthProvider({ children }) {
  const [state, setState] = useState({
    user: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (!user) return;
      setState((s) => ({
        ...s,
        user,
      }));
    });
  }, []);

  const loginWithPhone = async ({ phoneNo }) => {
    console.log(auth.verify)
    console.log(phoneNo)
    const confirmationresult = await signInWithPhoneNumber(auth, phoneNo);
    window.confirmationresult = confirmationresult;
  };

  const confirmOTP = async ({ otp }) => {
    const user = await window.confirmationresult.confirm(otp);
    console.log(await user.user.getIdToken());
  };

  const isLoggedIn = state.user !== null;

  return (
    <AuthContext.Provider
      value={{
        ...state,
        isLoggedIn,
        loginWithPhone,
        confirmOTP,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
