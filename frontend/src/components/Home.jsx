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
        <div className={"Home"}>
            <video autoPlay muted loop id="background-home-video" className={"video"}>
                <source src="/homeloopvideo.mp4" type={"video/mp4"} />
                Your browser does not support the video tag.
            </video>
            <div className={"overlay"}><h1>{message}</h1>
                <Link to={"/deposit"} id={"guest"}>Continue as guest</Link>
            </div>
        </div>
    );

}
export default Home;