import express from "express"
import { getCities, getThingsToDo } from "../controllers/attractionSearch.js"

const router = express.Router()

router
.get("/cities", getCities)
.get("/thingstodo", getThingsToDo)

export default router