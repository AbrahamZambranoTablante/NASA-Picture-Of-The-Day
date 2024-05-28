import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { getPictureOfTheDay } from "../data/fetch";
import './Home.css'

export default function Home () {

    const [potd, setPotd] = useState({});

    useEffect(() => {
        getPictureOfTheDay()
        .then(res => setPotd(res))
    }, [])


    return (
        <>
            <div className="potd-container">
                <div className="potd-title__container">
                    <h1 className="potd-title">{potd.title}</h1>
                </div>
                <div className="potd-date__container">
                    <h3 className="potd-date">{potd.date}</h3>
                </div>
                <div className="potd-second__container">
                    <div className="potd-image__container">
                        {potd.hdurl ? <Link to={`${potd.hdurl}`}><img className="potd-image" src={potd.hdurl} alt="NASA Picture of the Day"/></Link> :  <iframe src={potd.url} alt="NASA Video of the Day" ></iframe>}
                    </div>
                </div>
                <div className="potd-copyright__container">
                    {potd.copyright ? <h4 className="potd-copyright">Copyright: {potd.copyright}</h4> : null}
                </div>
                <div className="potd-description__container">
                    <p className="potd-description">{potd.explanation}</p>
                </div>
            </div>
        </>
    )
}