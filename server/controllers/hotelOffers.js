import { amadeus } from "../index.js";

export const getHotelOffers = async(req, res) => {
    let offers = []

    amadeus.client.get('/v3/shopping/hotel-offers', {hotelIds: 'MCLONGHM', adults: 1, checkInDate: '2024-11-22', checkOutDate: "2024-11-30"}).then(function(response) {
        hotel = {name: response.data[0].hotel.name, location: {long: response.data[0].hotel.longitude, lat: response.data[0].hotel.letitude}}
        response.data[0].offers.forEach(offer => {
            offers.push({date: {checkIn: offer.checkInDate, checkOut: offers.checkOutDate}, room: {beds: offer.room.typeEstimated.beds, bedType: offer.room.typeEstimated.bedType, description: offer.room.description.text}, guests: {adults: offer.guests.adults, children: offer.guests.children}, price: offer.price.total, currency: offer.price.currency, policy: offer.policies.paymentType})
        })
        res.status(200).json({offers: offers})
    }).catch(function(err) {
        res.status(err.description[0].status).json({message: err.description[0].detail})
    })
}

// IS THIS NOT USED???