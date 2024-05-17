import express from "express"
import dotenv from "dotenv"
import Amadeus from "amadeus"

// OMGGGGGGG
dotenv.config()

const app = express()
// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// getting auth from amadeus
const CLIENT_ID = process.env.API_KEY
const SECRET = process.env.API_SECRET
const amadeus = new Amadeus({
    clientId: CLIENT_ID,
    clientSecret: SECRET
});

// example
// amadeus.client.get('/v1/reference-data/locations', { subType: 'AIRPORT', keyword: 'New York'}).then(function(response){
//     console.log(response.data);
//   }).catch(function(responseError){
//     console.log(responseError.code);
// });

amadeus.client.get('/v2/shopping/flight-offers', {originLocationCode: "YYZ", destinationLocationCode: "HND", departureDate: "2024-05-31", adults: 1}).then(function(response){
    console.log(response.data);
  }).catch(function(responseError){
    console.log(responseError);
});

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})