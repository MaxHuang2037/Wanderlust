import express from 'express'
import { getHotelListGeo } from '../controllers/hotelList.js'
import { getHotelOffers } from '../controllers/hotelOffers.js'

const Router = express.Router()

Router
.get("/hotelsGeo", getHotelListGeo)
.get("/hotelOffer", getHotelOffers)

export default Router