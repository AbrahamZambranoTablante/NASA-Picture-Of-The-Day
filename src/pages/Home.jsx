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
                <div className="potd-image__container">
                    {potd.hdurl ? <img className="potd-image" src={potd.hdurl} alt="NASA Picture of the Day"/> :  <iframe  className="potd-image" src={potd.url} alt="NASA Video of the Day" ></iframe>}
                </div>
                <div className="potd-description__container">
                    <p className="potd-description">{potd.explanation}</p>
                </div>
            </div>
        </>
    )
}