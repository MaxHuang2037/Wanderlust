import { amadeus } from "../index.js";

export const airportSearch = async(req, res) => {
    let airports = [];
    const city = req.query.city
    amadeus.client.get('/v1/reference-data/locations/city', {keyword: city, include: ["AIRPORTS"]}).then(function(response){
        console.log(response.data);
        response.data.forEach(airport => {
            airports.push({iataCode: airport.iataCode, name: airport.name});
        });
        res.status(200).json({airports: airports, type: req.query.type});

        }).catch(function(responseError){
        res.status(responseError.code);
    })
}