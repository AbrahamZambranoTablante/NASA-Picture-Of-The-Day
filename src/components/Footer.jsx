import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer () {
    return(
        <>
            <div className="footer-container">
                <Link to="https://apod.nasa.gov/apod/"> <h4>NASA Astronomy Picture of the Day Official WebSite</h4></Link>
                <Link to="https://www.nasa.gov/"> <h4>NASA Official WebSite</h4></Link>
                <Link to="https://github.com/AbrahamZambranoTablante/NASA-Picture-Of-The-Day"> <h4>Source Code</h4></Link>
            </div>
        </>
    )
}