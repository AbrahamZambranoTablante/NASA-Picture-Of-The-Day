const URL = import.meta.env.VITE_API_BASE_URL;

export function getPictureOfTheDay () {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${URL}`)
    .then(res => res.json())
}

export function getLastestPOTD (lastweek, today) {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${URL}&start_date=${lastweek}&end_date=${today}&thumbs=true`)
    .then(res => res.json())
}

export function getOnePOTD (date) {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${URL}&date=${date}`)
    .then(res => res.json())
}