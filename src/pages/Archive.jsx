import { useEffect } from "react";

export default function Archive () {

    function getTodayDate() {
        const fullDate = new Date();
        const date = fullDate.toLocaleDateString('en-US').split("/");
        date.unshift(date.pop());
        return date.join("/");
    }

    function getLastWeekDate () {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 8);
        let formattedDate = currentDate.toISOString().slice(0, 10);
        return formattedDate.replaceAll("-","/");
    }

    console.log(getTodayDate(), getLastWeekDate())


    return (
        <>
            
        </>
    )
}