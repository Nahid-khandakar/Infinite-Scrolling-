// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJpIH5KuWhxhqCht1P6OevNl1_E-6q85U",
    authDomain: "infinite-scrolling-9ebb7.firebaseapp.com",
    projectId: "infinite-scrolling-9ebb7",
    storageBucket: "infinite-scrolling-9ebb7.appspot.com",
    messagingSenderId: "123361847007",
    appId: "1:123361847007:web:f73a8b042e1b4451bdab6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth