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

const initialState = {
    airports_to: [],
    airports_from: []
}

const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        clearAirportsTo: (state) => {
            state.airports_to = []
        },
        clearAirportsFrom: (state) => {
            state.airports_from = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAirports.fulfilled, (state, {payload}) => {
            if(payload.message){
                return window.alert(payload.message)
            }
            payload.type === "from" ? state.airports_from = payload.airports : state.airports_to = payload.airports
        })
    }
})

export const {clearAirportsTo, clearAirportsFrom} = flightSlice.actions
export default flightSlice.reducer