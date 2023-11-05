// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS5377nnp-D1AVgqG-R88IXaryDdBCfzE",
  authDomain: "shopper-ecommerce-website.firebaseapp.com",
  projectId: "shopper-ecommerce-website",
  storageBucket: "shopper-ecommerce-website.appspot.com",
  messagingSenderId: "123404854901",
  appId: "1:123404854901:web:c2f956bfcede9bb0573a3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();

export default app;