const URL = import.meta.env.VITE_API_BASE_URL;

export function getPictureOfTheDay () {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${URL}`)
    .then(res => res.json())
}

export function getLastestPOTD (today, lastweek) {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${lastweek}&end_date=${today}`)
    .then(res => res.json())
}