// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA5oxvt-qvn44RkAkWxWGZyu6fLeGxW2c",
  authDomain: "fitness-buddy-fe9ce.firebaseapp.com",
  projectId: "fitness-buddy-fe9ce",
  storageBucket: "fitness-buddy-fe9ce.appspot.com",
  messagingSenderId: "114171983837",
  appId: "1:114171983837:web:b199c365a2bf6176606834",
  measurementId: "G-WJPPCXPWCQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export function to initialize firebase.
export const initFirebase = () => {
  return app;
};
