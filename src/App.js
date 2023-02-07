import { useEffect, useState } from "react";
import SearchIcon from "./search.svg"
import "./index.css"
import Card from "./card.jsx"


// const API_URL = "http://www.omdbapi.com?apikey=8ab3263a";
const API_URL = "http://www.omdbapi.com?apikey=9ef9ee4e"



const App = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);

};

    useEffect(() => {
        searchMovies('spider man');
    }, []);



    return (
        <div className="App">
            <h1>
                Movie'Searcher
            </h1>
            <div className="search">
                <input
                    value={search}
                    placeholder='Search your movie'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(search)}


                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container ">

                            {movies.map((movie) => (
                                <Card movie={movie} />
                            ))}
                        </div>
                    ) :
                    (
                        <div>  movie is not available

                        </div>


                    )
            }



        </div>
    );
}

export default App;    