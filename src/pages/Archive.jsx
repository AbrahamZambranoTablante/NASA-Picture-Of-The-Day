import { useEffect, useState } from "react";
import { getLastestPOTD } from "../data/fetch";
import PotdList from "../components/PotdList";
import { useNavigate } from "react-router-dom";

export default function Archive () {

    const navigate = useNavigate();
    const [potdList, setPotdList] = useState([]);
    const [calendarDate, setCalendarDate] = useState({date: ""})

    function formatDate ( unformattedDate ) {
       let formattedDate = unformattedDate.split("/");
       formattedDate.unshift(formattedDate.pop());
       return formattedDate.join("-");
    }

    function getTodayDate() {
        const date = new Date();
        return formatDate(date.toLocaleDateString('en-US'));
    }

    function getLastWeekDate () {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 8);
        let formattedDate = currentDate.toISOString().slice(0, 10);
        return formattedDate;
    }

    function handleDate (e) {
        setCalendarDate({
            ...calendarDate, [e.target.id]: e.target.value
        })
    }

    function handleSubmit (e) {
        e.preventDefault();
        navigate(`/archive/pictureoftheday/${formatDate(calendarDate.date)}`);
        setCalendarDate({date: ""})
    }

    useEffect(() => {
        getLastestPOTD (getLastWeekDate(), getTodayDate())
        .then(res => setPotdList(res))
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date"></label>
                <input type="date" id="date" onChange={handleDate} value={calendarDate.date}/>
                <input type="submit" value="Submit"/>
            </form>
            <div className="potd-list">
                {potdList.map(potd => <PotdList potd={potd} key={potd.date}/> )}
            </div>
        </>
    )
}