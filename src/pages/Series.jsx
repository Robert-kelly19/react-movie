import React, { useEffect, useState } from "react";
import { Drama } from "../services/api";
import Movie from "../components/movie";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import "./moviesPage.css";

export default function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setLoading(true);
        const data = await Drama();
        setSeries(data);
      } catch (error) {
        console.error("Error fetching series:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSeries();
  }, []);

  return (
    <>
      <NavBar />
      <div className="movies-container">
        <h1 className="movies-title">Popular Series</h1>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {series && series.map((show) => (
              <Movie key={show.id} movie={show} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
