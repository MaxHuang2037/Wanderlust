import styles from "./styles.module.css";
import { useState } from "react";

import {HotelOverlay} from "./HotelOverlay.jsx";

export const HotelList = ({hotel, checkIn, checkOut, adults}) => {
    const [getOverlayOpen, setOverlayOpen] = useState(false)

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
        <>
            <li className={styles.listElement} key={hotel.hotelID} onClick={() => redirect()}> 
                <h1> {hotel.name} </h1>
                <h2> {hotel.hotelID} </h2>
            </li>
            
            {
                getOverlayOpen && 
                <div>
                    <div className={styles.overlayBG} onClick={() => setOverlayOpen(!getOverlayOpen)}/>
                    <HotelOverlay id={hotel.hotelID} name={hotel.name}/>
                </div>
            }
        </>
    )
}