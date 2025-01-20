function Movies() {

    const allMovies: oneMovie[] = []; //en array med interface oneMovie

    //skape interface för en film
    interface oneMovie {
        title: string;
        rating: number;
        watched: boolean;
    }

    //pushar in filmer i arrayen. 
    allMovies.push(
        {
            title: "The Godfather",
            rating: 9.3,
            watched: true,
        },

        {
            title: "12 Angry Men",
            rating: 9.0,
            watched: true,
        },

        {
            title: "Schindler's List",
            rating: 9.0,
            watched: true,
        },
        {
            title: "Forrest Gump",
            rating: 8.8,
            watched: true,
        },
        {
            title: " Se7en",
            rating: 8.6,
            watched: false,
        }


    );


    return (
        <>

        <div>
            
                {
                allMovies.map((movie) => (
                    <ul>
                    <li>
                        {movie.title}
                    </li>

                    <li>
                        {movie.rating}
                    </li>

                    <li>
                        {movie.watched ? (
                        <div>Ja</div>):(<div>Nej</div>
                        )}
                    </li>

                    </ul>
                ))
            }
            
        </div>




    </>   
    )
}

export default Movies;