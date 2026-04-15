import React from "react";
import "../css/fav.css"
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import MovieCard from "../components/movie";
import {useEffect} from 'react'
export default function Favorie() {
  const favorieData = JSON.parse(localStorage.getItem("localtabFavorie")) || []
  useEffect(()=>{
  },[favorieData])
  return (
    <>
      <NavBar/>
    <div className="text-white min-h-screen">
          <main className="container mx-auto px-4 pt-20 mb-6 fav">
            {favorieData.length === 0 ? (
              <h1>Your favourites <span className="heart">&#x1F493;</span> will be added here</h1>
            ) : (
              <div className="fav-grid">
                {favorieData?.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            )}
          </main>
        </div>
         <Footer/>
      </>
  )
}