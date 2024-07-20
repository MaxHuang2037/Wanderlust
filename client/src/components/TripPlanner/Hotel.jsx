import styles from "./styles.module.css"

export const Hotel = ({hotel}) => {
    
    console.log(hotel.price)
    return(
        <div className={styles.hotelDetails}>
            <h2 className={styles.hotelName}>{hotel.hotel}</h2>
            <h3 className={styles.hotelPrice}>Total: ${hotel.offers.price}</h3>
        </div>
    )
}