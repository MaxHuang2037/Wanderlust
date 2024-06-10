import styles from "../styles.module.css"
import { PassengerIncrement } from "./PassengerIncrement"
import { useState } from "react"

export const PassengerDropdown = ({quantity, setQuantity}) => {
    const [showDropdown, setShowDropdown] = useState(false)
    let total = quantity.adult + quantity.child + quantity.youth + quantity.infant
    return(
        <div>
            <input onClick={() => setShowDropdown(!showDropdown)} className={styles.input} type="text" placeholder={`${total} Passenger(s)`} readOnly/>
            {showDropdown &&
            <div className={styles.dropdown} id={styles.passenger}>
                <PassengerIncrement total={total} setQuantity={setQuantity} quantity={quantity} text="Adult (16+)" type="adult"/>
                <PassengerIncrement total={total} setQuantity={setQuantity} quantity={quantity} text="Youth (12-15)" type="youth"/>
                <PassengerIncrement total={total} setQuantity={setQuantity} quantity={quantity} text="Child (2-11)" type="child"/>
                <PassengerIncrement total={total} setQuantity={setQuantity} quantity={quantity} text="Infant (on lap)" type="infant"/>
            </div>
            }
        </div>
    )
}