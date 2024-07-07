import styles from "./styles.module.css"

export const Itinerary = ({activities}) => {
    // console.log(activities)
    return(
        activities.map((activity) => {
            return <div className={styles.activity}>
                        <div className={styles.image_container}>
                            {activity.pictures.map((image) => {
                                return <img className={styles.activity_picture} src={image} alt={activity.name}/>
                            })}
                        </div>
                        <div>
                            <h2 className={styles.title}>{activity.name}</h2>
                            {(activity.price.amount != undefined && activity.price.amount != "0.0") && <h3 className={styles.amount}>${activity.price.amount} {activity.price.currencyCode}</h3>}
                            <p className={styles.description}>{activity.description}</p>
                        </div>
                    </div>
        })
    )
}

