import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyARELfiypE_PO9UXm5tJFBTLGKBM6M6EA0",
    authDomain: "clone-5aac1.firebaseapp.com",
    projectId: "clone-5aac1",
    storageBucket: "clone-5aac1.appspot.com",
    messagingSenderId: "72898737883",
    appId: "1:72898737883:web:35a7fc4752c4cd95aabefe"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


  const db = app.firestore();

  export default db;