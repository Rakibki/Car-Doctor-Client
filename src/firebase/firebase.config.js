// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFKvbbFrk3YRXWDK_jSVVcEHfE4WK2Bdg",
  authDomain: "car-service-51dcc.firebaseapp.com",
  projectId: "car-service-51dcc",
  storageBucket: "car-service-51dcc.appspot.com",
  messagingSenderId: "236258016450",
  appId: "1:236258016450:web:b549af4af8dbaa9c054f5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth