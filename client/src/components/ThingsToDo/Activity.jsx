import styles from "./styles.module.css"

export const Activity = ({offers}) => {
    console.log(offers)
    return(
        <div className={styles.activity}>
            <div className={styles.left}>
                <h2 className={styles.title}>{offers.name}</h2>
                {(offers.price.amount != undefined && offers.price.amount != "0.0") && <h3 className={styles.amount}>${offers.price.amount} {offers.price.currencyCode}</h3>}
                <p className={styles.description}>{offers.description}</p>
            </div>
            <div className={styles.right}>
                <img className={styles.activity_picture} src={offers.pictures[0]} alt={offers.name}/>
            </div>
        </div>
    )
}