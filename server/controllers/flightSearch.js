import { amadeus } from "../index.js";


export const flightSearch = async(req, res) => {
    let flights = [];

    amadeus.client.get('/v2/shopping/flight-offers', {originLocationCode: "YYZ", destinationLocationCode: "HND", departureDate: "2024-05-31", adults: 1}).then(function(response){
        // console.log(response.data);
        response.data.forEach( flight => {
            let seg_length = flight.itineraries[0].segments.length - 1
            let price = flight.price.total
            let segs = []
            flight.itineraries[0].segments.forEach( seg => {
                let departure = seg.departure.at
                let from = seg.departure.iataCode
                let arrival = seg.arrival.at
                let to = seg.arrival.iataCode

                segs.push({departure: departure, from: from, arrival: arrival, to: to})
            })
            // let departure = flight.itineraries[0].segments[0].departure.at
            // let from = flight.itineraries[0].segments[0].departure.iataCode
            // let arrival = flight.itineraries[0].segments[seg_length].arrival.at
            // let to = flight.itineraries[0].segments[seg_length].arrival.iataCode
            
            flights.push({price: price, segments: segs})
            console.log(flights)
        })
    }).catch(function(err){
        res.status(err.code).json({message: err.message});
    });
}

// type: 'flight-offer',
// id: '72',
// source: 'GDS',
// instantTicketingRequired: false,
// nonHomogeneous: false,
// oneWay: false,
// lastTicketingDate: '2024-05-21',
// lastTicketingDateTime: '2024-05-21',
// numberOfBookableSeats: 7,
// itineraries: [ [Object] ],
// price: {
//   currency: 'EUR',
//   total: '6551.90',
//   base: '6279.00',
//   fees: [Array],
//   grandTotal: '6551.90'
// },
// pricingOptions: { fareType: [Array], includedCheckedBagsOnly: true },
// validatingAirlineCodes: [ 'UA' ],
// travelerPricings: [ [Object] ]
// }