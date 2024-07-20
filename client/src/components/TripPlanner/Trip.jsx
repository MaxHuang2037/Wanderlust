import styles from "./styles.module.css"
import { Itinerary } from "./Itinerary"
import { TripFlight } from "./TripFlight"
import { Hotel } from "./Hotel"

export const Trip = () => {
    const singleTrip = JSON.parse(localStorage.getItem("singleTrip"))

    if(singleTrip === null) return (<div>wait</div>)
    return(
        <div className={styles.trip_container}>
            <h1>Flight(s)</h1>
            <div className={styles.horizontal_section}>
                <h1>{singleTrip.depFlight.segments[0].departure.iataCode}</h1>
                <h1>{"→ → →"}</h1>
                <h1>{singleTrip.depFlight.segments[singleTrip.depFlight.segments.length - 1].arrival.iataCode}</h1>
            </div>
            <div className={styles.segments}>
                <TripFlight offers={singleTrip.depFlight}/>
                {singleTrip.retFlight !== undefined && <TripFlight offers={singleTrip.retFlight}/>}
            </div>
            <h1>Hotel</h1>
                <Hotel hotel={singleTrip.hotel}/>
            <h1>Things To Do</h1>
            <div className={styles.activities_container}>
                {singleTrip.activity != null && <Itinerary activities={singleTrip.activity}/>}
            </div>
        </div>
    )
}