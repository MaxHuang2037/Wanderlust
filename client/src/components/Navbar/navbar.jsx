import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export const Navbar = () => {
    return(
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">
                        <button className={styles.home}>Wanderlust</button>
                </Link>
                {/* <img src={logo} alt="logo" className={styles.img}/> */}
            </div>
            <div className={styles.right}>
                <Link to="/flights">
                    <button className={styles.links}>Flights</button>
                </Link>
                <Link to="/stays">
                    <button className={styles.links}>Stays</button>
                </Link>
                <Link to="/things-to-do">
                    <button className={styles.links}>Things to do</button>
                </Link>
                <Link to="/my-trips">
                    <button className={styles.links}>My trips</button>
                </Link>
                <Link to="/auth">
                    <button className={styles.signin}>Sign in</button>
                </Link>
            </div>
        </header>
    )
}