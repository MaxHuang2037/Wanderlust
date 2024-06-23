import styles from "../styles.module.css"

export const Flight = ({offers, setShowDetails}) => {
    return(
        <div className={styles.flight} id={styles.full}>
            <h1 className={styles.title}>${offers.price} - {offers.cabin}</h1>
            <h2>Total duration: {offers.totalDuration.slice(2)}</h2>
            <div className={styles.segments}>
                {offers.segments.map((seg) => {
                    return <>
                        <div className={styles.segment}>
                            <h3 className={styles.text}>{seg.departure.iataCode}: {seg.departure.at.replace("T", " at ")}</h3>
                            {seg.departure.terminal != undefined && <p className={styles.text}>Terminal: {seg.departure.terminal}</p>}
                            <p className={styles.text}>Carrier: {seg.carrier}</p>
                            <p className={styles.text}>Duration: {seg.duration.slice(2)}</p>
                            <h3 className={styles.text}>{seg.arrival.iataCode}: {seg.arrival.at.replace("T", " at ")}</h3>
                            {seg.arrival.terminal != undefined && <p className={styles.text}>Terminal: {seg.arrival.terminal}</p>}
                        </div>
                        <div id={styles.right_arrow} className={styles.arrow_container}>
                            <h1 className={styles.arrow}>{"→"}</h1>
                            <h1 className={styles.arrow}>{"→"}</h1>
                            <h1 className={styles.arrow}>{"→"}</h1>
                            <h1 className={styles.arrow}>{"→"}</h1>
                            <h1 className={styles.arrow}>{"→"}</h1>
                        </div>
                        <div id={styles.down_arrow} className={styles.arrow_container}>
                            <h1>{"↓ ↓ ↓ ↓ ↓"}</h1>
                        </div>
                    </>
                })}
                <button onClick={() => setShowDetails(false)}>Close</button>
            </div>
        </div>
    )
}