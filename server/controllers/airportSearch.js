import { amadeus } from "../index.js";

export const airportSearch = async(req, res) => {
    let airports = [];

    amadeus.client.get('/v1/reference-data/locations', { subType: 'AIRPORT', keyword: 'New York', view: "light"}).then(function(response){
            console.log(response.data);
            response.data.forEach(airport => {
                //console.log(airport.iataCode)
                airports.push({iataCode: airport.iataCode, name: airport.name});
            });
            // res.status(200).json({codes: iataCodes});
            
        }).catch(function(responseError){
            // res.status(responseError.code);
        })
}