// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA81-6yQNRLQ1b2VBqUuh4OFzhoXOyuWZ0",

  authDomain: "expedia-clone-5cab0.firebaseapp.com",

  databaseURL: "https://expedia-clone-5cab0-default-rtdb.firebaseio.com",

  projectId: "expedia-clone-5cab0",

  storageBucket: "expedia-clone-5cab0.firebasestorage.app",

  messagingSenderId: "369671795323",

  appId: "1:369671795323:web:0c98569e32010c1b3c28de",

  measurementId: "G-WZXC75F164"

};


// Initialize Firebase

const firebase_app = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebase_app);

export default firebase_app;