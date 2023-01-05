import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE-J4D7Nc664dCUmwoF5RVBzmm1GG__qI",
  authDomain: "chat-box-8c5f3.firebaseapp.com",
  projectId: "chat-box-8c5f3",
  storageBucket: "chat-box-8c5f3.appspot.com",
  messagingSenderId: "461556301585",
  appId: "1:461556301585:web:e71ea32a92dc4535ac16b0",
  measurementId: "G-Q9XL1W8J9S",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

connectAuthEmulator(auth, "http://localhost:9000");
connectFirestoreEmulator(db, "localhost", 8000);

export { db, auth };
