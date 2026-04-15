import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/detail.css";
import MovieCard from "../components/movie";
import Cast from "../components/Cast";
import { toast } from "react-toastify";
import { BookMarked, Heart, Star, Clock, Calendar } from "lucide-react";

export default function Detail() {
  const { id } = useParams();
  const API_KEY = "42bff7ea17474804caad34f8da9f455b";

  const [detailMovie, setDetailMovie] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [cast, setCast] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!id) return;
    const stored = localStorage.getItem("localtabFavorie");
    const favorites = stored ? JSON.parse(stored) : [];
    const exists = favorites.find((item) => item.id === parseInt(id));
    setIsFavorite(!!exists);
  }, [id]);

  function onLike(movie) {
    if (!movie) return;

    const stored = localStorage.getItem("localtabFavorie");
    const favorites = stored ? JSON.parse(stored) : [];

    const exists = favorites.find((item) => item.id === movie.id);

    if (exists) {
      const updated = favorites.filter((item) => item.id !== movie.id);
      localStorage.setItem("localtabFavorie", JSON.stringify(updated));
      setIsFavorite(false);
      toast.success("Removed from favourites");
    } else {
      favorites.push({ ...movie, favorite: true });
      localStorage.setItem("localtabFavorie", JSON.stringify(favorites));
      setIsFavorite(true);
      toast.success("Added to favourites");
    }
  }

  function watchList() {
    toast.success("Added to watchlist");
  }

  useEffect(() => {
    if (!id) return;

    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        const data = await res.json();
        setDetailMovie(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    if (!id) return;

    const fetchSimilar = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
        );
        const data = await res.json();
        setSimilar(data.results || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSimilar();
  }, [id]);

  useEffect(() => {
    if (!id) return;

    const fetchCast = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
        );
        const data = await res.json();
        setCast(data.cast || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <>
      <NavBar />

      {detailMovie ? (
        <div className="detail">
          <div
            className="detail-hero"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${detailMovie.backdrop_path})`,
            }}
          ></div>

          <div className="detail-content">
            <div className="detail-header">
              <div className="detail-poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`}
                  alt={detailMovie.title}
                />
              </div>

              <div className="detail-info">
                <h1 className="detail-title">{detailMovie.title}</h1>
                
                <div className="detail-meta">
                  <div className="detail-rating">
                    <Star size={18} fill="#fbbf24" />
                    {detailMovie.vote_average?.toFixed(1)}
                  </div>
                  <span className="detail-runtime">
                    <Clock size={16} /> {detailMovie.runtime} min
                  </span>
                  <span className="detail-year">
                    <Calendar size={16} /> {detailMovie.release_date?.substring(0, 4)}
                  </span>
                </div>

                <div className="detail-genres">
                  {detailMovie.genres?.map((genre) => (
                    <span key={genre.id} className="detail-genre">
                      {genre.name}
                    </span>
                  ))}
                </div>

                <div className="detail-actions">
                  <button 
                    className={`action-btn primary ${isFavorite ? 'active' : ''}`} 
                    onClick={() => onLike(detailMovie)}
                  >
                    <Heart size={18} fill={isFavorite ? "#ef4444" : "none"} /> {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                  </button>
                  <button 
                    className="action-btn secondary" 
                    onClick={watchList}
                  >
                    <BookMarked size={18} /> Watchlist
                  </button>
                </div>
              </div>
            </div>

            <div className="detail-overview">
              <h2>Overview</h2>
              <p>{detailMovie.overview}</p>
            </div>

            {cast.length > 0 && (
              <div className="detail-section">
                <h2>Top Cast</h2>
                <div className="cast-grid">
                  {cast.slice(0, 10).map((actor) => (
                    <Cast actor={actor} key={actor.id} />
                  ))}
                </div>
              </div>
            )}

            {similar.length > 0 && (
              <div className="detail-section">
                <h2>More Like This</h2>
                <div className="similar-grid">
                  {similar.slice(0, 10).map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}

      <Footer />
    </>
  );
}
