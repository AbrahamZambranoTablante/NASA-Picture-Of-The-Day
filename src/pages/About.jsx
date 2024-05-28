import { Link } from "react-router-dom"
import gitHubIcon from "../assets/github-icon.png"
import linkedInIcon from "../assets/linkedin-icon.png"
import "./About.css"
export default function About () {
    return (
        <>
            <div className="profile-container">
                <div className="white-overlay">
                    <img src="https://pbs.twimg.com/media/GOoK6T_WsAEh76v?format=jpg&name=4096x4096" alt="Abraham's profile picture" className="profile-pic" />
                </div>
                <h2 className="name">Abraham Zambrano T.</h2>
                <div className="bio-container">
                    <p className="profile-bio">In my academic pursuits in Informatic Engineering, I'm fueled by an
                    insatiable curiosity for technology. Thriving in the realm of
                    algorithms, coding challenges, and problem-solving, I've gained
                    proficiency in software development, database management, and system
                    analysis.</p>
                </div>
                <div className="links-container">
                    <Link to="https://github.com/AbrahamZambranoTablante"><img src={gitHubIcon} alt="GitHub-icon" className="github-link" /></Link>
                    <Link to="https://www.linkedin.com/in/abrahamzambranotablante/"><img src={linkedInIcon} alt="Linkedin-icon" className="linkedin-link" /></Link>
                </div>
            </div>
        </>
    )
}