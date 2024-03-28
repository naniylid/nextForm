// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration

const API_KEY = process.env.API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'expence-tracker-982f5.firebaseapp.com',
  projectId: 'expence-tracker-982f5',
  storageBucket: 'expence-tracker-982f5.appspot.com',
  messagingSenderId: '573766335074',
  appId: '1:573766335074:web:11d3fc24456c18ea6f2f3b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
