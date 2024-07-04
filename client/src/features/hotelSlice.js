import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getHotelsCity = createAsyncThunk("/hotelscity", 
    async ({cityCode, adults, checkIn, checkOut}) => {
        try {
            const res = await fetch(`/hotels/city?cityCode=${cityCode}&adults=${adults}&checkIn=${checkIn}&checkOut=${checkOut}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

export const getHotelListGeo = createAsyncThunk("/hotelsGeo", 
    async ({long, lat, adults, checkIn, checkOut}) => {
        try {
            const res = await fetch(`/hotels/geo?long=${long}&lat=${lat}&adults=${adults}&checkIn=${checkIn}&checkOut=${checkOut}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

const initialState = {
    hotelList: [],
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
            state.hotels = payload.hotels;
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