import "../Movies.css";


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
        },
        {
            title: "Fight Club",
            rating: 8.8,
            watched: true,
        }



    );


    return (
        <>
    <div className="forMargin">
    <div className="container-md text-center">
        
    <div className="row g-3">

    {
        
        allMovies.map((movie) => (
            
           
    <div className="col-md-4">
      <h4>{movie.title}</h4>
      <p><b>Imdb:</b> {movie.rating}/10</p>
      <p> <b>Sett:</b> {movie.watched ? (
        <div className="yes">Ja</div>):(<div className="no" >Nej</div>
        )}</p>
    </div>
   


        ))
    }
    </div>
    </div>
  </div>




    </>   
    )
}

export default Movies;