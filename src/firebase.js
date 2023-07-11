import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBilblYQLB5sghe5tEwrqnee7xEJMjaExo",
    authDomain: "chat-8ab66.firebaseapp.com",
    projectId: "chat-8ab66",
    storageBucket: "chat-8ab66.appspot.com",
    messagingSenderId: "317489153078",
    appId: "1:317489153078:web:17283e168900c470a70497",
    measurementId: "G-CSJBZ8QYNE"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
