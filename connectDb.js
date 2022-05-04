import admin from "firebase-admin"; // import firebase libary of tools
import serviceAccount from "./credentials.js"; // import the credentials to connect to firebase


admin.initializeApp({ // connects to Firebase project
  credential: admin.credential.cert(serviceAccount)  // creating a certifiicate from our credential = take our credential
});

const db = admin.firestore();// create s shot cut to access a Firestore data base
export const restaurantsCol = db.collection("restaurants"); // Shortcut to point to the collection// you can make a short cut



