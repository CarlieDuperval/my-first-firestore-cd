import admin from "firebase-admin"; // import firebase libary of tools
import serviceAccount from "./credentials.js"; // import the credentials to connect to firebase

//const admin = require("firebase-admin"); // ES5
//const serviceAccount = require('./credentials.json'); // ES5


// Firesotre is inside Firebase

admin.initializeApp({ // connects to Firebase project
  credential: admin.credential.cert(serviceAccount)  // creating a certifiicate from our credential = take our credential
});
// NOW  we are connected to Our Firebase  project and related services


const db = admin.firestore();// create s shot cut to access a Firestore data base

const restaurantsCol = db.collection("restaurants"); // Shortcut to point to the collection// you can make a short cut

const restaurant = { // creating an object -- inn this cas a spceific restaurant we want to add to our database
  name: "Mister O1",
  address: "555 fededral hwy suite 5",
  cuisine: "Pizza",
  rating: 4.9,
  phone: "(786) 677-2903",
}; 


//add the restaurant object in the firebase
restaurantsCol.add(restaurant)// adding the resatuarant to our collection
//db.collection("restaurants").add(restaurant) // db = adm.firestore => go to firestore admin and create a collection named ''
  .then((doc) => console.log("Created restaurant", doc.id)) // handle and resolve
  .catch((err) => console.error(err));// handle reject

// 2n way to create the method to create the pizza
restaurantsCol
  .add(restaurant)
  .then((doc) => console.log("Created restaurant", doc.id))
  .catch((err) => console.error(err));

const restaurant2 = {
  name: "Bolay",
  address: "7660 W Palmetto",
  cuisine: "American",
  rating: 4.6,
};

async function addRestaurant(data) {
  try {
    const doc = await db.collection("restaurants").add(data);// add restaurant to collection
    console.log("Created restaurant", doc.id); // handle resolve
  } catch (err) {
    console.error(err); //handle reject
  }
}
addRestaurant(restaurant2);
