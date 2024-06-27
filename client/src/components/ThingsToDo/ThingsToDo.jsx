import { useState } from "react"
import { CityInput } from "./CityInput"
import { useSelector } from "react-redux"

import styles from "./styles.module.css"
import { useDispatch } from "react-redux"
import { getThingsToDo } from "../../features/thingsToDoSlice"
import { ActivitiesList } from "./ActivitiesList.jsx"
import { clearThingsToDo } from "../../features/thingsToDoSlice"

const initialCoords = {lat: null, long: null}

export const ThingsToDo = () => {
    const dispatch = useDispatch()
    const [coords, setCoords] = useState(initialCoords)
    const [pageNumber, changePageNumber] = useState(0)
    const {things_to_do, things_to_do_state} = useSelector((state) => state.thingstodo)

    let pagination = things_to_do.slice(pageNumber * 18, pageNumber * 18 + 18)

    const searchThingsToDo = () => {
        dispatch(getThingsToDo(coords))
    }

    const increment = () => {
        if(pageNumber < Math.floor((things_to_do.length - 1) / 18) && things_to_do.length != 0){
            changePageNumber(pageNumber + 1)
        }
    }

    const decrement = () => {
        if(pageNumber > 0 && things_to_do.length != 0){
            changePageNumber(pageNumber - 1)
        }
    }

    const search = () => {
        dispatch(clearThingsToDo())
        changePageNumber(0)
        searchThingsToDo()
    }

    return(
        <div className={styles.main_container}>
            <section className={styles.input_container}>
                <CityInput setCoords={setCoords}/>
                <button className={styles.buttons} onClick={() => search()}>Search</button>
            </section>
            <ActivitiesList pagination={pagination} things_to_do_state={things_to_do_state} pageNumber={pageNumber}/>
            <div className={styles.pagination}>
                <button onClick={() => changePageNumber(0)}>First</button>
                <button onClick={() => decrement()}>Previous</button>
                <p className={styles.page_number}>{pageNumber + 1}</p>
                <button onClick={() => increment()}>Next</button>
                <button onClick={() => changePageNumber(Math.floor((things_to_do.length - 1) / 18))}>Last</button>
            </div>
        </div>
    )
}