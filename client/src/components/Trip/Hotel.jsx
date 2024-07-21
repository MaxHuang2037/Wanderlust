import styles from "./styles.module.css"

export const Hotel = ({hotel}) => {
    
    console.log(hotel)
    return(
        <div className={styles.textHotels}>
            <div className={styles.smallSection}>
                <h2 className={styles.textHotels}>{hotel.hotel}</h2>
                <div className={styles.dates}>
                    <h3 className={styles.textHotels}>Check In: {hotel.offers.date.checkIn}</h3>
                    <h3 className={styles.textHotels}>Check Out: {hotel.offers.date.checkOut}</h3>
                </div>
            </div>
            <div className={styles.smallSection}>
                <h3 className={styles.textHotels}>Policy: {hotel.offers.policy}</h3>
                <p className={styles.textHotels}>{hotel.offers.room.description}</p>
                <p className={styles.textHotels}>(Beds: {hotel.offers.room.beds}, type: {hotel.offers.room.bedType})</p>
            </div>
            <h3 className={styles.textHotels}>Total: ${hotel.offers.price} {hotel.offers.currency}</h3>
        </div>
    )
}