import React from 'react'
import {useEffect, useState} from "react"
import MovieCard from "../components/movie"
export default function TopSearch() {
   const API_KEY =import.meta.env.VITE_APP_API_KEY

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            );
            const data = await response.json();
            setMovies(data.results);
          } catch (error) {
            console.error('Error fetching movies:', error);
          }
        };
    
        fetchMovies();
      }, []);
  return (
    <div className="trend">
      <h1>TopSearch</h1>
    <div className="trend-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  </div>
  )
}