import { useDispatch, useSelector } from "react-redux"
import { updateTrips } from "../../features/userSlice"
import { MyTrips } from "./MyTrips"
import { useEffect } from "react"
import { getTrips } from "../../features/userSlice"

export const TripPlanner = () => {
    const dispatch = useDispatch()

    const {trips} = useSelector((state) => state.auth)

    const addTrip = () => {
        const test = {
            depFlight: {price: "999",
                        segments: [{departure: {iataCode: "YYZ",
                                                at: "String",
                                                terminal: "String"},
                                    arrival: {iataCode: "String",
                                                at: "String",
                                                terminal: "String"},
                                    duration: "String",
                                    carrier: "String"}],
                        totalDuration: "String",
                        cabin: "String"},
            retFlight: {price: "String",
                        segments: [{departure: {iataCode: "String",
                                                at: "String",
                                                terminal: "String"},
                                    arrival: {iataCode: "String",
                                                at: "String",
                                                terminal: "String"},
                                    duration: "String",
                                    carrier: "String"}],
                        totalDuration: "String",
                        cabin: "String"},
            attractions: [{name: "String",
                            description: "String",
                            price: "String",
                            pictures: ["String"]}]
        }

        dispatch(updateTrips([...trips, test]))
    }

    useEffect(() => {
        dispatch(getTrips())
    }, [dispatch])

    return(
        <div onClick={() => addTrip()}>
            THIS IS THE BODY
            <MyTrips trips={trips}/>
        </div>
    )
}