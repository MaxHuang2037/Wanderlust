import styles from "./styles.module.css";

export const HotelList = ({hotels}) => {
    return (
        <div className={styles.hotelList}>
            {hotels.map((hotel) => {
                return  <li className={styles.listElement} key={hotel.hotelID}>
                            <h1> {hotel.name} </h1>
                            <h2> {hotel.hotelID} </h2>
                        </li>
            })}
        </div>
    )
}