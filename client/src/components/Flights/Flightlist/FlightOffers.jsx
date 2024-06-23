import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { clearFlightOffers } from "../../../features/flightSlice"
import { Flight } from "./Flight"
import loading from "../../../images/klee.gif"
import styles from "../styles.module.css"
import { FlightsCompressed } from "./FlightsCompressed"

export const FlightOffers = () => {
    const dispatch = useDispatch()
    const {flight_offers, flight_offers_state} = useSelector((state) => state.flight)

    useEffect(() => {
        dispatch(clearFlightOffers())
    }, [dispatch])
    return(
        <div className={styles.flight_offers}>
            {flight_offers_state === "p" && <img src={loading} alt="loading"/>}
            {flight_offers_state === "e" && <h1>No flights exist</h1>}
            {flight_offers.map((offers) => {
                return <FlightsCompressed offers={offers}/>
            })}
        </div>
    )
}