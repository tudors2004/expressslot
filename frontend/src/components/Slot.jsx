import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Slot() {
    const [result, setResult] = useState(["❔", "❔", "❔"]);
    const [bet, setBet] = useState(1);

    const spin = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/game");
            setResult(res.data.result);
        } catch (error) {
            console.error("Error during spin:", error);
        }
        console.log("Spinning...");
    };

    const doubleBet = () => {
        setBet((prevBet) => {
            const newBet = prevBet * 2;
            return newBet > 100 ? 100 : newBet;
        });
    };

    const resetBet = () => {
        setBet(1);
    };

    const increaseBet = () => {
        setBet((prevBet) => {
            const newBet = prevBet + 1;
            return newBet > 100 ? 100 : newBet;
        });
    };

    return (
        <div className="slots">
            <h2>Slot Machine</h2>
            <div className="slot-display">
                {result.map((symbol, index) => (
                    <span key={index} className="slot-symbol">
            {symbol}
          </span>
                ))}
            </div>
            <p>Current Bet: ${bet}</p>
            <div className="slot-buttons">
                <button onClick={spin}>Spin</button>
                <button onClick={increaseBet}>Increase Bet</button>
                <button onClick={doubleBet}>Double</button>
                <button onClick={resetBet}>Reset Bet</button>
            </div>
            <Link to={"/deposit"} id={"back"}>Back to deposit page</Link>
        </div>
    );
}

export default Slot;
