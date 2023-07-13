import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDqbvtlb81VOAqkMt-p3ML3IjRe6DBn4AQ",
    authDomain: "kicks-dfb35.firebaseapp.com",
    projectId: "kicks-dfb35",
    storageBucket: "kicks-dfb35.appspot.com",
    messagingSenderId: "103329545430",
    appId: "1:103329545430:web:5ae830a4a8d75fb717dd77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
