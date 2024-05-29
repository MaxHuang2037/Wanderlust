import { amadeus } from "../index.js";

export const airportSearch = async(req, res) => {
    let airports = [];
    const city = req.query.city
    amadeus.client.get('/v1/reference-data/locations/cities', {keyword: city, include: 'AIRPORTS'}).then(function(response){
        // console.log(response.result.included.airports);
        console.log(response)
        let data = response.data
        for(let i = 0; i < response.result.meta.count; i++){
            console.log("HERE")
            if(data[i].iataCode == undefined){
                break;
            }
            let airport = data[i].relationships
            for(let j = 0; j < airport.length; j++){
                airports.push({name: data[i].name, stateCode: data[i].address.stateCode, iataCode: airport[j].id})
            }
        }
        console.log(airports)
        res.status(200).json({airports: airports, type: req.query.type});

        }).catch(function(responseError){
        res.status(responseError.code);
    })
}