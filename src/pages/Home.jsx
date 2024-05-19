import { useEffect, useState } from "react"
import { getPictureOfTheDay } from "../data/fetch";

export default function Home () {

    const [potd, setPotd] = useState({});

    useEffect(() => {
        getPictureOfTheDay()
        .then(res => setPotd(res))
    }, [])

    return (
        <>
            <h1>{potd.title}</h1>
            <div>
                {potd.hdurl ? <img src={potd.hdurl} alt="NASA Picture of the Day"/> :  <iframe src={potd.url} alt="NASA Video of the Day" ></iframe>}
            </div>
        </>
    )
}