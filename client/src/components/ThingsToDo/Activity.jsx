import { AddButton } from "../TripProgress/AddButton"
import styles from "./styles.module.css"

export const Activity = ({offer}) => {
    console.log(offer)
    return(
        <div className={styles.activity}>
            <div className={styles.image_container}>
                <img className={styles.activity_picture} src={offer.pictures[0]} alt={offer.name}/>
                {console.log(offer.pictures[0])}
            </div>
            <div>
                <h2 className={styles.title}>{offer.name}</h2>
                {(offer.price.amount !== undefined && offer.price.amount !== "0.0") && <h3 className={styles.amount}>${offer.price.amount} {offer.price.currencyCode}</h3>}
                <p className={styles.description}>{offer.description}</p>
            </div>
            {localStorage.getItem("planning") === "t" && <AddButton type="activity" data={offer}/>}
        </div>
    )
}