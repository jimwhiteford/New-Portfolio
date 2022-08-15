import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHNL3DiWpDiErnK3JjGJwLbei4ggcUxzQ",
  authDomain: "portfolio-4fd14.firebaseapp.com",
  projectId: "portfolio-4fd14",
  storageBucket: "portfolio-4fd14.appspot.com",
  messagingSenderId: "1094797850421",
  appId: "1:1094797850421:web:505eb5ac80c6cc39727e7c"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
