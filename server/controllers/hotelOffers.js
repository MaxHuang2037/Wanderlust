import { amadeus } from "../index.js";

export const getHotelOffers = async(req, res) => {
    // const dateConvert = (date) => {
    //     const arr = date.split("-")
    //     return new Date(arr[0], arr[1]-1, arr[2]).getTime()
    // }

    let ret;

    let id = req.query.id;
    let adults = req.query.adults;
    let checkIn = req.query.checkIn;
    let checkOut = req.query.checkOut;

    amadeus.client.get('/v3/shopping/hotel-offers', {hotelIds: id, adults: adults, checkInDate: checkIn, checkOutDate: checkOut}).then(function(response) {
        let data = response.data[0]
        let offers = [];
        console.log(response.data[0].offers)
        data.offers.forEach(offer => {
            if(offer.room.typeEstimated){
                offers.push({date: {checkIn: offer.checkInDate, checkOut: offer.checkOutDate}, room: {beds: offer.room.typeEstimated.beds, bedType: offer.room.typeEstimated.bedType, description: offer.room.description.text}, guests: {adults: offer.guests.adults, children: offer.guests.children}, price: offer.price.total, currency: offer.price.currency, policy: offer.policies.paymentType})
            }
            else{
                let time = Math.floor((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / 86400000)
                let price = (Math.floor(Math.random() * 100) + 40) * time
                offers.push({date: {checkIn: offer.checkInDate, checkOut: offer.checkOutDate}, room: {beds: 1, bedType: "Single", description: "N/A"}, guests: {adults: offer.guests.adults, children: offer.guests.children}, price: price, currency: "USD", policy: offer.policies.paymentType})
            }
        })

        ret = {hotel: data.hotel.name, offers: offers}

        console.log(ret.offers[0].date)
        res.status(200).json(ret)

        console.log(response.data)
    }).catch(function(err) {
        console.log(err.description)
        // res.status(err.description[0].status).json({message: err.description[0].title})
        if (err.description[0].code == 3664) {
            let hotels = ["The streets", "The parking lot", "The underpass", "The park bench", "The sewers", "The dumpster", "The back ally", "The subway station", "The woods"]
            let hotel = hotels[Math.floor(Math.random() * hotels.length)]
            let offers = [{date: {checkIn: req.query.checkIn, checkOut: req.query.checkOut}, room: {beds: 1, bedType: "cardboard box", description: "The hotel you were looking for isn't there, you can sleep on the streets instead"}, guests: {adults: req.query.adults, children: 0}, price: 0, currency: "USD", policy: "None"}];
            
            ret = {hotel: hotel, offers: offers};
            res.status(200).json(ret)
        }
        else {
            let hotel = req.query.name
            let time = Math.floor((new Date(req.query.checkOut) - new Date(req.query.checkIn)) / 86400000)
            let price = (Math.floor(Math.random() * 100) + 40) * time

            let offers = [{date: {checkIn: req.query.checkIn, checkOut: req.query.checkOut}, room: {beds: Math.ceil(req.query.adults / 2), bedType: "Double beds", description: "N/A"}, guests: {adults: req.query.adults, children: 0}, price: price, currency: "USD", policy: "None"}];
            
            ret = {hotel: hotel, offers: offers};
            res.status(200).json(ret)
        }
    })
}