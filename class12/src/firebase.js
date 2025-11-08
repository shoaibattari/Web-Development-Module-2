// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGWxaog2w2-QUA-_n_whxVAOm9_OcKvVw",
  authDomain: "jp-react-firebase.firebaseapp.com",
  databaseURL: "https://jp-react-firebase-default-rtdb.firebaseio.com",
  projectId: "jp-react-firebase",
  storageBucket: "jp-react-firebase.firebasestorage.app",
  messagingSenderId: "360201720489",
  appId: "1:360201720489:web:e3f46d9d24b45630d38fb8",
  measurementId: "G-5G2SR5SXXW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);
export const db = getDatabase(app);
