import vaca from '../../images/vaca.jpg'
import plane from '../../images/plane.jpg'
import hotel from '../../images/hotel.jpg'
import tour from '../../images/tour.jpg'
import styles from './styles.module.css'

export const Home = () => {
    return(
        <body className={styles.home}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1>Explore the World with Wanderlust:</h1>
                    <h2>Your Passport to Adventure!</h2>
                    <h3>
                    Whether you're dreaming of wandering through bustling city streets, 
                    basking in the tranquility of remote beaches, or trekking through 
                    breathtaking landscapes, Wanderlust is here to turn your travel 
                    dreams into reality. Let Wanderlust be your compass as you explore new horizons 
                    and create memories to last a lifetime. Start your next adventure today 
                    with Wanderlust.
                    </h3>
                </div>
                <img className={styles.travel_img} src={vaca} alt="homepageimg"/>
            </div>
            <div className={styles.container}>
                <img className={styles.travel_img} src={plane} alt="homepageimg"/>
                <div className={styles.text}>
                    <h1>Take Flight</h1>
                    <h2>Book Your Next Adventure with Ease!</h2>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1>Find Your Home Away from Home:</h1>
                    <h2> Explore and Book the Perfect Accommodation!</h2>
                </div>
                <img className={styles.travel_img} src={hotel} alt="homepageimg"/>
            </div>
            <div className={styles.container}>
                <img className={styles.travel_img} src={tour} alt="homepageimg"/>
                <div className={styles.text}>
                    <h1>Discover Hidden Gems:</h1>
                    <h2>Uncover Must-See Tourist Spots Around the Globe!</h2>
                </div>
            </div>
        </body>
    )
}