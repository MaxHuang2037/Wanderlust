import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// export const getHotelsCity = createAsyncThunk("/hotelsCity", 
//     async ({cityCode, adults, checkIn, checkOut}) => {
//         try {
//             const res = await fetch(`/hotels/hotelsCity?cityCode=${cityCode}&adults=${adults}&checkIn=${checkIn}&checkOut=${checkOut}`)
//             return await res.json()
//         } catch (err) {
//             console.log(err.message)
//         }
//     }
// )

// export const getHotelListGeo = createAsyncThunk("/hotelsGeo", 
//     async ({long, lat, adults, checkIn, checkOut}) => {
//         try {
//             const res = await fetch(`/hotels/hotelsGeo?long=${long}&lat=${lat}&adults=${adults}&checkIn=${checkIn}&checkOut=${checkOut}`)
//             return await res.json()
//         } catch (err) {
//             console.log(err.message)
//         }
//     }
// )

export const getHotelsCity = createAsyncThunk("/hotelsCity", 
    async (cityCode) => {
        console.log(cityCode)
        try {
            const res = await fetch(`/hotels/hotelsCity?cityCode=${cityCode}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

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

// const hotelSlice = createSlice({
//     name: 'hotels',
//     initialState,
//     reducers: {
//         clearHotels: (state) => {
//             state.hotels = []
//         },
//         clearOffers: (state) => {
//             state.offers = []
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(getHotelsCity.fulfilled, (state, {payload}) => {
//             if(payload.message) {
//                 return window.alert(payload.message)
//             }
//             state.hotels = payload.hotelList
//             state.offers = payload.offers
//         }).addCase(getHotelListGeo.fulfilled, (state, {payload}) => {
//             if (payload.message) {
//                 return window.alert(payload.message)
//             }
//             state.hotels = payload.hotelList;
//             state.offers = payload.offers;
//         })
//     }
// })

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
        }).addCase(getHotelListGeo.fulfilled, (state, {payload}) => {
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