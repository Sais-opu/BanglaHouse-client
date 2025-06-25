// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHrlMFOcehxEqJbzVzQ4n6zFjdOSm_Cig",
    authDomain: "banglarent-b3f2d.firebaseapp.com",
    projectId: "banglarent-b3f2d",
    storageBucket: "banglarent-b3f2d.firebasestorage.app",
    messagingSenderId: "899524406393",
    appId: "1:899524406393:web:f603f7a2dec4de671df8a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth= getAuth(app);
export default app;