import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-ab746.firebaseapp.com",
//   projectId: "chat-ab746",
//   storageBucket: "chat-ab746.appspot.com",
//   messagingSenderId: "901216368405",
//   appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCz0xkWbMUHT2TDjWO04kBUKpHaS3L8IhI",
//   authDomain: "chat-20fbf.firebaseapp.com",
//   projectId: "chat-20fbf",
//   storageBucket: "chat-20fbf.appspot.com",
//   messagingSenderId: "386809478319",
//   appId: "1:386809478319:web:e868b24a36f37f01efe85a"
// };



// const firebaseConfig = {
//   apiKey: "AIzaSyB4oarkkQF7CRvO1769Mx9SIe8pNzZphHc",
//   authDomain: "hackchat-8f081.firebaseapp.com",
//   projectId: "hackchat-8f081",
//   storageBucket: "hackchat-8f081.appspot.com",
//   messagingSenderId: "520935376008",
//   appId: "1:520935376008:web:a144883b1b439484018b3d"
// };

const firebaseConfig = {
  apiKey: "AIzaSyB1NwyYaoxh1FU3Oivt_H1dpOOb_ztYGnM",
  authDomain: "chat-41496.firebaseapp.com",
  "returnSecureToken": true,
  projectId: "chat-41496",
  storageBucket: "chat-41496.appspot.com",
  messagingSenderId: "624948484641",
  appId: "1:624948484641:web:b98360cc6651370484a160",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
