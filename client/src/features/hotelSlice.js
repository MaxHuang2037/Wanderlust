import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const getHotels = createAsyncThunk("/hotels", 
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
    hotels: []
}

const hotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        clearHotels: (state) => {
            state.hotels = []
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(getHotels.fulfilled, (state, {payload}) => {
        //     if(payload.message) {
        //         return window.alert(payload.message)
        //     }
        //     state.hotels = payload.hotels;
        // })
    }
})

export const {clearHotels} = hotelSlice.actions
export default hotelSlice.reducer