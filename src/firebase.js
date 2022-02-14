import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR_7q9u8AQlBGxegL-9ch2ew8gKGpwz7w",
  authDomain: "disney-plus-504d9.firebaseapp.com",
  projectId: "disney-plus-504d9",
  storageBucket: "disney-plus-504d9.appspot.com",
  messagingSenderId: "747275270378",
  appId: "1:747275270378:web:740dff9317d922f4707f93",
  measurementId: "G-0FHK3RN3DZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
