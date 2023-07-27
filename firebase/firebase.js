import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2_tU7AwxW5o2xazVM4aA0XuZuYhyS8xM",
  authDomain: "chatapp-next01.firebaseapp.com",
  projectId: "chatapp-next01",
  storageBucket: "chatapp-next01.appspot.com",
  messagingSenderId: "833820716727",
  appId: "1:833820716727:web:679c771e40932aecfe6732",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
