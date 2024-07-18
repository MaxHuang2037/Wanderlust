import styles from "./styles.module.css"
import { Itinerary } from "./Itinerary"
import { TripFlight } from "./TripFlight"
import { Hotel } from "./Hotel"

export const Trip = ({trip}) => {
    console.log(trip)

    return(
        <div className={styles.trip_container}>
            <h1>Flight(s)</h1>
            <div className={styles.horizontal_section}>
                <h1>{trip.depFlight.segments[0].departure.iataCode}</h1>
                <h1>{"→ → →"}</h1>
                <h1>{trip.depFlight.segments[trip.depFlight.segments.length - 1].arrival.iataCode}</h1>
            </div>
            <div className={styles.segments}>
                <TripFlight offers={trip.depFlight}/>
                {trip.retFlight !== undefined && <TripFlight offers={trip.retFlight}/>}
            </div>
            <h1>Hotel</h1>
                <Hotel hotel={trip.hotel}/>
            <h1>Things To Do</h1>
            <div className={styles.activities_container}>
                {trip.activity != null && <Itinerary activities={trip.activity}/>}
            </div>
        </div>
    )
}