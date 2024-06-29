import { HotelList } from './HotelList.jsx'
import {HotelMap} from './HotelMap.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { clearHotels, getHotelsCity } from '../../features/hotelSlice.js'

import styles from "./styles.module.css"

export const Hotels = () => {
    const dispatch = useDispatch()
    const {hotels} = useSelector((state) => state.hotels)

    useEffect(() => {
        dispatch(clearHotels())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <input autoComplete='off' className={styles.searchBar} id="searchBar" onKeyUp={(e) => {
                if(e.key === "Enter"){
                    dispatch(getHotelsCity(document.getElementById("searchBar").value))
                }
            }}/>
            <HotelMap hotels={hotels}/>
            <div className={styles.hotelList}>
                {
                    hotels.map((hotel) => {
                        return <HotelList hotel={hotel}/>
                    })
                }
            </div>
        </div>
    );
}