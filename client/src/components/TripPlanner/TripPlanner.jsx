import { useDispatch, useSelector } from "react-redux"
import { MyTrips } from "./MyTrips"
import { useEffect } from "react"
import { getTrips } from "../../features/userSlice"
import { Link } from "react-router-dom"

import styles from "./styles.module.css"

export const TripPlanner = ({setPlanning}) => {
    const dispatch = useDispatch()
    const {trips} = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(getTrips())
    }, [dispatch])

    return(
        <div>
            {localStorage.getItem("profile") === null ?
                <h1>Please <Link to="/auth">sign in</Link> to use this functionality</h1> 
                :
                <div>
                    <MyTrips setPlanning={setPlanning} trips={trips}/>
                </div>
            }
        </div>
    )
}