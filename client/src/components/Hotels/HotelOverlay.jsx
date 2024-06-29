import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearOffers, getHotelOffers } from '../../features/hotelSlice.js';

import styles from "./styles.module.css";

export const HotelOverlay = (hotel) => {
    const dispatch = useDispatch()
    const {offers} = useSelector((state) => state.hotels)

    useEffect(() => {
        dispatch(clearOffers())
        dispatch(getHotelOffers(hotel.id))
    }, [dispatch])

    return (
        <div>
            <h1>
                {hotel.name}
            </h1>
            {
                offers.map((offer) => {
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
                                <b> Children: </b>{offer.guests.children}
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
    )
}

// {date: {checkIn: offer.checkInDate, checkOut: offers.checkOutDate}, 
// room: {beds: offer.room.typeEstimated.beds, bedType: offer.room.typeEstimated.bedType, description: offer.room.description.text}, 
// guests: {adults: offer.guests.adults, children: offer.guests.children}, 
//price: offer.price.total, currency: offer.price.currency, policy: offer.policies.paymentType}