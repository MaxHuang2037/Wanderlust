import { useEffect } from "react"
import { updateTrips, getTrips } from "../../features/userSlice"
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux"

export const Buttons = () => {
    const page = Number(localStorage.getItem("progress"))
    const {trips} = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const nextPage = () => {
        const trip = JSON.parse(localStorage.getItem("trip"))
        console.log(page)
        if(page === 0){
            if(trip["depFlight"] == null){
                return alert("Please choose at least a departure flight before proceeding")
            }
            window.location.href = "/stays"
        } 
        else if(page === 1){
            if(trip["hotel"] == null){
                return alert("Please choose a hotel before proceeding")
            }
            window.location.href = "/things-to-do"
        } 
        else if(page === 2){
            dispatch(updateTrips([...trips, JSON.parse(localStorage.getItem("trip"))]))
            console.log([...trips, JSON.parse(localStorage.getItem("trip"))])
            console.log(trips)
            localStorage.setItem("planning", "f")
            localStorage.setItem("progress", 0)
            localStorage.setItem("trip", JSON.stringify({}))
            window.location.href = "/my-trips"
        }
        
        localStorage.setItem("progress", page + 1)
    }

    const exit = () => {
        let bool = window.confirm("You will lose all your progress, leave anyways?")
            if(!bool) return
        localStorage.setItem("planning", "f")
        window.location.href = "/my-trips"
    }

    useEffect(() => {
        dispatch(getTrips())
    }, [dispatch])

    return (
        <div className={styles.buttons}>
            <h3 onClick={() => exit()} className={styles.progress_text}>Exit</h3>
            {/* <h3 onClick={() => save()} className={styles.progress_text}>Save</h3> */}
            {page === 2 ? <h3 onClick={() => nextPage()} className={styles.progress_text}>Save</h3> :
            <h3 onClick={() => nextPage()} className={styles.progress_text}>Next</h3>}
        </div>
    )
}