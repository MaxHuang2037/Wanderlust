import express from 'express'
import { getHotelListCity, getHotelListGeo } from '../controllers/hotelList.js'
import { getHotelOffers } from '../controllers/hotelOffers.js'

const Router = express.Router()

Router
.get("/hotelsCity", getHotelListCity)
.get("/hotelsGeo", getHotelListGeo)
.get("/hotelOffer", getHotelOffers)

export default Router