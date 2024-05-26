import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { useEffect } from "react"
import {jwtDecode} from "jwt-decode"

export const Navbar = ({user, setUser}) => {
    const logOut = () => {
        localStorage.clear()
        setUser(null)
    }

    useEffect(() => {
        // jwt 
        const token = user?.token
        if(token){
            const decodedToken = jwtDecode(token)

            if (decodedToken.exp * 1000 < new Date().getTime()) logOut()
        }
    }, [])

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
                {user ? 
                    <div className={styles.loggedIn}>
                        {/* <h1 className={styles.username}>{user.result.name}</h1> */}
                        <button onClick={logOut} className={styles.links}>Log Out</button>
                        <Link to={`profile/${user.result._id || user.result.sub}`}>
                            <img className={styles.pfp} alt={user.result.name} src={user.result.picture}></img>
                        </Link>
                    </div> :
                    <Link to="/auth">
                        <button className={styles.signin}>Sign in</button>
                    </Link>
                }
            </div>
        </header>
    )
}
