import "../Movies.css";

//interface för en film
interface OneMovie {
    title: string;
    rating: number;
    watched: boolean;
}

//Movie som tar emot en film enligt OneMovie
const Movie = ({ movie }: { movie: OneMovie }) => { 
    return (
        <div className="col-md-4">

            <h4 >{movie.title}</h4>

            <p><b>IMDb:</b> {movie.rating}/10</p>

            <p><b>Sett:</b> {movie.watched ? (
                <div className="yes">Ja</div>) : (<div className="no">Nej</div>
            )}</p>

        </div>
    );
}


export default Movie;
