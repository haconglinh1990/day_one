import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyAVKQCu-VzVPIy7ewxDtWNyvG1Lw3y7JKY",
  authDomain: "dayone-3d18e.firebaseapp.com",
  projectId: "dayone-3d18e",
  storageBucket: "dayone-3d18e.appspot.com",
  messagingSenderId: "730623303152",
  appId: "1:730623303152:web:d812257fd637acc0d05135"
};

export const firebase_app = firebase.initializeApp(firebaseConfig);
