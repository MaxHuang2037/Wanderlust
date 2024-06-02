import { useSelector, useDispatch } from 'react-redux'

export const HotelList = ({hotels}) => {
    console.log(hotels)
    return (
        <div>
            {hotels.map((hotel) => {
                return  <li>
                            <h1> {hotel.name} </h1>
                            <h2> {hotel.hotelID} </h2>
                        </li>
            })}
        </div>
    )
}