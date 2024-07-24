import styles from "./styles.module.css"

export const Input = ({name, type, setShowPassword, placeholder, handleChange, showPassword}) => {
    const handlePassword = () => {
        setShowPassword((prev) => !prev)
    }

    return(
        <>
            <input 
                required
                className={styles.input}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                type={type}
            ></input>
            <p onClick={handlePassword} className={styles.show}>{name === "password" && (showPassword ? "Hide password" : "Show password")}</p>
        </>
    )
}
