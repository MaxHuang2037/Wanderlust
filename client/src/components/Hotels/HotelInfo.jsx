import { useDispatch, useSelector } from "react-redux"
import { getHotelOffers } from "../../features/hotelSlice"
import { useEffect } from "react"
import styles from "./styles.module.css"

import loading from "../../images/loading.gif"
import { AddButton } from "../TripProgress/AddButton"
import { useNavigate } from "react-router-dom"

export const HotelInfo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const {singleHotel, singleHotelState} = useSelector((state) => state.hotels)
    console.log("he")
    
    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        const adults = urlParams.get('adults')
        const checkIn = urlParams.get('checkIn')
        const checkOut = urlParams.get('checkOut')
        dispatch(getHotelOffers({id: id, adults: adults, checkIn: checkIn, checkOut: checkOut}))
    }, [dispatch])
    console.log(singleHotelState)
    
    if(singleHotelState === "p") return (<img className={styles.loading_img} src={loading} alt="loading"/>)

    return(
        <div className={styles.hotelInfo}>
            <h1 className={styles.hotelTitle}>
                {singleHotel.hotel}
            </h1>
            {singleHotel.length !== 0 &&
            <div className={styles.hotelDetails}>
                {
                    singleHotel.offers.map((offer) => {
                        return (
                            <div className={styles.oneHotel}>
                                <div className={styles.importantSection}>
                                    <div className={styles.dates}>
                                        <b>Check in: </b> {offer.date.checkIn}
                                        <br/>
                                        <b>Check out: </b> {offer.date.checkOut}
                                    </div>

                                    <div className={styles.price}>
                                        {offer.price}
                                        <b> {offer.currency} </b>
                                    </div>
                                </div>

                                <div>
                                    <b> Adults: </b>{offer.guests.adults}
                                </div>

                                <div>
                                    <b> Beds: </b> {offer.room.beds} {offer.room.bedType}
                                    <p>
                                        {offer.room.description}
                                    </p>
                                </div>
                                {localStorage.getItem("planning") === "t" && <AddButton type="hotel" data={{...singleHotel, offers: offer}} id={"htl"}/>}
                            </div>
                        )
                    })
                }
            </div>
            }
            <button className={styles.searchButton} onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}