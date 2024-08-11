import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxp10smEbgwbOFA4rfA2wXV0J0H9VyLlk",
  authDomain: "slideshowschat.firebaseapp.com",
  databaseURL: "https://slideshowschat-default-rtdb.firebaseio.com",
  projectId: "slideshowschat",
  storageBucket: "slideshowschat.appspot.com",
  messagingSenderId: "432096531830",
  appId: "1:432096531830:web:28e47746c2300bafb8d657",
  measurementId: "G-EC28WRKBXL"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// export
export { app, auth, firestore, storage };
