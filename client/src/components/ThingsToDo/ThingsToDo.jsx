import { useState } from "react"
import { CityInput } from "./CityInput"

import styles from "./styles.module.css"
import { useDispatch } from "react-redux"
import { getThingsToDo } from "../../features/thingsToDoSlice"
import { ActivitiesList } from "./ActivitiesList.jsx"

const initialCoords = {lat: null, long: null}

export const ThingsToDo = () => {
    const dispatch = useDispatch()
    const [coords, setCoords] = useState(initialCoords)

    const searchThingsToDo = () => {
        dispatch(getThingsToDo(coords))
    }

    return(
        <div>
            <section className={styles.input_container}>
                <CityInput setCoords={setCoords}/>
                <button className={styles.buttons} onClick={() => searchThingsToDo()}>Search</button>
            </section>
            <ActivitiesList/>
        </div>
    )
}