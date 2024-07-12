import { useDispatch, useSelector } from "react-redux"
import { getHotelOffers } from "../../features/hotelSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./styles.module.css"

import loading from "../../images/loading.gif"

export const HotelInfo = () => {
    const dispatch = useDispatch()

    
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
    
    if(singleHotelState == "p") return (<img className={styles.loading_img} src={loading} alt="loading"/>)

    return(
        <div>
            <h1>
                {singleHotel.hotel}
                {console.log(singleHotel)}
            </h1>
            {singleHotel.length != 0 &&
            <div>
                {
                    singleHotel.offers.map((offer) => {
                        return (
                            <div>
                                <div>
                                    <b>Check in: </b> {offer.date.checkIn}
                                    <b>Check out: </b> {offer.date.checkOut}
                                </div>
                                <div>
                                    {offer.price}
                                    {offer.currency}
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

                            </div>
                        )
                    })
                }
            </div>
            }
        </div>
    )
}