import React, { useState, useEffect } from 'react';
import MoviesMap from '../MoviesMap';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://api.themoviedb.org/3/movie/popular?api_key=73b656e932e23538739902ccda3f6f3e&language=en-US&page=1";
        const response = await fetch(url);
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div className='movies-container'>
        <MoviesMap movies={movies} />
      </div>
    </div>
  );
};

export default Home;
