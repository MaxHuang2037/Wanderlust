import { HotelList } from './HotelList.jsx'
import { HotelMap } from './HotelMap.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { clearHotels, getHotelsCity } from '../../features/hotelSlice.js'
import { FlightDatePicker } from '../UniversalComponents/FlightDatePicker.jsx'
import { PassengerDropdown } from '../UniversalComponents/PassengerDropdown.jsx'

import styles from "./styles.module.css"

const guests = {adult: 0, youth: 0, child: 0, infant: 0}

export const Hotels = () => {
    const dispatch = useDispatch()
    const {hotels, offers} = useSelector((state) => state.hotels)

    let [checkIn, setCheckIn] = useState("")
    let [checkOut, setCheckOut] = useState("")
    let [stay, setStay] = useState(guests)

    useEffect(() => {
        dispatch(clearHotels())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input className={styles.input} autoComplete='off' id="searchBar" onKeyUp={(e) => {
                    if(e.key === "Enter") {
                        // && checkIn != "" && checkOut != "" && stay.adult > 0
                        console.log(stay.adult)
                        dispatch(getHotelsCity(document.getElementById("searchBar").value))
                    }
                    // else if (e.key === "Enter"){
                    //     window.alert("Please enter a valid check in and check out date, as well as a valid number of guests")
                    // }
                }}/>
                <FlightDatePicker className={styles.datePicker} flightType="roundtrip" setDepDate={setCheckIn} setRetDate={setCheckOut} label1="Check in" label2="Check out"/>
                <PassengerDropdown className={styles.people} quantity={stay} setQuantity={setStay} placeholder="guest"/>
            </div>

            <HotelMap stay={stay} checkIn={checkIn} checkOut={checkOut}/>
            <div className={styles.hotelList}>
                {
                    hotels.map((hotel) => {
                        return <HotelList hotel={hotel} checkIn={checkIn} checkOut={checkOut} adults={stay.adult}/>
                    })
                }
            </div>
        </div>
    );
}