import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6AGcYT06Z7lxLEcbKyP2S_nssl2x8xHI",
  authDomain: "chat-mate-109d0.firebaseapp.com",
  projectId: "chat-mate-109d0",
  storageBucket: "chat-mate-109d0.appspot.com",
  messagingSenderId: "916422985243",
  appId: "1:916422985243:web:a19224cc2b8da9e51e9abe",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
