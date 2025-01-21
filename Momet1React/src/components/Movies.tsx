import "../Movies.css";

//funktion
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
        
    <div className="row g-2">

    {
        //Map igenom alla filmer i allMovies, skriver ut de olika värdena
        allMovies.map((movie) => (
            
           
    <ul className="col-md-4">
      <li style={{ fontSize: "130%", fontWeight: "bold", textDecoration: "underline", color: "000000"}}>{movie.title}</li>
      <li><b>Imdb:</b> {movie.rating}/10</li>
      <li> <b>Sett:</b> {movie.watched ? (
        <div className="yes">Ja</div>):(<div className="no" >Nej</div>
        )}</li>
    </ul>
   


        ))
    }
    </div>
    </div>
  </div>




    </>   
    )
}
//exporterar
export default Movies;