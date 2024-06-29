import express from 'express'
import { getHotelListCity, getHotelListGeo } from '../controllers/hotelList.js'
import { getHotelOffers } from '../controllers/hotelOffers.js'

const Router = express.Router()

Router
.get("/city", getHotelListCity)
.get("/geo", getHotelListGeo)
.get("/offers", getHotelOffers)

export default Router