import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAirports, clearAirportsTo, clearAirportsFrom } from "../../../features/flightSlice"

import loading from "../../../images/loading.gif"
import styles from "../styles.module.css"

export const CityDrodown = ({type, iataCodes, setIataCodes}) => {
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
        <div className={styles.airportdropdown}>
            <section className={styles.citiesInput}>
                <input autoComplete="off" className={styles.input} id={type} type="text" placeholder={ph} onKeyUp={(e) => {
                    if(e.key === "Enter"){
                        console.log("DIPSATCH")
                        dispatch(getAirports({cityName: document.getElementById(type).value, type: type}))
                    }
                }} onChange={() => {
                    if(document.getElementById(type).value === ""){
                        (type === "from") ? dispatch(clearAirportsFrom()) : dispatch(clearAirportsTo())
                    }
                }}/>
            </section>
            <div className={styles.dropdown}>
                {(type === "from") ? 
                    airports_from.map((data) => {
                    return  <div key={`${data.airportName}-${data.iataCode}`} onClick={() => {setCity(data)}}>
                                <p className={styles.airportName}>{data.airportName} - {data.iataCode}</p>
                                <p className={styles.stateCode}>⮡ &nbsp;{data.name}, {data.stateCode}</p>
                            </div>
                }) : 
                    airports_to.map((data) => {
                    return  <div key={`${data.airportName}-${data.iataCode}`} onClick={() => {setCity(data)}}>
                                <p className={styles.airportName}>{data.airportName} - {data.iataCode}</p>
                                <p className={styles.stateCode}>⮡ &nbsp;{data.name}, {data.stateCode}</p>
                            </div>
                })
            }
            </div>
        </div>
    )
}