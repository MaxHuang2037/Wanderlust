import styles from "../styles.module.css"

export const Flight = ({offer, setShowDetails}) => {
    const close = () => {
        setShowDetails(false)
        document.getElementById("main_body").style.overflowY = "auto"
    }
    console.log(offer)
    return(
        <div className={styles.flight} id={styles.full}>
            <h1 className={styles.title}>${offer.price} - {offer.cabin}</h1>
            <h2>Total duration: {offer.totalDuration.slice(2)}</h2>
            <div className={styles.segments}>
                {offer.segments.map((seg) => {
                    return <>
                        <div>
                            <h3 className={styles.text}>{seg.departure.iataCode}: {seg.departure.at.replace("T", " at ")}</h3>
                            {seg.departure.terminal !== undefined && <p className={styles.text}>Terminal: {seg.departure.terminal}</p>}
                            <p className={styles.text}>Carrier: {seg.carrier}</p>
                            <p className={styles.text}>Duration: {seg.duration.slice(2)}</p>
                            <h3 className={styles.text}>{seg.arrival.iataCode}: {seg.arrival.at.replace("T", " at ")}</h3>
                            {seg.arrival.terminal !== undefined && <p className={styles.text}>Terminal: {seg.arrival.terminal}</p>}
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
            </div>
            <button className={styles.close_details_button} onClick={() => close()}>Close</button>
        </div>
    )
}