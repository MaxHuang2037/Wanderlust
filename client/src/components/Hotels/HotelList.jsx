import styles from "./styles.module.css";
import { useState } from "react";

// import {HotelOverlay} from "./HotelOverlay.jsx";

export const HotelList = ({offer}) => {

    const [getOverlayOpen, setOverlayOpen] = useState(false)

    return (
        <>
            <li className={styles.listElement} onClick={() => setOverlayOpen(!getOverlayOpen)}>
                <h1> {offer.hotel} </h1>
                {
                    offer.rooms.map(room => {
                        return (
                            <div>
                                <h2> Check in: {room.date.checkIn} </h2>
                                <h2> Check out: {room.date.checOut} </h2>
                                <h2> Price: {room.price} {room.currency} </h2>

                                <h3> Policy: {room.policy} </h3>
                                <h3> {room.room.beds} {room.room.bedType} </h3>
                                <h3> {room.room.description} </h3>

                                <h4> Adults: {room.guests.adults}</h4>
                                <h4> Children: {room.guests.children}</h4>
                            </div>
                        )
                    })
                }
            </li>
            
            {/* {
                getOverlayOpen && 
                <div>
                    <div className={styles.overlayBG} onClick={() => setOverlayOpen(!getOverlayOpen)}/>
                    <HotelOverlay id={hotel.hotelID} name={hotel.name}/>
                </div>
            } */}
        </>
    )
}