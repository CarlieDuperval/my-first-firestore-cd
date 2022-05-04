import {restaurantsCol} from './connectDb.js'


// import admin from "firebase-admin"; // import firebase libary of tools

// import serviceAccount from "./credentials.js"; // import the credentials to connect to firebase


// admin.initializeApp({ // connects to Firebase project
//   credential: admin.credential.cert(serviceAccount)  // creating a certifiicate from our credential = take our credential
// });
// // NOW  we are connected to Our Firebase  project and related services


// const db = admin.firestore();// create s shot cut to access a Firestore data base

// //const restaurantsCol = db.collection("restaurants"); // Shortcut to point to the collection// you can make a short cut


// const restaurantsCol = db.collection('restaurants'); // shorcut to poitn our 

// restaurantsCol.get()
// .then( snapshot => {
//     // loop throuh all resultats
//     snapshot.docs.forEach(doc => console.log(doc.data()))
// })
// //.catch(err => console.error(err))
// .catch(console.error) // equivalent tot 


restaurantsCol
//.where('name', '==', 'Bolay')
.where('rating', '>=', 4.75)
.get()
.then( snapshot => {
    // loop throuh all results
    snapshot.docs.forEach(doc => console.log(doc.data()))
})
.catch(console.error) // equivalent tot 


