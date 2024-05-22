import { useEffect, useState } from "react"
import { Counter } from "./Counter"
import styles from "./styles.module.css"

let initialState = {adult: 0, youth: 0, child: 0, infant: 0}

export const Input = () => {
    const [quantity, setQuantity] = useState(initialState)

    return(
        <div>
            <section className={styles.input}>
                <div>
                    <input type="radio" id="oneway" name="flight_type" checked/>
                    <label for="oneway">One way</label>
                </div>
                <div>
                    <input type="radio" id="roundtrip" name="flight_type"/>
                    <label for="Oneway">Round trip</label>
                </div>
            </section>
            <section className={styles.input}>
                <input type="text" placeholder="From (city)"/>
                <input type="text" placeholder="To (city)"/>
                <select>
                    <option value="adult">Adult (16+)</option>
                    <option value="youth">Youth (12-15)</option>
                    <option value="child">Child (2-11)</option>
                    <option value="infant">Infant</option>
                </select>
            </section>
        </div>
    )
}