import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Deposit from "./components/Deposit.jsx";
import Slot from "./components/Slot.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/game" element={<Slot />} />
        </Routes>
    );
}

export default App;