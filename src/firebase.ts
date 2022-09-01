// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBmbjNUvQFpl1z3xzJScOmmLcSrgoFhbtI',
  authDomain: 'key-killer.firebaseapp.com',
  projectId: 'key-killer',
  storageBucket: 'key-killer.appspot.com',
  messagingSenderId: '53648573084',
  appId: '1:53648573084:web:bdb33461f8605997aa2359',
  measurementId: 'G-ZE6RKMG5ND',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth(app);
