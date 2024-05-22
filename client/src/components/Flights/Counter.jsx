export const Counter = ({count}) => {

    return(
        <section>
            <button onClick={() => {count--; console.log(count)}}>-</button>
            {count}
            <button onClick={() => {count++; console.log(count)}}>+</button>
        </section>
    )
}