export const HotelList = ({hotels}) => {
    console.log(hotels)
    return (
        <div>
            {hotels.forEach((hotel) => {
                return  <li>
                            <h1> {hotel.name} </h1>
                            <h2> {hotel.hotelID} </h2>
                        </li>
            })}
        </div>
    )
}