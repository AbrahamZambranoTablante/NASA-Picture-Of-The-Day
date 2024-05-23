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

    console.log(potd);



    return (
        <>
           <Link to={potd.hdurl}> <img src={potd.hdurl}/> </Link>
        </>
    )
}