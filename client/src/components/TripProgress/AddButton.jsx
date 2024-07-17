

export const AddButton = ({type, data}) => {
    const add = () => {
        let trip = JSON.parse(localStorage.getItem("trip"))
        console.log(trip)
        if(type == "activity"){
            let activities = [data]
            if(trip[type] != null){
                activities = [...trip[type], data]
            }
            trip[type] = activities
        } else {
            trip[type] = data
        }
        localStorage.setItem("trip", JSON.stringify(trip))
    }

    return(
        <button onClick={() => add()}>Add</button>
    )
}