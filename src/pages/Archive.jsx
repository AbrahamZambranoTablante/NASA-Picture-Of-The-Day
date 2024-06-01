import { useEffect, useState } from "react";
import { getLastestPOTD } from "../data/fetch";
import PotdList from "../components/PotdList";
import "./Archive.css";


export default function Archive ({formatDate}) {

    const [potdList, setPotdList] = useState([]);
   
    function getTodayDate() {
        const date = new Date();
        return formatDate(date.toLocaleDateString('en-US'));
    }

    function getLastWeekDate () {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 14);
        let formattedDate = currentDate.toISOString().slice(0, 10);
        return formattedDate;
    }

    useEffect(() => {
        getLastestPOTD (getLastWeekDate(), getTodayDate())
        .then(res => setPotdList(res))
    }, [])

    return (
        <>
            <div className="potd-list">
                {potdList.map(potd => <PotdList potd={potd} key={potd.date}/> )}
            </div>
        </>
    )
}