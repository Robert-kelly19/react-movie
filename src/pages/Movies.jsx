import React from "react";
import { Trending, Popular, Comedy, MovieTopRated } from "../services/api";
import CategoryGrid from "../components/CategoryGrid";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import "./moviesPage.css";

export default function Movies() {
  return (
    <>
      <NavBar />
      <div className="movies-container">
        <h1 className="movies-title">Movies</h1>
        <CategoryGrid apiFunction={Trending} title="Latest & Trending" mediaType="movie" />
        <CategoryGrid apiFunction={Popular} title="Popular Movies" mediaType="movie" />
        <CategoryGrid apiFunction={Comedy} title="Upcoming Movies" mediaType="movie" />
        <CategoryGrid apiFunction={MovieTopRated} title="Top Rated Movies" mediaType="movie" />
      </div>
      <Footer />
    </>
  );
}
