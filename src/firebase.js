import {getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyADtrHme01vIzTtxZQIEQGFkxSUIhXnXqg",
//   authDomain: "chat-1c875.firebaseapp.com",
//   projectId: "chat-1c875",
//   storageBucket: "chat-1c875.appspot.com",
//   messagingSenderId: "860898275740",
//   appId: "1:860898275740:web:0220db56a8b4a525085859"
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4eIQZ4L-FpqMxpmxFW6EgPn9QX4yNw4I",
  authDomain: "chatx-23cf8.firebaseapp.com",
  projectId: "chatx-23cf8",
  storageBucket: "chatx-23cf8.appspot.com",
  messagingSenderId: "916008159529",
  appId: "1:916008159529:web:8e2f3174f9768c1a4dcf38"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();