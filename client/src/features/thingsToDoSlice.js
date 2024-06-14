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
            const res = await fetch(`/attractions/thingstodo?long=${data.long}&lat=${data.lat}`)
            return await res.json()
        } catch(err) {
            console.log(err.message)
        }
    }
)

const initialState = {
    things_to_do: [],
    things_to_do_state: ""
}

const thingsToDoSlice = createSlice({
    name: 'thingstodo',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCities.fulfilled, (state, {payload}) => {

        }).addCase(getThingsToDo.fulfilled, (state, {payload}) => {

        }).addCase(getThingsToDo.pending, (state) => {

        })
    }
})

export default thingsToDoSlice.reducer