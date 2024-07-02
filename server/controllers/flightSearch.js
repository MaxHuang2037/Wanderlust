import { amadeus } from "../index.js";

export const getFlights = async(req, res) => {
    let flights = [];
    const origCode = req.query.origCode
    const destCode = req.query.destCode
    const depDate = req.query.depDate //"2024-05-31"
    const adults = parseInt(req.query.adults)
    const children = parseInt(req.query.children)
    const infants = parseInt(req.query.infants)
    const params = {currencyCode: "CAD", originLocationCode: origCode, destinationLocationCode: destCode, departureDate: depDate, adults: adults, children: children, infants: infants}

    amadeus.client.get('/v2/shopping/flight-offers', params).then(function(response){
        // console.log(response.data)
        response.data.forEach(flight => {
            let price = flight.price.total
            let cabin = flight.travelerPricings[0].fareDetailsBySegment[0].cabin
            let totalDuration = flight.itineraries[0].duration
            let segs = []
            console.log(flight)
            // console.log("------------------")
            flight.itineraries[0].segments.forEach(seg => {
                // console.log(seg)
                let departure = seg.departure
                let arrival = seg.arrival
                let duration = seg.duration
                let carrier = `${seg.carrierCode} ${seg.number}`

                segs.push({departure: departure, arrival: arrival, duration: duration, carrier: carrier})
            })
            flights.push({price: price, segments: segs, totalDuration: totalDuration, cabin: cabin})
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