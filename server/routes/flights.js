import express from "express"
const router = express.Router()

import { airportSearch } from "../controllers/airportSearch.js"
import { flightSearch } from "../controllers/flightSearch.js"

router
.get("/airports", airportSearch)
.get("/flightOffers", flightSearch)

export default router