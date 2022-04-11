// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH8f6G1JI-NGgEZ_ScYE0_Zk32ZnFBSSE",
  authDomain: "emma-john-shopping.firebaseapp.com",
  projectId: "emma-john-shopping",
  storageBucket: "emma-john-shopping.appspot.com",
  messagingSenderId: "750890189081",
  appId: "1:750890189081:web:c6c7268eb9bdd0947fc588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;