import { useState } from "react"
import { CityDrodown } from "./CityDropdown"
import { PassengerDropdown } from "./PassengerDropdown"
import { FlightDatePicker } from "./FlightDatePicker"
import { useDispatch } from "react-redux"
import { getFlightOffers } from "../../../features/flightSlice"
import { clearAirportsFrom, clearAirportsTo } from "../../../features/flightSlice"

import styles from "../styles.module.css"

const passengers = {adult: 0, youth: 0, child: 0, infant: 0}
const codes = {origCode: "", destCode: ""}

export const Input = () => {
    const [flightType, setFlightType] = useState("oneway")
    const [quantity, setQuantity] = useState(passengers)
    const [iataCodes, setIataCodes] = useState(codes)
    const [depDate, setDepDate] = useState("")
    const dispatch = useDispatch()

    const searchFlights = () => {
        dispatch(getFlightOffers({origCode: iataCodes.origCode, destCode: iataCodes.destCode, depDate: depDate, adults: quantity.adult + quantity.youth, children: quantity.child, infants: quantity.infant}))
    }

    const clearInput = () => {
        setQuantity(passengers)
        setIataCodes(codes)
        dispatch(clearAirportsFrom())
        dispatch(clearAirportsTo())
        document.getElementById("to").value = ""
        document.getElementById("from").value = ""
    }

    return(
        <div className={styles.input_container}>
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
                <CityDrodown iataCodes={iataCodes} setIataCodes={setIataCodes} type="from"/>
                <CityDrodown iataCodes={iataCodes} setIataCodes={setIataCodes} type="to"/>
                <FlightDatePicker setDepDate={setDepDate} flightType={flightType}/>
                <PassengerDropdown quantity={quantity} setQuantity={setQuantity}/>
            </section>
            <div className={styles.button_container}>
                <button className={styles.buttons} onClick={() => searchFlights()}>Search</button>
                <button className={styles.buttons} onClick={() => clearInput()}>Clear</button>
            </div>
        </div>
    )
}