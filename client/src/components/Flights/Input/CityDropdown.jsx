import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAirports, clearAirportsTo, clearAirportsFrom } from "../../../features/flightSlice"

import styles from "../styles.module.css"
import { Airport } from "./Airport"

export const CityDropdown = ({type, iataCodes, setIataCodes}) => {
    const dispatch = useDispatch()
    const {airports_to, airports_from, airports_to_state, airports_from_state} = useSelector((state) => state.flight)
    const ph = (type === "from") ? "From (city)" : "To (city)"

    const setCity = (data) => {
        document.getElementById(type).value = `${data.iataCode}: ${data.name}, ${data.stateCode}`;
        if (type === "from"){
            dispatch(clearAirportsFrom())
            setIataCodes({...iataCodes, origCode: data.iataCode})
        } else {
            dispatch(clearAirportsTo())
            setIataCodes({...iataCodes, destCode: data.iataCode})
        }
    }

    useEffect(() => {
        dispatch(clearAirportsFrom())
        dispatch(clearAirportsTo())
    }, [dispatch])

    return(
        <div>
            <div className={styles.citiesInput}>
                <input autoComplete="off" className={styles.input} id={type} type="text" placeholder={ph} onKeyUp={(e) => {
                    if(e.key === "Enter"){
                        dispatch(getAirports({cityName: document.getElementById(type).value, type: type}))
                    }
                }} onChange={() => {
                    (type === "from") ? dispatch(clearAirportsFrom()) : dispatch(clearAirportsTo())
                }}/>
            </div>
            <div className={styles.dropdown}>
                {((type === "from") && airports_from_state === "e") && <h1>No airports found</h1>}
                {((type === "to") && airports_to_state === "e") && <h1>No airports found</h1>}
                {(type === "from") ? 
                    airports_from.map((data) => {
                        return <Airport data={data} setCity={setCity}/>
                    }) : 
                    airports_to.map((data) => {
                        return <Airport data={data} setCity={setCity}/>
                    })
                }
            </div>
        </div>
    )
}