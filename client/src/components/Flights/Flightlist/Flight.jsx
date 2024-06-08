import styles from "../styles.module.css"

export const Flight = ({offers}) => {
    return(
        <div className={styles.flight}>
            <h1>${offers.price} - {offers.cabin}</h1>
            {offers.segments.map((seg) => {
                return <p>{seg.departure} from {seg.from} - {seg.arrival} to {seg.to}</p>
            })}
        </div>
    )
}