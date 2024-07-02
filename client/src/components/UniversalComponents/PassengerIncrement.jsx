import styles from "./styles.module.css"

export const PassengerIncrement = ({total, setQuantity, quantity, text, type}) => {
    const increment = () => {
        if(total < 10 ){
            setQuantity({...quantity, [type]: quantity[type] + 1})
        } else {
            window.alert("Cannot have more than 10 passengers")
        }
        
    }

    const decrement = () => {
        if(quantity[type] > 0) setQuantity({...quantity, [type]: quantity[type] - 1})
    }

    return(
        <div className={styles.increment}>
            <p>{text}</p>
            <div className={styles.increment}>
                <button onClick={decrement}>-</button>
                <p>{quantity[type]}</p>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}