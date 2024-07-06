import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getHotelsCity = createAsyncThunk("/hotelsCity", 
    async ({cityCode, adults, checkIn, checkOut}) => {
        try {
            const res = await fetch(`/hotels/hotelsCity?cityCode=${cityCode}&adults=${adults}&checkIn=${checkIn}&checkOut=${checkOut}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

export const getHotelListGeo = createAsyncThunk("/hotelsGeo", 
    async ({long, lat, adults, checkIn, checkOut}) => {
        try {
            const res = await fetch(`/hotels/hotelsGeo?long=${long}&lat=${lat}&adults=${adults}&checkIn=${checkIn}&checkOut=${checkOut}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

const initialState = {
    hotels: [],
    offers: []
}

const hotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        clearHotels: (state) => {
            state.hotels = []
        },
        clearOffers: (state) => {
            state.offers = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getHotelsCity.fulfilled, (state, {payload}) => {
            if(payload.message) {
                return window.alert(payload.message)
            }
            state.hotels = payload.hotelList
            state.offers = payload.offers
        }).addCase(getHotelListGeo.fulfilled, (state, {payload}) => {
            if (payload.message) {
                return window.alert(payload.message)
            }
            state.hotels = payload.hotels;
        })
    }
})

export const {clearHotels, clearOffers} = hotelSlice.actions
export default hotelSlice.reducer