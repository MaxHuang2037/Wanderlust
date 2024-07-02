import { amadeus } from "../index.js";

export const getHotelOffers = async(req, res) => {
    let ret = []

    let ids = req.query.ids;
    let adults = req.query.adults;
    let checkIn = req.query.checkIn;
    let checkOut = req.query.checkOut;

    amadeus.client.get('/v3/shopping/hotel-offers', {hotelIds: ids, adults: adults, checkInDate: checkIn, checkOutDate: checkOut}).then(function(response) {

        response.data.forEach(hotel => {
            offers = [];
            hotel.offers.forEach(offer => {
                offers.push({date: {checkIn: offer.checkInDate, checkOut: offers.checkOutDate}, room: {beds: offer.room.typeEstimated.beds, bedType: offer.room.typeEstimated.bedType, description: offer.room.description.text}, guests: {adults: offer.guests.adults, children: offer.guests.children}, price: offer.price.total, currency: offer.price.currency, policy: offer.policies.paymentType})
            })
            ret.push({hotel: hotel.hotel.name, offers: offers})
        })

        res.status(200).json({offers: ret})
    }).catch(function(err) {
        res.status(err.description[0].status).json({message: err.description[0].detail})
    })
}

// IS THIS NOT USED???