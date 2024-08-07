import express from "express"
import {editProfile, getTrips, signIn, signUp, updateTrips} from "../controllers/users.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router
.post("/signIn", signIn)
.post("/signUp", signUp)
.patch("/editProfile", auth, editProfile)
.patch("/updateTrips", auth, updateTrips)
.get("/getTrips", auth, getTrips)

export default router