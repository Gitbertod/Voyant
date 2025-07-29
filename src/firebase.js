// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS0jEgg3o8ZS41JYeuJxhhpbGmR_cl774",
  authDomain: "auth-voyant.firebaseapp.com",
  projectId: "auth-voyant",
  storageBucket: "auth-voyant.appspot.com",
  messagingSenderId: "910751105845",
  appId: "1:910751105845:web:e858948e1328d6e82c427c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);