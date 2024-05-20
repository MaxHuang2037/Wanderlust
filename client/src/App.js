import {Routes, Route} from "react-router-dom";
import { Home } from './components/Homepage/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Signin } from './components/Signin/Signin';
import styles from './styles.module.css'

function App() {
    return (
        <main>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}/>
                <Route path="/auth" element={<Signin/>}/>
			</Routes>
			<Footer/>
        </main>
    );
}

export default App;
