import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/detail.css";
import MovieCard from "../components/movie";
import Cast from "../components/Cast";
import { toast } from "react-toastify";
import { BookMarked, Heart, Star, Clock, Calendar, Tv } from "lucide-react";
import {
  GetMovieDetail,
  GetTVDetail,
  GetMovieCast,
  GetTVCast,
  GetMovieSimilar,
  GetTVSimilar,
  MovieRecommendations,
  TVRecommendations,
} from "../services/api";

export default function Detail() {
  const { id, mediaType } = useParams();
  const [detail, setDetail] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [cast, setCast] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [type, setType] = useState(mediaType || "movie");

  // Determine if it's movie or TV
  useEffect(() => {
    if (!id) return;

    // If mediaType is provided in URL, use it
    if (mediaType) {
      setType(mediaType);
      return;
    }

    // Otherwise try to detect from localStorage or default to movie
    const stored = localStorage.getItem("localtabFavorie");
    const favorites = stored ? JSON.parse(stored) : [];
    const item = favorites.find((item) => item.id === parseInt(id));

    if (item && item.media_type) {
      setType(item.media_type);
    }
  }, [id, mediaType]);

  // Check if favorite
  useEffect(() => {
    if (!id) return;
    const stored = localStorage.getItem("localtabFavorie");
    const favorites = stored ? JSON.parse(stored) : [];
    const exists = favorites.find((item) => item.id === parseInt(id));
    setIsFavorite(!!exists);
  }, [id]);

  function onLike(item) {
    if (!item) return;

    const stored = localStorage.getItem("localtabFavorie");
    const favorites = stored ? JSON.parse(stored) : [];

    const exists = favorites.find((fav) => fav.id === item.id);

    if (exists) {
      const updated = favorites.filter((fav) => fav.id !== item.id);
      localStorage.setItem("localtabFavorie", JSON.stringify(updated));
      setIsFavorite(false);
      toast.success("Removed from favourites");
    } else {
      favorites.push({ ...item, favorite: true, media_type: type });
      localStorage.setItem("localtabFavorie", JSON.stringify(favorites));
      setIsFavorite(true);
      toast.success("Added to favourites");
    }
  }

  function watchList() {
    toast.success("Added to watchlist");
  }

  // Fetch detail
  useEffect(() => {
    if (!id || !type) return;

    const fetchDetail = async () => {
      try {
        const data = type === "tv"
          ? await GetTVDetail(id)
          : await GetMovieDetail(id);
        setDetail(data);
      } catch (err) {
        console.error("Error fetching detail:", err);
      }
    };

    fetchDetail();
  }, [id, type]);

  // Fetch similar/recommendations
  useEffect(() => {
    if (!id || !type) return;

    const fetchSimilar = async () => {
      try {
        const data = type === "tv"
          ? await GetTVSimilar(id)
          : await GetMovieSimilar(id);
        setSimilar(data || []);
      } catch (err) {
        console.error("Error fetching similar:", err);
      }
    };

    fetchSimilar();
  }, [id, type]);

  // Fetch cast
  useEffect(() => {
    if (!id || !type) return;

    const fetchCast = async () => {
      try {
        const castData = type === "tv"
          ? await GetTVCast(id)
          : await GetMovieCast(id);
        setCast(castData || []);
      } catch (err) {
        console.error("Error fetching cast:", err);
      }
    };

    fetchCast();
  }, [id, type]);

  if (!detail) {
    return (
      <>
        <NavBar />
        <div className="loading">Loading...</div>
        <Footer />
      </>
    );
  }

  const title = detail.title || detail.name;
  const releaseDate = type === "tv" ? detail.first_air_date : detail.release_date;
  const year = releaseDate?.substring(0, 4);

  return (
    <>
      <NavBar />

      <div className="detail">
        <div
          className="detail-hero"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
          }}
        ></div>

        <div className="detail-content">
          <div className="detail-header">
            <div className="detail-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                alt={title}
              />
            </div>

            <div className="detail-info">
              <h1 className="detail-title">{title}</h1>

              <div className="detail-meta">
                <div className="detail-rating">
                  <Star size={18} fill="#fbbf24" />
                  {detail.vote_average?.toFixed(1)}
                </div>
                {type === "tv" ? (
                  <>
                    <span className="detail-runtime">
                      <Tv size={16} /> {detail.number_of_seasons} Season{detail.number_of_seasons !== 1 ? "s" : ""}
                    </span>
                  </>
                ) : (
                  <span className="detail-runtime">
                    <Clock size={16} /> {detail.runtime} min
                  </span>
                )}
                <span className="detail-year">
                  <Calendar size={16} /> {year}
                </span>
              </div>

              <div className="detail-genres">
                {detail.genres?.map((genre) => (
                  <span key={genre.id} className="detail-genre">
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="detail-actions">
                <button
                  className={`action-btn primary ${isFavorite ? "active" : ""}`}
                  onClick={() => onLike(detail)}
                >
                  <Heart size={18} fill={isFavorite ? "#ef4444" : "none"} />{" "}
                  {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </button>
                <button className="action-btn secondary" onClick={watchList}>
                  <BookMarked size={18} /> Watchlist
                </button>
              </div>
            </div>
          </div>

          <div className="detail-overview">
            <h2>Overview</h2>
            <p>{detail.overview}</p>
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
                {similar.slice(0, 10).map((item) => (
                  <MovieCard
                    movie={item}
                    key={item.id}
                    mediaType={type}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
