const admin = require("firebase-admin");

const serviceAccount = require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//connection to firestore project
const db = admin.firestore();

const restaurant ={
    name:'Mister O1',
    address: '555 fededral hwy suite 5',
    cuisine:'Pizza',
    rating:4.9,
    phone:'(786) 677-2903',

}
// add the restaurant objetc in the firebase
 db.collection('restaurants').add(restaurant)
 .then( doc => console.log('Created restaurant', doc.id))
 .catch(err => console.error(err))