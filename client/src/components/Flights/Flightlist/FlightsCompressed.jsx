import { AddButton } from "../../TripProgress/AddButton"
import styles from "../styles.module.css"
import { Flight } from "./Flight"
import { useState } from "react"

export const FlightsCompressed = ({offer, type}) => {
    const departureTime = offer.segments[0].departure.at.replace("T", " at ")
    const numStops = offer.segments.length - 1
    const arrivalTime = offer.segments[numStops].arrival.at.replace("T", " at ")
    const [showDetails, setShowDetails] = useState(false)

    const show = () => {
        setShowDetails(!showDetails)
        document.getElementById("main_body").style.overflowY = "hidden"
    }

    return(
        <div className={styles.flight}>
            {showDetails && <div className={styles.fullscreen_container}><Flight offer={offer} setShowDetails={setShowDetails}></Flight></div>}
            <div>
                <h1>${offer.price} - {offer.cabin}</h1>
                <h3 id={styles.header3}>{departureTime} -- {numStops} stop(s) -- {arrivalTime}</h3>
                <h3 id={styles.header3}>Total duration: {offer.totalDuration.slice(2)}</h3>
                <p id={styles.details_button} onClick={() => show()}>Details</p>
            </div>
            <div>
                <h3 id={styles.header3}>Segments</h3>
                {offer.segments.map((seg) => {
                    return <p id={styles.ptag}>{seg.departure.iataCode}: {seg.departure.at.replace("T", " at ")} → {seg.arrival.iataCode}: {seg.arrival.at.replace("T", " at ")}</p>
                })}
            </div>
            {localStorage.getItem("planning") == "t" && <AddButton type={`${type}Flight`} data={offer}/>}
        </div>
    )
}