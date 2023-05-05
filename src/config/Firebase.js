import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVzhadQsSIiHRxQxOx3AZvooSbQNQgovE",
  authDomain: "dwims-online.firebaseapp.com",
  databaseURL: "https://dwims-online-default-rtdb.firebaseio.com",
  projectId: "dwims-online",
  storageBucket: "dwims-online.appspot.com",
  messagingSenderId: "542098837631",
  appId: "1:542098837631:web:8fa0775eb322cfcf392f4a",
  measurementId: "G-50118MYVSE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
