import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getAirports = createAsyncThunk("/airports", 
    async (data) => {
        try {
            const res = await fetch(`/flights/airports?city=${data.cityName}&type=${data.type}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

export const getFlightOffers = createAsyncThunk("/flights", 
    async (data) => {
        try {
            const res = await fetch(`/flights/flightOffers?origCode=${data.origCode}&destCode=${data.destCode}&depDate=${data.depDate}&adults=${data.adults}&children=${data.children}&infants=${data.infants}`)
            return await res.json()
        } catch(err) {
            console.log(err.message)
        }
    }
)

const initialState = {
    airports_to: [],
    airports_from: [],
    flight_offers: [],
    flight_offers_state: "",
    airports_to_state: "", // unused
    airports_from_state: "" // unused
}

const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        clearAirportsTo: (state) => {
            state.airports_to_state = ""
            state.airports_to = []
        },
        clearAirportsFrom: (state) => {
            state.airports_from_state = ""
            state.airports_from = []
        },
        clearFlightOffers: (state) => {
            state.flight_offers_state = ""
            state.flight_offers = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAirports.fulfilled, (state, {payload}) => {
            // console.log(payload)
            payload.type === "from" ? state.airports_from_state = "" : state.airports_to_state = ""
            if(payload.message){
                return window.alert(payload.message)
            }

            if(payload.type === "from"){
                state.airports_from = payload.airports
                if(state.airports_from.length == 0) state.airports_from_state = "e"
            } else {
                state.airports_to = payload.airports
                if(state.airports_to.length == 0) state.airports_to_state = "e"
            }
        }).addCase(getFlightOffers.fulfilled, (state, {payload}) => {
            // console.log(payload)
            state.flight_offers_state = ""
            if(payload.message){
                return window.alert(payload.message)
            }
            state.flight_offers = payload
            if(state.flight_offers.length == 0){
                console.log("JEEEE")
                state.flight_offers_state = "e"
            }
        }).addCase(getFlightOffers.pending, (state) => {
            state.flight_offers_state = "p"
        })
    }
})

export const {clearAirportsTo, clearAirportsFrom, clearFlightOffers} = flightSlice.actions
export default flightSlice.reducer