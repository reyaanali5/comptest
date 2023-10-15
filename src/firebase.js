// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOZ-Ooebh_UN5mzth1xzw7FFJgIE5EOuQ",
    authDomain: "universeauth-a02f3.firebaseapp.com",
    projectId: "universeauth-a02f3",
    storageBucket: "universeauth-a02f3.appspot.com",
    messagingSenderId: "825811461775",
    appId: "1:825811461775:web:11d146570969b20fccf2fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };