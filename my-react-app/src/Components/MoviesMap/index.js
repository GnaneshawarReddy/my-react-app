import React from 'react';

const MoviesMap = ({ movies }) => {
  return (
    <div style={{display: 'flex' ,flexWrap: 'wrap', justifyContent: 'center'}}>
      {movies.map((movie) => (
        <div key={movie.id}  style={{height: '350px', width: '350px'}}>
          <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} style={{ height: '250px', width: '250px' }} />
          <h2 style={{fontSize: '10px'}}>Title: {movie.original_title}</h2>
          <h2 style={{fontSize: '10px'}}>Rating: {movie.vote_average}</h2>
        </div>
      ))}
    </div>
  );
};

export default MoviesMap;
