import styles from "./styles.module.css"
import { useState } from "react"

console.log(localStorage.getItem("progress"))

export const Buttons = () => {
    const [saved, setSaved] = useState(false)
    const nextPage = () => {
        const page = Number(localStorage.getItem("progress"))
        
        console.log(page)
        if(page == 0) window.location.href = "/stays"
        else if(page == 1) window.location.href = "/things-to-do"
        else if(page == 2){
            window.location.href = "/my-trips"
            localStorage.setItem("planning", "f")
        } 

        localStorage.setItem("progress", page + 1)
    }

    const save = () => {
        setSaved(true) // SET TO FALSE WHEN CHANGE IS MADE
    }

    const exit = () => {
        if(!saved){
            let bool = window.confirm("Some changes may be unsaved, leave anyways?")
            if(!bool) return
        }
        window.location.href = "/my-trips"
    }

    return (
        <div className={styles.buttons}>
            <h3 onClick={() => exit()} className={styles.progress_text}>Exit</h3>
            <h3 onClick={() => save()} className={styles.progress_text}>Save</h3>
            <h3 onClick={() => nextPage()} className={styles.progress_text}>Next</h3>
        </div>
    ) 
}