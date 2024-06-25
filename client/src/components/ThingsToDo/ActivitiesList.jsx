import { useDispatch, useSelector } from "react-redux"

import loading from "../../images/loading.gif"
import { useEffect, useState } from "react"
import { clearThingsToDo } from "../../features/thingsToDoSlice"
import styles from "./styles.module.css"

export const ActivitiesList = ({pageNumber, pagination, things_to_do_state}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearThingsToDo())
    }, [dispatch])

    return(
        <div className={styles.activity_container}>
            {things_to_do_state === "p" && <img className={styles.loading_img} src={loading} alt="loading"/>}
            {things_to_do_state === "e" && <h1>No activities exist</h1>}
            {pagination.map((offers) => {
                return <div>
                    {offers.name}
                </div>
            })}
        </div>
    )
}