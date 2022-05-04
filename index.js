import { restaurantsCol } from "./connectDb.js";

// creating an object -- inn this cas a spceific restaurant we want to add to our database
const restaurant = { 
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
    console.error(err); //handle rejct
  }
}
addRestaurant(restaurant2);




