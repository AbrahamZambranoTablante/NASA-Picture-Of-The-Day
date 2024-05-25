import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar () {
    return (
        <>
            <div className="nav-bar__container">
                <div className="home-link">
                    <Link to="/"><img className="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="NASA-logo"/></Link>
                    <Link to="/"><h3 className="logo-title" >Astronomy <br/>Picture of the Day </h3></Link>
                </div>
                <div className="about-archive__links">
                <Link to="/about"><h2 className="about">ABOUT</h2></Link><Link to="/archive"><h2 className="archive">ARCHIVE</h2></Link>
                </div>
            </div>
        </>
    )
}