import { FlightOffers } from "./Flightlist/FlightOffers"
import { useState } from "react"
import styles from "./styles.module.css"
import { FlightInput } from "./Input/FlightInput"

export const Flights = () => {
    const [flightType, setFlightType] = useState("oneway")
    const [flightToggle, setFlightToggle] = useState("departure")

    return(
        <div>
            <FlightInput flightType={flightType} setFlightType={setFlightType} setFlightToggle={setFlightToggle}/>
            {flightType === "roundtrip" &&
                <div className={styles.roundtrip_toggle}>
                    <h2 id="departure" className={styles.roundtrip_buttons} onClick={() => {
                        setFlightToggle("departure")
                        document.getElementById("departure").style.borderStyle = "solid"
                        document.getElementById("return").style.borderStyle = "none"
                    }}>Departure</h2>
                    <h2 id="return" className={styles.roundtrip_buttons} onClick={() => {
                        setFlightToggle("return")
                        document.getElementById("departure").style.borderStyle = "none"
                        document.getElementById("return").style.borderStyle = "solid"
                    }}>Return</h2>
                </div>
            }
            <FlightOffers flightToggle={flightToggle}/>
        </div>
    )
}