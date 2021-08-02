import Firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import { seedDatabase } from "../seed";

//We need somehow seed the database

const config = {
    apiKey: "AIzaSyCmiZUZID6un26avgxPQF9mDcR1z1w_7X4",
    authDomain: "netflixclone-ee2fb.firebaseapp.com",
    projectId: "netflixclone-ee2fb",
    storageBucket: "netflixclone-ee2fb.appspot.com",
    messagingSenderId: "458776921544",
    appId: "1:458776921544:web:857db15ef090d19f642cfd"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase)
console.log("ITS DONE");

export { firebase };

