import { Link } from "react-router-dom"
export default function PotdList ({potd}) {
    return(
        <>
            <div>
            {potd.hdurl ? <Link to={`/archive/pictureoftheday/${potd.date}`}> <img className="potd-image" src={potd.hdurl} alt="NASA Picture of the Day"/></Link> :  <Link to={`/archive/pictureoftheday/${potd.date}`}><img className="potd-image" src={potd.thumbnail_url} alt="NASA Picture of the Day"/></Link>}
            </div>
        </>
    )
}