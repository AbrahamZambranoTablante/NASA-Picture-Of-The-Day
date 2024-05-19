const URL = import.meta.env.VITE_API_BASE_URL;

export function getPictureOfTheDay () {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${URL}`)
    .then(res => res.json())
}