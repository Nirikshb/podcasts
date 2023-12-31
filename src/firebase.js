// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuiYaTgk2Pxkmzt54hBYlM6IfQPnqcPOg",
  authDomain: "podcast-acd01.firebaseapp.com",
  projectId: "podcast-acd01",
  storageBucket: "podcast-acd01.appspot.com",
  messagingSenderId: "175201321483",
  appId: "1:175201321483:web:859ff6ceb76f1e5c5cbd0e",
  measurementId: "G-19NKQZ3L1N"
};

// Initialize Firebase
const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };