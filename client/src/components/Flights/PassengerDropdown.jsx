import styles from "./styles.module.css"

export const PassengerDropdown = () => {
    return(
        <div>
            <input className={styles.input} type="text" placeholder="Passengers"/>
        </div>
    )
}