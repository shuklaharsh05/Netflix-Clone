import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbOd-AEIi7IHDKJjYqNdjfBnaLS6EAe54",
  authDomain: "react-netflix-clone-a54ee.firebaseapp.com",
  projectId: "react-netflix-clone-a54ee",
  storageBucket: "react-netflix-clone-a54ee.appspot.com",
  messagingSenderId: "199682617631",
  appId: "1:199682617631:web:040a389ee7da3a1e62002a",
  measurementId: "G-D7QDS4JM7W"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
