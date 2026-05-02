import "./movie.css"
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
export default function MovieCard({ movie, showDetails, mediaType }) {
  let navigate = useNavigate();
  function handleNavigate() {
    const type = mediaType || movie.media_type || "movie";
    navigate(`/detail/${movie.id}/${type}`)
  }
  return (
    <>
      <div className="similar-card">
        <div className="poster">
          <img onClick={ handleNavigate} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} />
        </div>
        {showDetails !== false && (
          <>
            <div className="card-title">{movie.title || movie.name}</div>
            <div className="card-rating">
              <Star size={14} fill="#fbbf24" />
              {movie.vote_average?.toFixed(1)}
            </div>
          </>
        )}
      </div>
    </>
  );
}
