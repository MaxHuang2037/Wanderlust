import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import styles from "./styles.module.css"
import { clearCities, getCities } from "../../features/thingsToDoSlice"

export const CityInput = ({setCoords}) => {
    const dispatch = useDispatch()
    const {cities, cities_state} = useSelector((state) => state.thingstodo)

    const setCity = (data) => {
        document.getElementById("city").value = `${data.name}, ${data.country}`
        dispatch(clearCities())
        setCoords({lat: data.geoCode.latitude, long: data.geoCode.longitude})
    }

    useEffect(() => {
        dispatch(clearCities())
    }, [dispatch])

    return(
        <div className={styles.parent}>
            <div className={styles.citiesInput}>
                <input autoComplete="off" className={styles.input} id="city" type="text" placeholder={"City"} onKeyUp={(e) => {
                    if(e.key === "Enter"){
                        dispatch(getCities(document.getElementById("city").value))
                    }
                }} onChange={() => {
                    dispatch(clearCities())
                }}/>
            </div>
            <div className={styles.dropdown}>
            {cities_state === "e" && <h1>No cities found</h1>}
                {cities.map((data) => {
                    return <div key={`${data.name}-${data.country}`} onClick={() => {setCity(data)}}>
                        <p className={styles.cityName}>{data.name}, {data.country}</p>
                    </div>
                })}
            </div>
        </div>
    )
}