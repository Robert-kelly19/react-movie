import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import "./search.css";

export default function Search() {
  const navigate = useNavigate();
  const API_KEY = "42bff7ea17474804caad34f8da9f455b";

  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const backBtn = () => navigate(-1);

  useEffect(() => {
    if (!text.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
            text
          )}&include_adult=false&language=en-US&page=1`
        );
        const data = await response.json();
        console.log("Search results:", data);
        setResults(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchMovies, 500);
    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <div style={{ padding: "1rem" }}>
      <div className="top">
        <ChevronLeft size={35} onClick={backBtn} id="btn" />

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="search"
            placeholder="Start searching..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>

      <div
        className="results-grid"
        style={{
          
        }}
      >
        {loading ? (
          [1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} id="film">
              <MovieCardSkeleton />
            </div>
          ))
        ) : (
          results.map((item) => {
            const title = item.title || item.name;
            const poster = item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image";

            const handleNavigate = () => {
              const type = item.media_type === "tv" ? "tv" : "movie";
              navigate(`/detail/${item.id}/${type}`);
            };

            return (
              <div key={item.id} id="film" onClick={handleNavigate}>
                <img src={poster} alt={title} />
                <p>{title}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
