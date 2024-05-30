import { HotelList } from './HotelList.jsx'
import {HotelMap} from './HotelMap.jsx'
import { useSelector, useDispatch } from 'react-redux'

export const Hotels = () => {
    const dispatch = useDispatch()
    const {hotels} = useSelector((state) => state.hotels)

    return (
        <div>
            <HotelMap hotels={hotels}/>
            <HotelList hotels={hotels}/>
        </div>
    );
}