import {Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './styles.module.css'
import { Home } from './components/Homepage/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Auth } from './components/Auth/Auth';
import { Flights } from "./components/Flights/Flights";
import { Hotels } from "./components/Hotels/Hotels";
import { ThingsToDo } from "./components/ThingsToDo/ThingsToDo";
import { TripPlanner } from "./components/TripPlanner/TripPlanner";
import { HotelInfo } from "./components/Hotels/HotelInfo";
import { TripProgress } from "./components/TripProgress/TripProgress";
import { Buttons } from "./components/TripProgress/Buttons";

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
    // console.log(user)
    const [planning, setPlanning] = useState(localStorage.getItem("planning"))
    
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")))
    }, [])

    return (
        <main>
			<Navbar user={user} setUser={setUser}/>
            {(user != null && planning === "t") && <TripProgress/>}
			<Routes>
				<Route path="/" element={<Home/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/flights" element={<Flights/>}/>
                <Route path="/stays" element={<Hotels/>}/>
                <Route path="/things-to-do" element={<ThingsToDo/>}/>
                <Route path="/my-trips" element={<TripPlanner setPlanning={setPlanning}/>}/>
                <Route path="/hotel" element={<HotelInfo/>}/>
			</Routes>
            {(user != null && planning === "t") && <Buttons/>}
			<Footer/>
        </main>
    );
}

export default App;
