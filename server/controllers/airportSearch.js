import { amadeus } from "../index.js";

export const airportSearch = async(req, res) => {
    let airports = [];
    const city = req.query.city
    amadeus.client.get('/v1/reference-data/locations/cities', {keyword: city, include: 'AIRPORTS'}).then(function(response){
        // console.log(response.result.included.airports);
        // console.log(response)
        let data = response.data
        for(let i = 0; i < response.result.meta.count; i++){
            if(data[i].iataCode == undefined){
                break;
            }
            let airport = data[i].relationships
            for(let j = 0; j < airport.length; j++){
                let airportName = response.result.included.airports[airport[j].id].name
                airports.push({name: data[i].name, stateCode: data[i].address.stateCode, iataCode: airport[j].id, airportName: airportName})
            }
        }
        // console.log(airports)
        res.status(200).json({airports: airports, type: req.query.type})
    }).catch(function(err){
        res.status(err.description[0].status).json({message: err.description[0].detail})
    })
}