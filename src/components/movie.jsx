import "./movie.css"
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
export default function MovieCard({ movie, showDetails }) {
  let navigate = useNavigate();
  function handleNavigate() {
    navigate(`/detail/${movie.id}`)
  }
  return (
    <>
      <div className="similar-card">
        <div className="poster">
          <img onClick={ handleNavigate} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        {showDetails !== false && (
          <>
            <div className="card-title">{movie.title}</div>
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
