import styles from "./styles.module.css"
import { PassengerIncrement } from "./PassengerIncrement"
import { useState } from "react"

export const PassengerDropdown = ({quantity, setQuantity, placeholder}) => {
    const [showDropdown, setShowDropdown] = useState(false)
    let total = quantity.adult + quantity.child + quantity.youth + quantity.infant
    return(
        <div>
            <input onClick={() => setShowDropdown(!showDropdown)} id={styles.passengers} className={styles.input} type="text" placeholder={`${total} ${placeholder}(s)`} readOnly/>
            {showDropdown &&
            <div className={styles.dropdown} id={styles.passenger}>
                <PassengerIncrement total={total} setQuantity={setQuantity} quantity={quantity} text="Adult (16+)" type="adult"/>
                <PassengerIncrement total={total} setQuantity={setQuantity} quantity={quantity} text="Youth (12-15)" type="youth"/>
                <PassengerIncrement total={total} setQuantity={setQuantity} quantity={quantity} text="Child (2-11)" type="child"/>
                <PassengerIncrement total={total} setQuantity={setQuantity} quantity={quantity} text="Infant (on lap)" type="infant"/>
                <p className={styles.close_button_passenger} onClick={() => setShowDropdown(!showDropdown)}>Close</p>
            </div>
            }
        </div>
    )
}