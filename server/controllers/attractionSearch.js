import { amadeus } from "../index.js";

export const getCities = async(req, res) => {
    let cities = [];
    const city = req.query.city
    amadeus.client.get('/v1/reference-data/locations/cities', {keyword: city}).then(function(response){
        let data = response.data
        if(data == undefined){
            return res.status(200).json({cities: []})
        }
        for(let i = 0; i < data.length; i++){
            if(data[i].iataCode == undefined || data[i].geoCode.latitude == undefined){
                continue;
            }

            cities.push({name: data[i].name, geoCode: data[i].geoCode, country: data[i].address.countryCode})
        }
        console.log(cities)
        if(cities == undefined){
            cities = []
        }
        res.status(200).json({cities: cities})
    }).catch(function(err){
        console.log(err)
        res.status(err.description[0].status).json({message: err.description[0].detail})
    })
}

export const getThingsToDo = async(req, res) => {
    let thingsToDo = [];
    const lat = req.query.lat
    const long = req.query.long
    // console.log(lat, long)
    amadeus.client.get('/v1/shopping/activities', {latitude: lat, longitude: long, radius: 10}).then(function(response){
        const data = response.data
        console.log(data)
        data.forEach(activity => {
            thingsToDo.push({name: activity.name, description: activity.description, price: activity.price, pictures: activity.pictures})
        })
        res.status(200).json({thingsToDo: thingsToDo})
    }).catch(function(err){
        console.log(err)
        res.status(err.description[0].status).json({message: err.description[0].detail})
    })
}