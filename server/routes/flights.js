import express from "express"
const router = express.Router()

import { airportSearch } from "../controllers/airportSearch.js"

router
.get("/airports", airportSearch)

export default router