import styles from "../styles.module.css"

export const Airport = ({data, setCity}) => {
    return(
        <div key={`${data.airportName}-${data.iataCode}`} onClick={() => {setCity(data)}}>
            <p className={styles.airportName}>{data.airportName} - {data.iataCode}</p>
            <p className={styles.stateCode}>⮡ &nbsp;{data.name}, {data.stateCode}</p>
        </div>
    )
}