// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDFGH5gpoJSUlbPwmEgHTqjWaU4FSLwD4",
  authDomain: "mern-book-inventory1.firebaseapp.com",
  projectId: "mern-book-inventory1",
  storageBucket: "mern-book-inventory1.appspot.com",
  messagingSenderId: "861119746051",
  appId: "1:861119746051:web:19d0c3d7dfcf9f1c0c7e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;