import { useDispatch, useSelector } from "react-redux"
import { updateTrips } from "../../features/userSlice"
import { MyTrips } from "./MyTrips"
import { useEffect } from "react"
import { getTrips } from "../../features/userSlice"
import { Link } from "react-router-dom"

export const TripPlanner = ({setPlanning}) => {
    const dispatch = useDispatch()

    const {trips} = useSelector((state) => state.auth)

    const addTrip = () => {
        const test = {
            depFlight: {price: "999",
                        segments: [{departure: {iataCode: "YYZ",
                                                at: "2024-07-10 at 20:30:00",
                                                terminal: "M"},
                                    arrival: {iataCode: "YYY",
                                                at: "2024-07-10 at 20:30:00",
                                                terminal: "A"},
                                    duration: "T69h",
                                    carrier: "398fshj"},
                                    {departure: {iataCode: "YYZ",
                                        at: "2024-07-10 at 20:30:00",
                                        terminal: "M"},
                                    arrival: {iataCode: "YYY",
                                                at: "2024-07-10 at 20:30:00",
                                                terminal: "A"},
                                    duration: "T69h",
                                    carrier: "398fshj"},
                                    {departure: {iataCode: "YYZ",
                                        at: "2024-07-10 at 20:30:00",
                                        terminal: "M"},
                                    arrival: {iataCode: "YYY",
                                                at: "2024-07-10 at 20:30:00",
                                                terminal: "A"},
                                    duration: "T69h",
                                    carrier: "398fshj"}],
                        totalDuration: "T99090h",
                        cabin: "3338"},
            // retFlight: {price: "String",
            //             segments: [{departure: {iataCode: "A",
            //                 at: "2024-07-10 at 20:30:00",
            //                 terminal: "M"},
            //                 arrival: {iataCode: "B",
            //                             at: "2024-07-10 at 20:30:00",
            //                             terminal: "B"},
            //                 duration: "T69h",
            //                 carrier: "398fshj"},
            //                 {departure: {iataCode: "B",
            //                     at: "2024-07-10 at 20:30:00",
            //                     terminal: "M"},
            //                 arrival: {iataCode: "C",
            //                             at: "2024-07-10 at 20:30:00",
            //                             terminal: "A"},
            //                 duration: "T69h",
            //                 carrier: "398fshj"},
            //                 {departure: {iataCode: "C",
            //                     at: "2024-07-10 at 20:30:00",
            //                     terminal: "M"},
            //                 arrival: {iataCode: "D",
            //                             at: "2024-07-10 at 20:30:00",
            //                             terminal: "C"},
            //                 duration: "T69h",
            //                 carrier: "398fshj"}],
            //             totalDuration: "233h",
            //             cabin: "String"},
            attractions: [{name: "TEST1",
                            description: "alsjsalkjfdasfasfdasafsa",
                            price: "3434",
                            pictures: ["String", "string"]},
                            {name: "TEST2",
                            description: "alsjsalkjfdasfasfdasafsa",
                            price: "3434",
                            pictures: ["String", "string"]},
                            {name: "TEST3",
                                description: "alsjsalkjfdasfasfdasafsa",
                                price: "3434",
                                pictures: ["String", "string"]},
                            {name: "TEST4",
                                description: "alsjsalkjfdasfasfdasafsa",
                                price: "3434",
                                pictures: ["String", "string"]}]
        }

        dispatch(updateTrips([...trips, test]))
    }

    const planningTrip = () => {
        localStorage.setItem("planning", "t")
        localStorage.setItem("progress", 0)
        setPlanning(localStorage.getItem("planning"))
        localStorage.setItem("trip", JSON.stringify({}))
        window.location.href = "/flights"
    }

    useEffect(() => {
        dispatch(getTrips())
    }, [dispatch])

    return(
        <div>
            {localStorage.getItem("profile") == undefined ?
                <h1>Please <Link to="/auth">sign in</Link> to use this functionality</h1> 
                :
                <div>
                    <button onClick={() => planningTrip()}>Add Trip</button>
                    <MyTrips trips={trips}/>
                </div>
            }
        </div>
    )
}