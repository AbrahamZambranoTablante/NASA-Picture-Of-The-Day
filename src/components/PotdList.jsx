
export default function PotdList ({potd}) {
    return(
        <>
            <div>
            {potd.hdurl ? <img className="potd-image" src={potd.hdurl} alt="NASA Picture of the Day"/> :  <iframe  className="potd-image" src={potd.url} alt="NASA Video of the Day" ></iframe>}
            </div>
        </>
    )
}