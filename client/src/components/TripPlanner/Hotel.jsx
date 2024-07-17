

export const Hotel = ({hotel}) => {
    
    console.log(hotel.price)
    return(
        <div>
            <h2>{hotel.hotel}</h2>
            <h3>{hotel.offers.price}</h3>
        </div>
    )
}