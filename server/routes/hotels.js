import express from 'express'
import { getHotelListCity, getHotelListGeo } from '../controllers/hotelList.js'
import { getHotelOffers } from '../controllers/hotelOffers.js'

import { hotelCity, hotelGeo } from '../controllers/hotel.js'

const Router = express.Router()

Router
.get("/hotelsCity", hotelCity)
.get("/hotelsGeo", hotelGeo)

export default Router