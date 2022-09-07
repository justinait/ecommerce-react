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


//OLIVAPARANA LOG !

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCfE8Dgv_MdnqQBYVqGHq7mORAvQ23w32Q",
//   authDomain: "olivaparana.firebaseapp.com",
//   projectId: "olivaparana",
//   storageBucket: "olivaparana.appspot.com",
//   messagingSenderId: "127118769964",
//   appId: "1:127118769964:web:c0d128267949182e607689"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);