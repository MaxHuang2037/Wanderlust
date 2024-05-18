import { amadeus } from "../index.js";

export const airportSearch = async(req, res) => {
    let iataCodes = [];

    amadeus.client.get('/v1/reference-data/locations', { subType: 'AIRPORT', keyword: 'New York'}).then(function(response){
            // console.log(response.data);
            response.data.forEach(airport => {
                //console.log(airport.iataCode)
                iataCodes.push(airport.iataCode);
            });
            res.status(200).json({codes: iataCodes});
            
        }).catch(function(responseError){
            res.status(responseError.code);
        })
}