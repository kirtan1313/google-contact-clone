// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth/cordova";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG61SsLsWGew7562j5Av-sc5Qv1W7w5x0",
  authDomain: "contacts-clone-app-crud.firebaseapp.com",
  projectId: "contacts-clone-app-crud",
  storageBucket: "gs://contect-ba6c6.appspot.com",
  messagingSenderId: "1018678714887",
  appId: "1:1018678714887:web:810379327a789313e400a2"
};
// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);