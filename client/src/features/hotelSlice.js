import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getHotelsCity = createAsyncThunk("/hotels", 
    async (cityCode) => {
        try {
            const res = await fetch(`/hotels/city?cityCode=${cityCode}`)
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
        builder.addCase(getHotelsCity.fulfilled, (state, {payload}) => {
            if(payload.message) {
                return window.alert(payload.message)
            }
            state.hotels = payload.hotels;
        })
    }
})

export const {clearHotels} = hotelSlice.actions
export default hotelSlice.reducer