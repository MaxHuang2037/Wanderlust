import { amadeus } from "../index.js";

export const getCities = async(req, res) => {
    let cities = [];
    const city = req.query.city
    amadeus.client.get('/v1/reference-data/locations/cities', {keyword: city}).then(function(response){
        let data = response.data
        for(let i = 0; i < data.length; i++){
            if(data[i].iataCode == undefined || data[i].geoCode.latitude == undefined){
                continue;
            }

            cities.push({name: data[i].name, geoCode: data[i].geoCode, country: data[i].address.countryCode})
        }
        console.log(cities)
        res.status(200).json({cities: cities})
    }).catch(function(err){
        console.log(err)
        res.status(err.description[0].status).json({message: err.description[0].detail})
    })
}

export const getThingsToDo = async(req, res) => {
    let ThingsToDo = [];
    const long = req.query.long
    const lat = req.query.lat
    amadeus.client.get('/v1/shopping/activities', {latitude: long, longitude: lat, radius: 20}).then(function(response){
        
    }).catch(function(err){
        console.log(err)
        res.status(err.description[0].status).json({message: err.description[0].detail})
    })
}