import { amadeus } from "../index.js";

let amenities = ["SWIMMING_POOL", "SPA", "FITNESS_CENTER", "AIR_CONDITIONING", "RESTAURANT", "PARKING", "PETS_ALLOWED", "AIRPORT_SHUTTLE", "BUSINESS_CENTER", "DISABLED_FACILITIES", "WIFI", "MEETING_ROOMS", "NO_KID_ALLOWED", "TENNIS", "GOLF", "KITCHEN", "ANIMAL_WATCHING", "BABY-SITTING", "BEACH", "CASINO", "JACUZZI", "SAUNA", 'SOLARIUM', 'MASSAGE', "VALET_PARKING", "BAR or LOUNGE", "KIDS_WELCOME", 'NO_PORN_FILMS', 'MINIBAR', 'TELEVISION', "WI-FI_IN_ROOM", "ROOM_SERVICE", "GUARDED_PARKG", "SERV_SPEC_MENU"]

export const getHotelListCity = async(req, res) => {
    let hotels = [];
    const cityCode = req.query.cityCode
    //ratings: [1, 2, 3, 4, 5]
    amadeus.client.get('/v1/reference-data/locations/hotels/by-city', {cityCode: cityCode, radius: 5}).then(function(response) { //city code is the same as the airport, can change, can change amendities with "amenities: xxxx"
        response.data.forEach(hotel => {
            hotels.push({name: hotel.name, long: hotel.geoCode.longitude, lat: hotel.geoCode.latitude, hotelID: hotel.hotelId})
        })
        console.log(hotels)
        res.status(200).json({hotels: hotels});
    }).catch(function(err) {
        res.status(err.description[0].status).json({message: err.description[0].detail})

    })
}

export const getHotelListGeo = async(req, res) => {
    let hotels = [];

    const long = req.query.long;
    const lat = req.query.lat;
    amadeus.client.get('/v1/reference-data/locations/hotels/by-geocode', {latitude: lat, longitude: long, radius: 5}).then(function(response) {
        response.data.forEach(hotel => {
            hotels.push({name: hotel.name, long: hotel.geoCode.longitude, lat: hotel.geoCode.latitude, distance: hotel.distance.value, distanceUnit: hotel.distance.unit, hotelID: hotel.hotelId})
        })
        console.log(hotels)
        res.status(200).json({hotels: hotels});
    }).catch(function(err) {
        res.status(err.description[0].status).json({message: err.description[0].detail})
    })
}