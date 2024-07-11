import { amadeus } from "../index.js";

export const getHotelOffers = async(req, res) => {
    let ret;

    let id = req.query.id;
    let adults = req.query.adults;
    let checkIn = req.query.checkIn;
    let checkOut = req.query.checkOut;
    console.log(id, adults, checkIn, checkOut)

    amadeus.client.get('/v3/shopping/hotel-offers', {hotelIds: id, adults: adults, checkInDate: checkIn, checkOutDate: checkOut}).then(function(response) {
        let data = response.data[0]
        let offers = [];
        console.log(response.data[0].offers)
        data.offers.forEach(offer => {
            offers.push({date: {checkIn: offer.checkInDate, checkOut: offers.checkOutDate}, room: {beds: offer.room.typeEstimated.beds, bedType: offer.room.typeEstimated.bedType, description: offer.room.description.text}, guests: {adults: offer.guests.adults, children: offer.guests.children}, price: offer.price.total, currency: offer.price.currency, policy: offer.policies.paymentType})
        })

        ret = {hotel: data.hotel.name, offers: offers}

        console.log(ret)
        res.status(200).json({offers: ret})

        console.log(response.data)
    }).catch(function(err) {
        console.log(err)
        res.status(err.description[0].status).json({message: err.description[0].detail})
    })
}