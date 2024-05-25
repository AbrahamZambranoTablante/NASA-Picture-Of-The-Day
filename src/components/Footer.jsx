import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer () {
    return(
        <>
            <div className="footer-container">
                <Link to="https://apod.nasa.gov/apod/"> <h2>NASA Astronomy Picture of the Day Official WebSite</h2></Link>
                <Link to="https://www.nasa.gov/"> <h2>NASA Official WebSite</h2></Link>
                <Link to="https://github.com/AbrahamZambranoTablante/NASA-Picture-Of-The-Day"> <h2>Source Code</h2></Link>
            </div>
        </>
    )
}