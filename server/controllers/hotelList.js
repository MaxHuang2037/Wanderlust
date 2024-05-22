import { amadeus } from "../index.js";

let amenities = ["SWIMMING_POOL", "SPA", "FITNESS_CENTER", "AIR_CONDITIONING", "RESTAURANT", "PARKING", "PETS_ALLOWED", "AIRPORT_SHUTTLE", "BUSINESS_CENTER", "DISABLED_FACILITIES", "WIFI", "MEETING_ROOMS", "NO_KID_ALLOWED", "TENNIS", "GOLF", "KITCHEN", "ANIMAL_WATCHING", "BABY-SITTING", "BEACH", "CASINO", "JACUZZI", "SAUNA", 'SOLARIUM', 'MASSAGE', "VALET_PARKING", "BAR or LOUNGE", "KIDS_WELCOME", 'NO_PORN_FILMS', 'MINIBAR', 'TELEVISION', "WI-FI_IN_ROOM", "ROOM_SERVICE", "GUARDED_PARKG", "SERV_SPEC_MENU"]

export const hotelListCity = async(req, res) => {
    let hotels = [];

    //ratings: [1, 2, 3, 4, 5]
    amadeus.client.get('/v1/reference-data/locations/hotels/by-city', {cityCode: 'JFK', radius: 5}).then(function(response) { //city code is the same as the airport, can change, can change amendities with "amenities: xxxx"
        response.data.forEach(hotel => {
            hotels.push({name: hotel.name, long: hotel.geoCode.longitude, lat: hotel.geoCode.latitude, hotelID: hotel.hotelId})
        })
        console.log(hotels)
    }).catch(function(responseError) {
        //do something
    })
}

export const hotelListGeo = async(req, res) => {
    let hotels = [];

    amadeus.client.get('/v1/reference-data/locations/hotels/by-geocode', {latitude: 41.397158, longitude: 2.160873, radius: 5}).then(function(response) {
        response.data.forEach(hotel => {
            hotels.push({name: hotel.name, long: hotel.geoCode.longitude, lat: hotel.geoCode.latitude, distance: hotel.distance.value, distanceUnit: hotel.distance.unit, hotelID: hotel.hotelId})
        })
        console.log(hotels)
    }).catch(function(responseError) {
        //do something
    })
}