import { HotelList } from './HotelList.jsx'
import {HotelMap} from './HotelMap.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { clearHotels, getHotelsCity } from '../../features/hotelSlice.js'


export const Hotels = () => {
    const dispatch = useDispatch()
    const {hotels} = useSelector((state) => state.hotels)

    useEffect(() => {
        dispatch(clearHotels())
    }, [])

    return (
        <div>
            <input id="searchBar" onKeyUp={(e) => {
                if(e.key === "Enter"){
                    dispatch(getHotelsCity(document.getElementById("searchBar").value))
                }
            }}/>
            <HotelMap hotels={hotels}/>
            <HotelList hotels={hotels}/>
        </div>
    );
}