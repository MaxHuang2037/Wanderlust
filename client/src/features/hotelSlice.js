import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getHotelListGeo = createAsyncThunk("/hotelsGeo", 
    async ({long, lat}) => {
        try {
            const res = await fetch(`/hotels/hotelsGeo?long=${long}&lat=${lat}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

export const getHotelOffers = createAsyncThunk("/hotelsOffers", 
    async ({id, adults, checkIn, checkOut}) => {
        try {
            const res = await fetch(`/hotels/hotelOffer?id=${id}&adults=${adults}&checkIn=${checkIn}&checkOut=${checkOut}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

const initialState = {
    hotels: [],
    singleHotel: [],
    singleHotelState: ""
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
        builder.addCase(getHotelListGeo.fulfilled, (state, {payload}) => {
            if (payload.message) {
                return window.alert(payload.message)
            }
            state.hotels = payload.hotels;
        }).addCase(getHotelOffers.fulfilled, (state, {payload}) => {
            state.singleHotelState = ""
            if(payload.message) {
                window.alert(payload.message)
                return window.location.href = "/stays"
            }
            state.singleHotel = payload
        }).addCase(getHotelOffers.pending, (state) => {
            state.singleHotelState = "p"
        })
    }
})

export const {clearHotels, clearOffers} = hotelSlice.actions
export default hotelSlice.reducer