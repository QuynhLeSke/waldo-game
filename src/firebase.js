// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSndLAaHISjJmzHXyNP7QHQNa_2wz0shg",
  authDomain: "waldo-game-b6eb4.firebaseapp.com",
  projectId: "waldo-game-b6eb4",
  storageBucket: "waldo-game-b6eb4.appspot.com",
  messagingSenderId: "46433454790",
  appId: "1:46433454790:web:d70b33cc0f003b9a9c65c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export default app;
export { db, storage };
