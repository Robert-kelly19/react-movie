import React, { useEffect, useState } from "react";
import { Popular } from "../services/api";
import Movie from "../components/movie";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import "./moviesPage.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await Popular();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar />
      <div className="movies-container">
        <h1 className="movies-title">Popular Movies</h1>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies && movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
