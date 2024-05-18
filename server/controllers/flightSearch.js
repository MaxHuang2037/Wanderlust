import { amadeus } from "../index.js";


export const flightSearch = async(req, res) => {
    let flights = [];

    amadeus.client.get('/v2/shopping/flight-offers', {originLocationCode: "YYZ", destinationLocationCode: "HND", departureDate: "2024-05-31", adults: 1}).then(function(response){
        console.log(response.data);
        response.data.foreach( flight => {
            flights.push({price: flight.price.total, departure: flight.itineraries[0].segments[0].departure.at, from: flight.itineraries[0].segments[0].departure.iataCode, arrival: flight.itineraries[-1].segments[-1].arrival.at, to: flight.itineraries[-1].segments[-1].arrival.iataCode})
        })
    }).catch(function(responseError){
        console.log(responseError);
    });
}