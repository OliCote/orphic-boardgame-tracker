/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';
import 'firebase/auth';

// const doc = new Document();
// console.log(doc.body);
// eslint-disable-next-line no-unused-expressions
// doc.body.requestFullscreen;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const functions = firebase.functions();

if (process.env.REACT_APP_LOCALHOST_STATE) {
  firebase.functions().useEmulator('localhost', 5001);
  db.useEmulator('localhost', 8081);
}

export {
  functions, db,
};
