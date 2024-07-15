import styles from "./styles.module.css"

export const TripProgress = () => {
    let progress = localStorage.getItem("progress", 0);

    return(
        <div className={styles.progress_bar}>
            <h3 className={styles.progress_text}>Flights</h3>
            {progress >= 1 && <h3 className={styles.progress_text}>✔</h3>}
            <h3 className={styles.progress_text}>- - - - -</h3>
            <h3 className={styles.progress_text}>Hotel</h3>
            {progress >= 2 && <h3 className={styles.progress_text}>✔</h3>}
            <h3 className={styles.progress_text}>- - - - -</h3>
            <h3 className={styles.progress_text}>Things to do</h3>
            {progress >= 3 && <h3 className={styles.progress_text}>✔</h3>}
        </div>
    )
}