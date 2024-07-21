import { useEffect } from "react"
import styles from "./styles.module.css"

export const AddButton = ({type, data, id}) => {
    useEffect(() => {
        if(localStorage.getItem("progress") === "0"){
            if(localStorage.getItem(type) != null){
                var elem = document.getElementById(localStorage.getItem(type))
                elem.innerHTML = "Added"
                elem.disabled = true
            }
        }
    }) // fix

    const add = () => {
        let trip = JSON.parse(localStorage.getItem("trip"))
        
        if(localStorage.getItem("progress") === "0"){
            if(localStorage.getItem(type) != null){
                console.log(localStorage.getItem(type))
                var elem = document.getElementById(localStorage.getItem(type))
                elem.innerHTML = "Add"
                elem.disabled = false
            }
            localStorage.setItem(type, id)
        }

        if(type === "activity"){
            let activities = [data]
            if(trip[type] != null){
                activities = [...trip[type], data]
            }
            trip[type] = activities
        } else {
            trip[type] = data
        }
        localStorage.setItem("trip", JSON.stringify(trip))
    }

    return(
        <button className={styles.add_button} id={id} onClick={() => {
            add()
            var elem = document.getElementById(id)
            elem.innerHTML = "Added"
            elem.disabled = true
        }
        }>Add</button>
    )
}