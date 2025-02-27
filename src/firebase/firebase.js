// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmwXV0Lfsn02CTIZ8PTBK4rDmd2QnUhr0",
  authDomain: "portfolioproject-13f0f.firebaseapp.com",
  projectId: "portfolioproject-13f0f",
  storageBucket: "portfolioproject-13f0f.firebasestorage.app",
  messagingSenderId: "369103260865",
  appId: "1:369103260865:web:75df15ed3a963fead2d840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore=getFirestore(app)
export const auth=getAuth(app)
export const authProvider=new GoogleAuthProvider()