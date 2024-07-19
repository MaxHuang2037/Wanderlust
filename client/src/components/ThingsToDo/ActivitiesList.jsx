import { useDispatch } from "react-redux"

import loading from "../../images/loading.gif"
import { useEffect } from "react"
import { clearThingsToDo } from "../../features/thingsToDoSlice"
import styles from "./styles.module.css"
import { Activity } from "./Activity"

export const ActivitiesList = ({pagination, things_to_do_state}) => {
    const dispatch = useDispatch()
    let activityId = 0

    useEffect(() => {
        dispatch(clearThingsToDo())
    }, [dispatch])

    return(
        <div className={styles.activity_container}>
            {things_to_do_state === "p" && <img className={styles.loading_img} src={loading} alt="loading"/>}
            {things_to_do_state === "e" && <h1>No activities exist</h1>}
            {pagination.map((offer) => {
                activityId++
                return <Activity offer={offer} id={activityId}/>
            })}
        </div>
    )
}