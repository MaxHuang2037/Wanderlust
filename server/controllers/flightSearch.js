import { amadeus } from "../index.js";

export const flightSearch = async(req, res) => {
    let flights = [];
    const origCode = req.query.origCode
    const destCode = req.query.destCode
    const depDate = req.query.depDate //"2024-05-31"
    const retDate = req.query.retDate // find a way to use this
    const adults = parseInt(req.query.adults)
    const children = parseInt(req.query.children)
    const infants = parseInt(req.query.infants)

    amadeus.client.get('/v2/shopping/flight-offers', {currencyCode: "CAD", originLocationCode: origCode, destinationLocationCode: destCode, departureDate: depDate, adults: adults, children: children, infants: infants}).then(function(response){
        response.data.forEach(flight => {
            let price = flight.price.total
            let cabin = flight.travelerPricings[0].fareDetailsBySegment[0].cabin
            let segs = []
            flight.itineraries[0].segments.forEach( seg => {
                let departure = seg.departure.at
                let from = seg.departure.iataCode
                let arrival = seg.arrival.at
                let to = seg.arrival.iataCode

                segs.push({departure: departure, from: from, arrival: arrival, to: to})
            })
            
            flights.push({price: price, segments: segs, cabin: cabin})
        })
        res.status(200).json(flights)
    }).catch(function(err){
        console.log(err)
        res.status(err.description[0].status).json({message: err.description[0].detail})
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