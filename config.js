import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQEyzJS4plrkf_-v58mXFmXoIkgfDuZmU",
  authDomain: "e-librarys-8f883.firebaseapp.com",
  projectId: "e-librarys-8f883",
  storageBucket: "e-librarys-8f883.appspot.com",
  messagingSenderId: "401277703865",
  appId: "1:401277703865:web:d17f7cf2927dac4d99ad68"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
