import { TripCondensed } from "./TripCondensed"

import styles from "./styles.module.css"

export const MyTrips = ({trips}) => {
    let id = 0;
    return(
        <div>
            <h1 className={styles.pageTitle}>My Trips</h1>
            <div>
                {trips.map((trip) => {
                    id++
                    return <TripCondensed id={id} trip={trip}/>
                })}
            </div>
        </div>
    )
}