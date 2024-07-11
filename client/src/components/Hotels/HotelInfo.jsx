import { useDispatch } from "react-redux"
import { getHotelOffers } from "../../features/hotelSlice"
import { useEffect } from "react"

export const HotelInfo = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotelOffers({id: "SIYYZ692", adults: 1, checkIn: "2024-08-29", checkOut: "2024-08-30"}))
    })
    return(
        <div>
            This is the hotel info page
        </div>
    )
}