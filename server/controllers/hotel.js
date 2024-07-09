import { amadeus } from "../index.js";

export const hotelCity = async(req, res) => {
    let hotels = [];
    const cityCode = req.query.cityCode;

    await amadeus.client.get('/v1/reference-data/locations/hotels/by-city', {cityCode: cityCode, radius: 5}).then(function(response) {
        response.data.forEach(hotel => {
            hotels.push({name: hotel.name, long: hotel.geoCode.longitude, lat: hotel.geoCode.latitude, hotelID: hotel.hotelId})
        })
    }).catch(function(err) {
        console.log(err)
        res.status(err.description[0].status).json({message: "SMTG WENT WRONG"})
    })

    let ids = [];
    let adults = req.query.adults;
    let checkIn = req.query.checkIn;
    let checkOut = req.query.checkOut;
    console.log(checkOut)

    hotels.forEach(hotel => {
        ids.push(hotel.hotelID)
    })

    console.log(ids)

    let ret = [];

    amadeus.client.get('/v3/shopping/hotel-offers', {hotelIds: ids.join(","), adults: adults, checkInDate: checkIn, checkOutDate: checkOut}).then(function(response) {
        response.data.forEach(hotel => {
            let offers = [];
            hotel.offers.forEach(offer => {
                try{
                    offers.push({date: {checkIn: offer.checkInDate, checkOut: offer.checkOutDate}, room: {beds: offer.room.typeEstimated.beds, bedType: offer.room.typeEstimated.bedType, description: offer.room.description.text}, guests: {adults: offer.guests.adults}, price: offer.price.total, currency: offer.price.currency, policy: offer.policies.paymentType})
                } catch (err){

                }
            })
            ret.push({hotel: hotel.hotel.name, rooms: offers})
        })
        res.status(200).json({hotelList: hotels, offers: ret})
    }).catch(function(err) {
        console.log(err)
        res.status(err.description[0].status).json({message: "SMTG WENT WRONG"})
    })
}

export const hotelGeo = async(req, res) => {
    let hotels = [];

    const lat = req.query.lat;
    const long = req.query.long;
    
    await amadeus.client.get('/v1/reference-data/locations/hotels/by-geocode', {latitude: lat, longitude: long, radius: 5}).then(function(response) {
        response.data.forEach(hotel => {
            hotels.push({name: hotel.name, long: hotel.geoCode.longitude, lat: hotel.geoCode.latitude, distance: hotel.distance.value, distanceUnit: hotel.distance.unit, hotelID: hotel.hotelId})
        })
    }).catch(function(err) {
        res.status(err.description[0].status).json({message: "SMTG WENT WRONG"})
    })

    let ids = []
    let adults = req.query.adults;
    let checkIn = req.query.checkIn;
    let checkOut = req.query.checkOut;

    hotels.forEach(hotel => {
        ids.push(hotel.hotelID)
    })

    console.log(ids)

    let ret = [];

    amadeus.client.get('/v3/shopping/hotel-offers', {hotelIds: ids.join(","), adults: adults, checkInDate: checkIn, checkOutDate: checkOut}).then(function(response) {
        response.data.forEach(hotel => {
            let offers = [];
            hotel.offers.forEach(offer => {
                try{
                    offers.push({date: {checkIn: offer.checkInDate, checkOut: offers.checkOutDate}, room: {beds: offer.room.typeEstimated.beds, bedType: offer.room.typeEstimated.bedType, description: offer.room.description.text}, guests: {adults: offer.guests.adults, children: offer.guests.children}, price: offer.price.total, currency: offer.price.currency, policy: offer.policies.paymentType})
                } catch (err){
                    console.log("GAY HOTEL")
                }
            })
            ret.push({hotel: hotel.hotel.name, rooms: offers})
        })
        console.log(hotels)
        console.log("-----------------")
        console.log(ret)
        res.status(200).json({hotelList: hotels, offers: ret})
    }).catch(function(err) {
        console.log(err)
        res.status(err.description[0].status).json({message: "SMTG WENT WRONG"})
    })
}