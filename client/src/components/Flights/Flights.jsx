import { FlightOffers } from "./Flightlist/FlightOffers"
import { Input } from "./Input/Input"
import styles from "./styles.module.css"

export const Flights = () => {
    return(
        <div>
            <Input/>
            <FlightOffers/>
        </div>
    )
}