import { useEffect, useState } from "react";
import { getLastestPOTD } from "../data/fetch";
import PotdList from "../components/PotdList";
import { useNavigate } from "react-router-dom";
import "./Archive.css";


export default function Archive ({formatDate, handleDate, setCalendarDate, calendarDate}) {

    const [potdList, setPotdList] = useState([]);
    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();
        navigate(`/archive/pictureoftheday/${formatDate(calendarDate.date)}`);
        setCalendarDate({date: ""})
      }
    
    function getTodayDate() {
        const date = new Date();
        return formatDate(date.toLocaleDateString('en-US'));
    }

    function getLastWeekDate () {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 15);
        let formattedDate = currentDate.toISOString().slice(0, 10);
        return formattedDate;
    }

    useEffect(() => {
        getLastestPOTD (getLastWeekDate(), getTodayDate())
        .then(res => setPotdList(res))
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Go to a specific date </label>
                <input type="date" id="date" onChange={handleDate} value={calendarDate.date}/>
                <input type="submit" value="Search"/>
            </form>
            <div className="potd-list">
                {potdList.map(potd => <PotdList potd={potd} key={potd.date}/> )}
            </div>
        </>
    )
}