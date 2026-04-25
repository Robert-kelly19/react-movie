import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function searchedMovie(movie) {
     let navigate = useNavigate();
      function handleNavigate() {
        navigate(`/detail/${movie.id}`)
      }
  return (
    <div>
        <img onClick={ handleNavigate} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <p>${movie.title}</p>
    </div>
  )
}
