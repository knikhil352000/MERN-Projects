import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDLNk87oVh-UkOUxE5BDak8D_r1H1EzFg",
  authDomain: "instagram-clone-998b0.firebaseapp.com",
  // databaseURL: "https://instagram-clone-23884.firebaseio.com",
  projectId: "instagram-clone-998b0",
  storageBucket: "instagram-clone-998b0.appspot.com",
  messagingSenderId: "143755547531",
  appId: "1:143755547531:web:268dd4656e2f838f4b958e",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
