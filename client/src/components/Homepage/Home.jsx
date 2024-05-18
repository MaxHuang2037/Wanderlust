import { Navbar } from "../Navbar/Navbar"
import { Trip_Planner } from "../Trip planner/Trip_planner"
import { Route, Router } from "react-router-dom"

export const Home = () => {
    return(
        <div>
            <Trip_Planner></Trip_Planner>
        </div>
    )
}