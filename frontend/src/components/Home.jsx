import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Home(){
    const [message, setMessage] = useState("");
    useEffect(() => {
        axios.get("http://localhost:5000/api/greet")
            .then(res => setMessage(res.data.message))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <h1>{message}</h1>
            <Link to={"/deposit"}>Press to start</Link>
        </div>
    );

}
export default Home;