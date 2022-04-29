// Created restaurant nhWCJqlDNhHdULMbW4Y5
// Created restaurant 5IdcTTxzpypoBs3S2xJP
// Created restaurant tESUM4Scldxk7VMs7vFA

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


// delete nhWCJqlDNhHdULMbW4Y5
restaurantsCol.doc('nhWCJqlDNhHdULMbW4Y5').delete()
.then( res => console.log('Success deleting nhWCJqlDNhHdULMbW4Y5!!'))
.catch( err => console.error('Error deleting nhWCJqlDNhHdULMbW4Y5!!', err))


restaurantsCol.doc('5IdcTTxzpypoBs3S2xJP').delete()
.then( res => console.log('Success deleting 5IdcTTxzpypoBs3S2xJP!!'))
.catch( err => console.error('Error deleting 5IdcTTxzpypoBs3S2xJP!!', err))




restaurantsCol.doc('tESUM4Scldxk7VMs7vFA').delete()
.then( res => console.log('Success deleting tESUM4Scldxk7VMs7vFA!!'))
.catch( err => console.error('Error deleting tESUM4Scldxk7VMs7vFA!!', err))
