import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getCities = createAsyncThunk("/cities", 
    async (city) => {
        try {
            const res = await fetch(`/attractions/cities?city=${city}`)
            return await res.json()
        } catch (err) {
            console.log(err.message)
        }
    }
)

export const getThingsToDo = createAsyncThunk("/things-to-do", 
    async (data) => {
        try {
            const res = await fetch(`/attractions/thingstodo?lat=${data.lat}&long=${data.long}`)
            return await res.json()
        } catch(err) {
            console.log(err.message)
        }
    }
)

const initialState = {
    things_to_do: [],
    cities: [],
    things_to_do_state: "",
    cities_state: ""
}

const thingsToDoSlice = createSlice({
    name: 'thingstodo',
    initialState,
    reducers: {
        clearCities: (state) => {
            state.cities = []
            state.cities_state = ""
        },
        clearThingsToDo: (state) => {
            state.things_to_do = []
            state.things_to_do_state = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCities.fulfilled, (state, {payload}) => {
            state.cities_state = ""
            if(payload.message){
                return window.alert(payload.message)
            }
            state.cities = payload.cities
            if(state.cities.length === 0) state.cities_state = "e"

        }).addCase(getThingsToDo.fulfilled, (state, {payload}) => {
            state.things_to_do_state = ""
            if(payload.message){
                return window.alert(payload.message)
            }
            state.things_to_do = payload.thingsToDo
            if(state.things_to_do.length === 0) state.things_to_do_state = "e"
        }).addCase(getThingsToDo.pending, (state) => {
            state.things_to_do_state = "p"
        })
    }
})

export const {clearCities, clearThingsToDo} = thingsToDoSlice.actions
export default thingsToDoSlice.reducer