import { Trip } from "./Trip"

export const MyTrips = ({trips}) => {

    return(
        <div>
            <h1>My Trips</h1>
            <div>
                {trips.map((trip) => {
                    return <Trip trip={trip}/>
                })}
            </div>
        </div>
    )
}