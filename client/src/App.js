import {Routes, Route} from "react-router-dom";
import { Home } from './components/Homepage/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Auth } from './components/Auth/Auth';
import styles from './styles.module.css'
import { useState, useEffect } from "react";
import { Flights } from "./components/Flights/Flights";

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
    
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")))
    }, [])

    return (
        <main>
			<Navbar user={user} setUser={setUser}/>
			<Routes>
				<Route path="/" element={<Home/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/flights" element={<Flights/>}/>
			</Routes>
			<Footer/>
        </main>
    );
}

export default App;
