import { useDispatch } from "react-redux"
import { updateTrips } from "../../features/userSlice"

export const TripPlanner = () => {
    const dispatch = useDispatch()

    const addTrip = () => {
        const test = [{
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
        }]
        dispatch(updateTrips(test))
    }
    return(
        <div onClick={() => addTrip()}>
            THIS IS THE BODY
        </div>
    )
}