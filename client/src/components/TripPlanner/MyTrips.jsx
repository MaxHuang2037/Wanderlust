import { TripCondensed } from "./TripCondensed"

import styles from "./styles.module.css"

export const MyTrips = ({trips, setPlanning}) => {
    let id = 0;

    const planningTrip = () => {
        localStorage.setItem("planning", "t")
        setPlanning(localStorage.getItem("planning"))
        localStorage.setItem("progress", 0)
        localStorage.setItem("trip", JSON.stringify({}))
        localStorage.removeItem("retFlight")
        localStorage.removeItem("depFlight")
        window.location.href = "/flights"
    }

    return(
        <div>
            <h1 className={styles.pageTitle}>My Trips</h1>
            <div className={styles.tripContainer}>
                {trips.map((trip) => {
                    id++
                    return <TripCondensed id={id} trip={trip}/>
                })}
                <div onClick={() => planningTrip()} className={styles.addTripSection}>
                    <h1 className={styles.addTripPlus}>+</h1>
                    <h2 className={styles.addTripText}>Add trip</h2>
                </div>
            </div>
        </div>
    )
}