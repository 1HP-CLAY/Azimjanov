// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1hJ******h3zGfRtP2vLU",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234efgh5678",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт Firebase Authentication
export const auth = getAuth(app);
