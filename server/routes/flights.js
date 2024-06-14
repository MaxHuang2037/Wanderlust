import express from "express"
const router = express.Router()

import { getAirports } from "../controllers/airportSearch.js"
import { getFlights } from "../controllers/flightSearch.js"

router
.get("/airports", getAirports)
.get("/flightOffers", getFlights)

export default router