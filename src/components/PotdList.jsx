import { Link } from "react-router-dom"
import "./PotdList.css"
export default function PotdList ({potd}) {
    
    return(
        <>
            <div className="item-container">
            {potd.hdurl ? <Link to={`/archive/pictureoftheday/${potd.date}`}> <img className="potd__image" src={potd.hdurl} alt="NASA Picture of the Day"/></Link> :  <Link to={`/archive/pictureoftheday/${potd.date}`}><img className="potd__image" src={potd.thumbnail_url} alt="NASA Picture of the Day"/></Link>}
            </div>
        </>
    )
}