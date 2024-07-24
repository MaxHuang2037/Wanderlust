import styles from "./styles.module.css"
import { useState } from "react"
import {useDispatch} from "react-redux"
import { signUp, signIn } from "../../features/userSlice"
import { Input } from "./Input.jsx"

const initialState = {firstName: "", lastName: "", email: "", password: "", confirmPassword: ""}

export const Auth = () => {
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setSignUp] = useState(false)
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isSignup) {
            dispatch(signUp(formData))
        } else {
            dispatch(signIn(formData))
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const switchMode = () => {
        setSignUp((prev) => !prev)
        setShowPassword(false)
    }
    return(
        <section className={styles.container}>
            <h1>{isSignup ? "Sign up" : "Sign in"}</h1>
            <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
                {isSignup && (
                    <>
                        <Input placeholder="First Name" handleChange={handleChange} name="firstName"></Input>
                        <Input placeholder="Last Name" handleChange={handleChange} name="lastName"></Input>
                    </>
                )}
                <Input placeholder="Email" handleChange={handleChange} name="email"></Input>
                <Input placeholder="Password" handleChange={handleChange} name="password" setShowPassword={setShowPassword} showPassword={showPassword} type={showPassword ? "text" : "password"}></Input>
                { isSignup && <Input placeholder="Confirm Password" handleChange={handleChange} name="confirmPassword" type="password"></Input>}
                <button className={styles.submit_btn} type="submit">
                    <p className={styles.signin}>{isSignup ? "Sign Up" : "Sign In"}</p>
                </button>
                {/* {!isSignup && <GoogleLogin onSuccess={googleSuccess} onError={googleError}/>} */}
                <button onClick={switchMode} type="button">
                    <p className={styles.text}>{isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</p>
                </button>
            </form>
        </section>
    )
}