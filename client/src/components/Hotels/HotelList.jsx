import styles from "./styles.module.css";
import { useState } from "react";

import {HotelOverlay} from "./HotelOverlay.jsx";

export const HotelList = ({hotel}) => {

    const [getOverlayOpen, setOverlayOpen] = useState(false)

    return (
        <>
            <li className={styles.listElement} key={hotel.hotelID} onClick={() => setOverlayOpen(!getOverlayOpen)}>
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