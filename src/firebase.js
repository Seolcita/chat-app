/** @format */

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDQktiFoQQ7i7JOuQb9gfUhDHvwPYJRrII',
  authDomain: 'slack-app-4d66c.firebaseapp.com',
  projectId: 'slack-app-4d66c',
  storageBucket: 'slack-app-4d66c.appspot.com',
  messagingSenderId: '106238496630',
  appId: '1:106238496630:web:bbdb6f5648a58734b13457',
  measurementId: 'G-GDG3QES4EY',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
