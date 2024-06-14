import express from 'express'
import { getHotelListCity, getHotelListGeo } from '../controllers/hotelList.js'

const Router = express.Router()

Router
.get("/city", getHotelListCity)
.get("/geo", getHotelListGeo)

export default Router