import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { useEffect } from "react"
import { jwtDecode } from "jwt-decode"

export const Navbar = ({user, setUser}) => {

    useEffect(() => {
        // jwt 
        const token = user?.token
        if(token){
            const decodedToken = jwtDecode(token)
            
            if (decodedToken.exp * 1000 < new Date().getTime()) logOut()
        }
    }, [user])

    const logOut = () => {
        if(localStorage.getItem("planning") === "t"){
            let bool = window.confirm("Some changes may be unsaved, leave anyways?")
            if(!bool) return
        }
        localStorage.clear()
        setUser(null)
        window.location.href = "/auth"
    }

    const navbarRedirect = (link) => {
        if(localStorage.getItem("planning") === "t"){
            let bool = window.confirm("Some changes may be unsaved, leave anyways?")
            if(!bool) return
        }
        localStorage.setItem("planning", "f")
        window.location.href = link
    }

    return(
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <button onClick={() => navbarRedirect("/")} className={styles.home}>Wanderlust</button>
                {/* <img src={logo} alt="logo" className={styles.img}/> */}
            </div>
            <div className={styles.right}>
                    <button onClick={() => navbarRedirect("/flights")} className={styles.links}>Flights</button>
                    <button onClick={() => navbarRedirect("/stays")} className={styles.links}>Stays</button>
                    <button onClick={() => navbarRedirect("/things-to-do")} className={styles.links}>Things to do</button>
                    <button onClick={() => navbarRedirect("/my-trips")} className={styles.links}>My trips</button>
                {user ? 
                    <div className={styles.loggedIn}>
                        {/* <h1 className={styles.username}>{user.result.name}</h1> */}
                        <button onClick={logOut} className={styles.links}>Log Out</button>
                            <img onClick={() => navbarRedirect(`/profile/${user.result._id || user.result.sub}`)} className={styles.pfp} alt={user.result.name} src={user.result.picture}></img>
                    </div> :
                    <Link to="/auth">
                        <button className={styles.signin}>Sign in</button>
                    </Link>
                }
            </div>
        </header>
    )
}
