import express from 'express'
import { hotelListCity, hotelListGeo } from '../controllers/hotelList.js'

const Router = express.Router()

Router
.get("/city", hotelListCity)
.get("/geo", hotelListGeo)

export default Router