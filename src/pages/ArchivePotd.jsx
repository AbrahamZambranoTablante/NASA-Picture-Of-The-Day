import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getOnePOTD } from "../data/fetch";
import "./Home.css"

export default function ArchivePotd () {

    const [pictureOfTheDay, setPictureOfTheDay] = useState({})
    const { date } = useParams()

    useEffect(() => {
        getOnePOTD(date)
        .then(res => setPictureOfTheDay(res))
    },[date])



    return (
        <>
            <div className="potd-img__container">
                <div className="potd-title__container">
                    <h1 className="potd-title">{pictureOfTheDay.title}</h1>
                </div>
                <div className="potd-date__container">
                    <h3 className="potd-date">{pictureOfTheDay.date}</h3>
                </div>
                { pictureOfTheDay.hdurl ? <Link to={`${pictureOfTheDay.hdurl}`}><img className="potd-img" src={pictureOfTheDay.hdurl} alt="NASA Picture of the Day"/></Link> : <iframe src={pictureOfTheDay.url} alt="NASA Video of the Day" ></iframe>}
                <div className="potd-copyright__container">
                    {pictureOfTheDay.copyright ? <h4 className="potd-copyright">Copyright: {pictureOfTheDay.copyright}</h4> : null}
                </div>
                <div className="potd-description__container">
                    <p className="potd-description">{pictureOfTheDay.explanation}</p>
                </div>
           </div>
        </>
    )
}