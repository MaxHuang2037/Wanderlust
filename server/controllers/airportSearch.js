import { amadeus } from "../index.js";

export const getAirports = async(req, res) => {
    let airports = [];
    const city = req.query.city
    const type = req.query.type
    amadeus.client.get('/v1/reference-data/locations/cities', {keyword: city, include: 'AIRPORTS'}).then(function(response){
        let data = response.data
        for(let i = 0; i < response.result.meta.count; i++){
            if(data[i].iataCode == undefined){
                break;
            }
            let airport = data[i].relationships
            if(airport == undefined){
                airports = []
                break;
            }
            for(let j = 0; j < airport.length; j++){
                let airportName = response.result.included.airports[airport[j].id].name
                airports.push({name: data[i].name, stateCode: data[i].address.stateCode, iataCode: airport[j].id, airportName: airportName})
            }
        }
        res.status(200).json({airports: airports, type: type})
    }).catch(function(err){
        console.log(err)
        res.status(err.description[0].status).json({type: type, message: err.description[0].title})
    })
}