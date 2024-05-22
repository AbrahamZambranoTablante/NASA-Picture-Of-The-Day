import { useEffect, useState } from "react";
import { getLastestPOTD } from "../data/fetch";
import PotdList from "../components/PotdList";

export default function Archive () {

    const [potdList, setPotdList] = useState([]);

    function getTodayDate() {
        const fullDate = new Date();
        const date = fullDate.toLocaleDateString('en-US').split("/");
        date.unshift(date.pop());
        return date.join("-");
    }

    function getLastWeekDate () {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 8);
        let formattedDate = currentDate.toISOString().slice(0, 10);
        return formattedDate;
    }

    useEffect(() => {
        getLastestPOTD (getLastWeekDate(), getTodayDate())
        .then(res => setPotdList(res))
    },[])

    return (
        <>
            <div className="potd-list">
                {potdList.map(potd => <PotdList potd={potd} key={potd.date}/> )}
            </div>
        </>
    )
}