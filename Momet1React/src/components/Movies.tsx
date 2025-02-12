import "../Movies.css";
import Movie from "./OneMovie";

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

                    <section className="row g-2">
                        {allMovies.map((movie) => ( //mapar ut alla filmer
                            <Movie movie={movie} /> //skickar in i Movie
                        ))}
                    </section>
                </div>
            </div>




        </>
    )
}
//exporterar
export default Movies;