import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { clearFlightOffers, clearFlightOffersReturn } from "../../../features/flightSlice"
import loading from "../../../images/loading.gif"
import styles from "../styles.module.css"
import { FlightsCompressed } from "./FlightsCompressed"

export const FlightOffers = ({flightToggle}) => {
    const dispatch = useDispatch()
    const {flight_offers, flight_offers_state, flight_offers_return, flight_offers_return_state} = useSelector((state) => state.flight)

    useEffect(() => {
        dispatch(clearFlightOffers())
        dispatch(clearFlightOffersReturn())
    }, [dispatch])
    return(
        <div className={styles.flight_offers}>
            {flightToggle === "departure" ? 
                (flight_offers_state === "p" && <img className={styles.loading_img} src={loading} alt="loading"/>)
                :
                (flight_offers_return_state === "p" && <img className={styles.loading_img} src={loading} alt="loading"/>)
            }
            {flightToggle === "departure" ?
                (flight_offers_state === "e" && <h1>No flights exist</h1>)
                :
                (flight_offers_return_state === "e" && <h1>No flights exist</h1>)
            }

            {flightToggle === "departure" && flight_offers.map((offer) => {
                return <FlightsCompressed offer={offer} type="dep"/>
            })}
            {flightToggle === "return" && flight_offers_return.map((offer) => {
                return <FlightsCompressed offer={offer} type="ret"/>
            })}
        </div>
    )
}