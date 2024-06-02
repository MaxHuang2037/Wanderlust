import styles from "./styles.module.css"

export const PassengerDropdown = ({quantity}) => {
    return(
        <div>
            <input className={styles.input} type="text" placeholder="Passengers" readOnly/>
            <div className={styles.dropdown}>
                <p>{quantity.adult} Adult (16+)</p>
                <p>{quantity.youth} Youth (12-15)</p>
                <p>{quantity.child} Child (2-11)</p>
                <p>{quantity.infant} Infant (on lap)</p>
            </div>
        </div>
    )
}