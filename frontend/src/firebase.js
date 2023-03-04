// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, RecaptchaVerifier, browserSessionPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy6fQDfpy3a8PjIHkDvJsJ6wF5Y5B07ng",
  authDomain: "clash-of-codes-e9e44.firebaseapp.com",
  projectId: "clash-of-codes-e9e44",
  storageBucket: "clash-of-codes-e9e44.appspot.com",
  messagingSenderId: "50703450811",
  appId: "1:50703450811:web:cbc4056627f32a51b95f9e",
  measurementId: "G-LWPNJPPX8W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
auth.setPersistence(browserSessionPersistence)


if (typeof window !== "undefined") {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "captcha",
    {
      size: "invisible",
      callback: (_) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
    },
    auth
  );
}
