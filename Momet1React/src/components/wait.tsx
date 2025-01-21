
<div className="allMoviesDiv">
            
{
allMovies.map((movie) => (
    <div className="listDiv">
    <ul>
    <li>
        <b>{movie.title}</b>
        <button type="button" className="btn btn-primary">Primary</button>
    </li>

    <li>
        Imdb betyg: {movie.rating}
    </li>

    <li>
    Sett: {movie.watched ? (
        <div className="yes">Ja</div>):(<div className="no" >Nej</div>
        )}
    </li>

    </ul>
    </div>
))
}

</div>