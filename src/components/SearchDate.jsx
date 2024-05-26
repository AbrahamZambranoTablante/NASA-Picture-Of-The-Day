import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchDate ({formatDate}) {

    const [calendarDate, setCalendarDate] = useState({date: ""});
    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();
        navigate(`/archive/pictureoftheday/${formatDate(calendarDate.date)}`);
        setCalendarDate({date: ""})
    }

    function handleDate (e) {
        setCalendarDate({
            ...calendarDate, [e.target.id]: e.target.value
        })
    }

    function today () {
        const date = new Date();
        return date.toISOString().split('T')[0]
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Go to a specific date </label>
                <input type="date" id="date" min="1995-06-20" max={today()} onChange={handleDate} value={calendarDate.date}/>
                <input type="submit" value="Search"/>
            </form>
        </>
    )
}