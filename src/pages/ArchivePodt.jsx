import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOnePOTD } from "../data/fetch";

export default function ArchivePotd () {

    const [potd, setPotd] = useState({})
    const { date } = useParams()

    useEffect(() => {
        getOnePOTD(date)
        .then(res => setPotd(res))
    },[])



    return (
        <>
           { potd.hdurl ? <Link to={`${potd.hdurl}`}><img className="potd-image" src={potd.hdurl} alt="NASA Picture of the Day"/></Link> : <iframe  className="potd-image" src={potd.url} alt="NASA Video of the Day" ></iframe>}
        </>
    )
}