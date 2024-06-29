import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getHotelsCity = createAsyncThunk("/hotelsGeo", 
    async (cityCode) => {
        try {
            const res = await fetch(`/hotels/city?cityCode=${cityCode}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

export const getHotelListGeo = createAsyncThunk("/hotelsCity", 
    async ({long, lat}) => {
        try {
            const res = await fetch(`/hotels/geo?long=${long}&lat=${lat}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

export const getHotelOffers = createAsyncThunk("/hotelsOffers", 
    async (id) => {
        try {
            const res = await fetch(`/hotels/offers?id=${id}`)
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
            state.hotels = payload.hotels;
        }).addCase(getHotelListGeo.fulfilled, (state, {payload}) => {
            if (payload.message) {
                return window.alert(payload.message)
            }
            state.hotels = payload.hotels;
        }).addCase(getHotelOffers.fulfilled, (state, {payload}) => {
            if(payload.message) {
                return window.alert(payload.message)
            }
        })
    }
})

export const {clearHotels, clearOffers} = hotelSlice.actions
export default hotelSlice.reducer