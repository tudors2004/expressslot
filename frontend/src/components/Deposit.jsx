import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Deposit(){
    const [message, setMessage] = useState("")
    useEffect(() => {
        axios.get("http://localhost:5000/api/deposit")
            .then(res => setMessage(res.data.message))
            .catch(err => console.error(err));
    }, []);
    return (
        <div className={"Deposit"}>
            <video autoPlay muted loop id="background-deposit-video" className={"video"}>
                <source src="/bgvideo.mp4" type={"video/mp4"} />
                Your browser does not support the video tag.
            </video>
            <div className={"overlay"}>
                <h1>Funds: $100</h1>
                <Link to={"/deposit-money"} id={"deposit"}>Deposit funds</Link>
                <br />
                <Link to={"/game"} id={"play"}>Play now!</Link>
            </div>
        </div>
    )
}
export default Deposit;