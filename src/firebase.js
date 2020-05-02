import firebase from "firebase";
require("firebase/firestore");
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCquGsk5Xy-QgNbelJ5IfeheRPr1wZBxDI",
    authDomain: "reach2research.firebaseapp.com",
    databaseURL: "https://reach2research.firebaseio.com",
    projectId: "reach2research",
    storageBucket: "reach2research.appspot.com",
    messagingSenderId: "465581062140",
    appId: "1:465581062140:web:a08612f5f058cf0aa7a479",
    measurementId: "G-2NMTS2RVQE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore;
  export default db;
