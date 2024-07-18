import { useDispatch, useSelector } from "react-redux"
import { MyTrips } from "./MyTrips"
import { useEffect } from "react"
import { getTrips } from "../../features/userSlice"
import { Link } from "react-router-dom"

export const TripPlanner = ({setPlanning}) => {
    const dispatch = useDispatch()
    const {trips} = useSelector((state) => state.auth)

    const planningTrip = () => {
        localStorage.setItem("planning", "t")
        setPlanning(localStorage.getItem("planning"))
        localStorage.setItem("progress", 0)
        localStorage.setItem("trip", JSON.stringify({}))
        window.location.href = "/flights"
    }

    useEffect(() => {
        dispatch(getTrips())
    }, [dispatch])

    return(
        <div>
            {localStorage.getItem("profile") === undefined ?
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