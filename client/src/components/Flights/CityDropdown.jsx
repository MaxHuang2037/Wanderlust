import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getAirports, clearAirportsTo, clearAirportsFrom } from "../../features/flightSlice"
import { useEffect } from "react"

export const CityDrodown = ({type}) => {
    const dispatch = useDispatch()
    const {airports_to, airports_from} = useSelector((state) => state.flight)
    const ph = (type == "from") ? "From (city)" : "To (city)"

    const setCity = (data) => {
        document.getElementById(type).value = `${data.iataCode}: ${data.name}, ${data.stateCode}`;
        (type == "from") ? dispatch(clearAirportsFrom()) : dispatch(clearAirportsTo())
    }

    useEffect(() => {
        clearAirportsFrom()
        dispatch(clearAirportsTo())
    }, [])

    return(
        <div className={styles.airportdropdown}>
            <section className={styles.citiesInput}>
                <input autoComplete="off" className={styles.input} id={type} type="text" placeholder={ph} onKeyUp={(e) => {
                    if(e.key === "Enter"){
                        dispatch(getAirports({cityName: document.getElementById(type).value, type: type}))
                    }
                }} onChange={() => {
                    if(document.getElementById(type).value == ""){
                        (type == "from") ? dispatch(clearAirportsFrom()) : dispatch(clearAirportsTo())
                    }
                }}/>
            </section>
            <div className={styles.dropdown}>
                {(type == "from") ? airports_from.map((data) => {
                    return <p onClick={() => {setCity(data)}}>{data.iataCode}: {data.name}, {data.stateCode}</p>
                }) : airports_to.map((data) => {
                    return <p onClick={() => {setCity(data)}}>{data.iataCode}: {data.name}, {data.stateCode}</p>
                })
            }
            </div>
        </div>
    )
}