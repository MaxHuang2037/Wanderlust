import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import flightReducer from "./flightSlice"
import hotelReducer from "./hotelSlice"
import thingsToDoReducer from "./thingsToDoSlice"

export const store = configureStore({
    reducer: {
        auth: userReducer,
        flight: flightReducer,
        hotels: hotelReducer,
        thingstodo: thingsToDoReducer
    },
})