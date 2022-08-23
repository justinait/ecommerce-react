import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKsO4Fy9SMMzBEbuWL_kTwQmMP9w33ZWM",
  authDomain: "olivalitoral-5df34.firebaseapp.com",
  projectId: "olivalitoral-5df34",
  storageBucket: "olivalitoral-5df34.appspot.com",
  messagingSenderId: "926171203970",
  appId: "1:926171203970:web:fa856c4feb27cc0f69279b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;