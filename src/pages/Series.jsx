import React from "react";
import { Drama, TVPopular, TVUpcoming, TVTopRated } from "../services/api";
import CategoryGrid from "../components/CategoryGrid";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import "./moviesPage.css";

export default function Series() {
  return (
    <>
      <NavBar />
      <div className="movies-container">
        <h1 className="movies-title">TV Series</h1>
        <CategoryGrid apiFunction={Drama} title="Latest & Trending" mediaType="tv" />
        <CategoryGrid apiFunction={TVPopular} title="Popular Series" mediaType="tv" />
        <CategoryGrid apiFunction={TVUpcoming} title="Upcoming Series" mediaType="tv" />
        <CategoryGrid apiFunction={TVTopRated} title="Top Rated Series" mediaType="tv" />
      </div>
      <Footer />
    </>
  );
}
