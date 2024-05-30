import { useEffect, useState } from "react"
import { CityDrodown, Counter } from "./CityDropdown"
import styles from "./styles.module.css"
import { PassengerDropdown } from "./PassengerDropdown"
import { FlightDatePicker } from "./DatePicker"

let initialState = {adult: 0, youth: 0, child: 0, infant: 0}

export const Input = () => {
    const [quantity, setQuantity] = useState(initialState)

    return(
        <div>
            <section className={styles.section}>
                <div>
                    <input type="radio" id="oneway" name="flight_type" defaultChecked="true"/>
                    <label htmlFor="oneway">One way</label>
                </div>
                <div>
                    <input type="radio" id="roundtrip" name="flight_type"/>
                    <label htmlFor="Oneway">Round trip</label>
                </div>
            </section>
            <section className={styles.section}>
                <CityDrodown type="from"/>
                <CityDrodown type="to"/>
                <FlightDatePicker/>
                <PassengerDropdown/>
            </section>
        </div>
    )
}