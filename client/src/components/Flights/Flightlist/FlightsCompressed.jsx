import styles from "../styles.module.css"
import { Flight } from "./Flight"
import { useState } from "react"

export const FlightsCompressed = ({offers}) => {
    const departureTime = offers.segments[0].departure.at.replace("T", " at ")
    const numStops = offers.segments.length - 1
    const arrivalTime = offers.segments[numStops].arrival.at.replace("T", " at ")
    const [showDetails, setShowDetails] = useState(false)

    const show = () => {
        setShowDetails(!showDetails)
        document.getElementById("main_body").style.overflowY = "hidden"
    }

    return(
        <div className={styles.flight}>
            {showDetails && <div className={styles.fullscreen_container}><Flight offers={offers} setShowDetails={setShowDetails}></Flight></div>}
            <div>
                <h1>${offers.price} - {offers.cabin}</h1>
                <h3 id={styles.header3}>{departureTime} -- {numStops} stop(s) -- {arrivalTime}</h3>
                <h3 id={styles.header3}>Total duration: {offers.totalDuration.slice(2)}</h3>
                <p id={styles.details_button} onClick={() => show()}>Details</p>
            </div>
            <div>
                <h3 id={styles.header3}>Segments</h3>
                {offers.segments.map((seg) => {
                    return <p id={styles.ptag}>{seg.departure.iataCode}: {seg.departure.at.replace("T", " at ")} → {seg.arrival.iataCode}: {seg.arrival.at.replace("T", " at ")}</p>
                })}
            </div>
        </div>
    )
}