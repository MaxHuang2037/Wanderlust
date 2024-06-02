import express from "express"
import dotenv from "dotenv"
import Amadeus from "amadeus"
import mongoose from "mongoose"

import userRoutes from "./routes/users.js"
import flightRoutes from "./routes/flights.js"
import hotelRoutes from "./routes/hotels.js"

// OMGGGGGGG
dotenv.config()

const app = express()
// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// getting auth from amadeus
const CLIENT_ID = process.env.API_KEY
const SECRET = process.env.API_SECRET
export const amadeus = new Amadeus({
    clientId: CLIENT_ID,
    clientSecret: SECRET
});

app.use("/users", userRoutes)
app.use("/flights", flightRoutes)
app.use("/hotels", hotelRoutes)

const URI = process.env.MONGO_URI
const PORT = 5000

mongoose.connect(URI, {dbName: 'wanderlust'}).then(() => app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})).catch((err) => {
    console.log(err.message)
})
