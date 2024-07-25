import styles from "./styles.module.css";

export const HotelList = ({hotel, checkIn, checkOut, adults}) => {

    const redirect = () => {
        if(checkIn === "" || checkOut === ""){
            return alert("Please enter a check in and check out date")
        }
        if(adults <= 0){
            return alert("There must be at least one adult")
        }

        window.location.href =`/hotel?id=${hotel.hotelID}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}`
    }

    return (
        <div className={styles.listElement} key={hotel.hotelID} onClick={() => redirect()}> 
            <h1> {hotel.name} </h1>
            <h2> {hotel.hotelID} </h2>
        </div>
    )
}