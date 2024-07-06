import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getTrips } from "../../features/userSlice"


export const MyTrips = ({trips}) => {

    // console.log(trips)
    return(
        <div>
            <h1>My Trips</h1>
            <div>
                {trips.map((trip) => {
                    return <h2>{trip.depFlight.price}</h2>
                })}
            </div>
        </div>
    )
}