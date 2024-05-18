import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home } from './components/Homepage/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <main className="App">
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}/>
			</Routes>
			<Footer/>
        </main>
    );
}

export default App;
