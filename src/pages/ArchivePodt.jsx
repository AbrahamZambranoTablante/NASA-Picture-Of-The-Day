import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getOnePOTD } from "../data/fetch";

export default function ArchivePotd ({formatDate, calendarDate, setCalendarDate, handleDate}) {

    const [pictureOfTheDay, setPictureOfTheDay] = useState({})
    const { date } = useParams()
    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();
        navigate(`/archive/pictureoftheday/${formatDate(calendarDate.date)}`);
        setCalendarDate({date: ""})
    }

    useEffect(() => {
        getOnePOTD(date)
        .then(res => setPictureOfTheDay(res))
    },[pictureOfTheDay])



    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Go to a specific date </label>
                <input type="date" id="date" onChange={handleDate} value={calendarDate.date}/>
                <input type="submit" value="Search"/>
            </form>

           { pictureOfTheDay.hdurl ? <Link to={`${pictureOfTheDay.hdurl}`}><img className="potd-image" src={pictureOfTheDay.hdurl} alt="NASA Picture of the Day"/></Link> : <iframe  className="potd-image" src={pictureOfTheDay.url} alt="NASA Video of the Day" ></iframe>}
        </>
    )
}