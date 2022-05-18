import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5VU2xbsJ5lXz1-RVh2EoNTEZDRrt1sp4",
  authDomain: "frontiercooltest.firebaseapp.com",
  databaseURL: "https://frontiercooltest-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "frontiercooltest",
  storageBucket: "frontiercooltest.appspot.com",
  messagingSenderId: "93262006441",
  appId: "1:93262006441:web:4b4e01aa8592a8103041b8",
  measurementId: "G-KE8JM6W8XE"
}

// Initialize Firebase
export const firbase = initializeApp(firebaseConfig)
export const auth = getAuth(firbase)
export const db = getDatabase()
const analytics = getAnalytics(firbase)
/*
export const auth = getAuth()
export const createUserWithEmailAndPassword = function (auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  */