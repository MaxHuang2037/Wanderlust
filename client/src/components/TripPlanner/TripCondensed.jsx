import styles from "./styles.module.css";

export const TripCondensed = ({id, trip}) => {
        return (
            <div onClick={() => {
                localStorage.setItem("singleTrip", JSON.stringify(trip))
                window.location.href = `/trip`
                //redirectHere
            }} className={styles.tripShort}>
                <img src={`https://picsum.photos/seed/${id}/280/192`} className={styles.tripPhoto}/>

                <div className={styles.shortDetails}>
                    <h1>{trip.title}</h1>

                    <div>
                        <div className={styles.horizontal_section}>
                        <h1>{trip.depFlight.segments[0].departure.iataCode}</h1>
                        <h1>{"→ → →"}</h1>
                        <h1>{trip.depFlight.segments[trip.depFlight.segments.length - 1].arrival.iataCode}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
}