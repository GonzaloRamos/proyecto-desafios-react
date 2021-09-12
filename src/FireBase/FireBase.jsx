import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const appFirebase = initializeApp(firebaseConfig);
const dataBaseFirestore = getFirestore(appFirebase);

export default dataBaseFirestore;
