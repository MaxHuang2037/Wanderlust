import { useDispatch, useSelector } from "react-redux"

import loading from "../../images/klee.gif"
import { useEffect } from "react"
import { clearThingsToDo } from "../../features/thingsToDoSlice"
import styles from "./styles.module.css"

export const ActivitiesList = () => {
    const dispatch = useDispatch()
    const {things_to_do, things_to_do_state} = useSelector((state) => state.thingstodo)

    useEffect(() => {
        dispatch(clearThingsToDo())
    }, [dispatch])
    return(
        <div className={styles.activity_container}>
            {things_to_do_state === "p" && <img src={loading} alt="loading"/>}
            {things_to_do_state === "e" && <h1>No activities exist</h1>}
            {things_to_do.map((offers) => {
                return <div>
                    {offers.name}
                </div>
            })}
        </div>
    )
}