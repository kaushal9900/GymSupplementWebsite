import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOMaAOwP5yHNxR_QeHkZLBqb0JL6Li250",
  authDomain: "ecommerce-3ccb6.firebaseapp.com",
  databaseURL: "https://ecommerce-3ccb6.firebaseio.com",
  projectId: "ecommerce-3ccb6",
  storageBucket: "ecommerce-3ccb6.appspot.com",
  messagingSenderId: "963411396680",
  appId: "1:963411396680:web:b3831f5cfac4c0a59af07d",
  measurementId: "G-S3525KE88W"
};
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
