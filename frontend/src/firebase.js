import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDIc9LmnRe0PJuRqYsalFZ-DNLFYHsKcDQ",
//   authDomain: "ifound-42bb7.firebaseapp.com",
//   databaseURL: "https://ifound-42bb7-default-rtdb.firebaseio.com",
//   projectId: "ifound-42bb7",
//   storageBucket: "ifound-42bb7.appspot.com",
//   messagingSenderId: "218095792605",
//   appId: "1:218095792605:web:b737a5aee82d260eb04634",
//   measurementId: "G-36N9Y5WXZ5"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDIc9LmnRe0PJuRqYsalFZ-DNLFYHsKcDQ",
  authDomain: "ifound-42bb7.firebaseapp.com", 
  databaseURL: "https://ifound-42bb7-default-rtdb.firebaseio.com",
  projectId: "ifound-42bb7",
  storageBucket: "ifound-42bb7.appspot.com",
  messagingSenderId: "218095792605",
  appId: "1:218095792605:web:8b9687746dec6202b04634",
  measurementId: "G-2ENLYJEYXZ"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
