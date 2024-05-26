import { Link } from "react-router-dom"
import "./NavBar.css"
import SearchDate from "./SearchDate"

export default function NavBar ({formatDate}) {
    return (
        <>
            <div className="nav-bar__container">
                <div className="home-link">
                    <Link to="/"><img className="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="NASA-logo"/></Link>
                    <Link to="/"><h3 className="logo-title" >Astronomy <br/>Picture of the Day </h3></Link>
                </div>
                <SearchDate formatDate={formatDate} />
                <div className="about-archive__links">
                <Link to="/archive"><h2 className="archive">ARCHIVE</h2></Link><Link to="/about"><h2 className="about">ABOUT</h2></Link>
                </div>
            </div>
        </>
    )
}