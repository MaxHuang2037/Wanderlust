import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    picture: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
    },
    trips: [{}]
}, { timestamps: true })

const User = mongoose.model("wanderlustusers", userSchema)
export default User

// depFlight: {price: String,
//             segments: [{departure: {iataCode: String,
//                                     at: String,
//                                     terminal: String},
//                         arrival: {iataCode: String,
//                                     at: String,
//                                     terminal: String},
//                         duration: String,
//                         carrier: String}],
//             totalDuration: String,
//             cabin: String},
// retFlight: {price: String,
//             segments: [{departure: {iataCode: String,
//                                     at: String,
//                                     terminal: String},
//                         arrival: {iataCode: String,
//                                     at: String,
//                                     terminal: String},
//                         duration: String,
//                         carrier: String}],
//             totalDuration: String,
//             cabin: String},
// // hotel: {},
// attractions: [{name: String,
//                 description: String,
//                 price: String,
//                 pictures: [String]}]