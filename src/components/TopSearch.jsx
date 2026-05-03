import React from 'react'
import {useEffect, useState} from "react"
import MovieCard from "../components/movie"
import MovieCardSkeleton from "./MovieCardSkeleton"
export default function TopSearch() {
     const API_KEY = import.meta.env.VITE_APP_API_KEY

     const [movies, setMovies] = useState([]);
     const [loading, setLoading] = useState(true);
     useEffect(() => {
         const fetchMovies = async () => {
           try {
             setLoading(true);
             const response = await fetch(
               `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
             );
             const data = await response.json();
             setMovies(data.results);
           } catch (error) {
             console.error('Error fetching movies:', error);
           } finally {
             setLoading(false);
           }
         };
     
         fetchMovies();
       }, []);
   return (
     <div className="trend">
       <h1>TopSearch</h1>
     <div className="trend-grid">
       {loading ? (
         [1, 2, 3, 4, 5, 6].map((i) => (
           <MovieCardSkeleton key={i} />
         ))
       ) : (
         movies.map((movie) => (
           <MovieCard movie={movie} key={movie.id} />
         ))
       )}
     </div>
   </div>
   )
 }