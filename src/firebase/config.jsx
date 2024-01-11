import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsKJ1KSxHDYwJcDx2LgFQAsnfyszcM9os",
  authDomain: "miniblog-ref-5fe55.firebaseapp.com",
  projectId: "miniblog-ref-5fe55",
  storageBucket: "miniblog-ref-5fe55.appspot.com",
  messagingSenderId: "580168617144",

  appId: "1:580168617144:web:024934014ed1bbe228384d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
