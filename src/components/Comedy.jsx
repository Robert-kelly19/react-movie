import React from 'react'
import {useEffect, useState} from "react"
import MovieCard from "../components/movie"
export default function Comedy() {
    const API_KEY = "42bff7ea17474804caad34f8da9f455b";
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
            );
            const data = await response.json();
            console.log(data)
            setMovies(data.results);
          } catch (error) {
            console.error('Error fetching movies:', error);
          }
        };
    
        fetchMovies();
      }, []);
  return (
    <div className="trend">
      <h1>Comedy</h1>
    <div className="trend-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  </div>
  )
}
