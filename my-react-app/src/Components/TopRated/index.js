import React, { useState, useEffect } from 'react';
import MoviesMap from '../MoviesMap';

const TopRated = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=73b656e932e23538739902ccda3f6f3e&language=en-US&page=1";
        const response = await fetch(url);
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <MoviesMap movies={popularMovies} />
    </div>
  );
};

export default TopRated;
