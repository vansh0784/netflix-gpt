// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR8d4nFnwavzlSRMR1xp7dIopqnPhY4Oo",
  authDomain: "netflix-gpt-7f716.firebaseapp.com",
  projectId: "netflix-gpt-7f716",
  storageBucket: "netflix-gpt-7f716.firebasestorage.app",
  messagingSenderId: "299155490380",
  appId: "1:299155490380:web:07c4426b8a40ce7d1716e9",
  measurementId: "G-764507P282"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
