import { HotelList } from './HotelList.jsx'
import { HotelMap } from './HotelMap.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { clearHotels, getHotelListGeo } from '../../features/hotelSlice.js'
import { FlightDatePicker } from '../UniversalComponents/FlightDatePicker.jsx'
import { PassengerDropdown } from '../UniversalComponents/PassengerDropdown.jsx'
import { CityInput } from '../UniversalComponents/CityInput.jsx'

import styles from "./styles.module.css"
import loading from "../../images/loading.gif"

const guests = {adult: 0, youth: 0, child: 0, infant: 0}
const initialCoords = {lat: null, long: null}

export const Hotels = () => {
    const dispatch = useDispatch()
    const {hotels, hotelState} = useSelector((state) => state.hotels)
    const [coords, setCoords] = useState(initialCoords)

    let [checkIn, setCheckIn] = useState("")
    let [checkOut, setCheckOut] = useState("")
    let [stay, setStay] = useState(guests)

    useEffect(() => {
        dispatch(clearHotels())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <CityInput setCoords={setCoords}/>
                <FlightDatePicker className={styles.datePicker} flightType="roundtrip" setDepDate={setCheckIn} setRetDate={setCheckOut} label1="Check in" label2="Check out"/>
                <PassengerDropdown className={styles.people} quantity={stay} setQuantity={setStay} placeholder="guest"/>
                <button className={styles.searchButton} onClick={() => {
                    dispatch(getHotelListGeo({long: coords.long, lat: coords.lat}))
                    dispatch(clearHotels())
                }}>Search</button>
            </div>

            <div className={styles.bottom}>
                <HotelMap/>
                <div className={styles.hotelList}>
                    {hotelState === "p" && <img className={styles.loading_img} src={loading} alt="loading"/>}
                    {
                        hotels.map((hotel) => {
                            return <HotelList hotel={hotel} checkIn={checkIn} checkOut={checkOut} adults={stay.adult}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}