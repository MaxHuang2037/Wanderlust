import { useState } from "react"
import { CityDrodown } from "./CityDropdown"
import { PassengerDropdown } from "./PassengerDropdown"
import { FlightDatePicker } from "./DatePicker"
import styles from "../styles.module.css"

let initialState = {adult: 0, youth: 0, child: 0, infant: 0}

export const Input = () => {
    const [quantity, setQuantity] = useState(initialState)
    const [flightType, setFlightType] = useState("oneway")
    return(
        <div>
            <section className={styles.section}>
                <div>
                    <input type="radio" id="oneway" name="flight_type" defaultChecked="true" onClick={(() => setFlightType("oneway"))}/>
                    <label htmlFor="oneway">One way</label>
                </div>
                <div>
                    <input type="radio" id="roundtrip" name="flight_type" onClick={() => setFlightType("roundtrip")}/>
                    <label htmlFor="Oneway">Round trip</label>
                </div>
            </section>
            <section className={styles.section}>
                <CityDrodown type="from"/>
                <CityDrodown type="to"/>
                <FlightDatePicker flightType={flightType}/>
                <PassengerDropdown quantity={quantity} setQuantity={setQuantity}/>
            </section>
        </div>
    )
}