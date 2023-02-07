import React from 'react'
import './index.css'

const card =({movie})=> {

    return(
        <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            {/* <img src={movie.Poster !== 'N/A'?movie.poster :'no poster' }/> */}
        <a href ="youtube.com/{movie.title}"> <img src={movie.Poster } alt={movie.Title} /> </a>
            
        </div>
        <div>
            <h3>{movie.Type}</h3>
            <h2>
                {movie.Title}
            </h2>
        </div>
    </div>
    )
}

export default card