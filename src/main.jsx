import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDC6kCMGHJYNiA_5lO5xV6NLPwaaKJ3UQ",
  authDomain: "proyectofinal-lima.firebaseapp.com",
  projectId: "proyectofinal-lima",
  storageBucket: "proyectofinal-lima.appspot.com",
  messagingSenderId: "393001019680",
  appId: "1:393001019680:web:13f8da615ce832c87e0f45"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
