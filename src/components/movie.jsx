import "./movie.css"
import { useNavigate } from "react-router-dom";
export default function MovieCard({ movie }) {
  let navigate = useNavigate();
  function handleNavigate() {
    navigate(`/detail/${movie.id}`)
  }
  return (
    <>
      <div className="card">
        <div className="poster">
          <img onClick={ handleNavigate} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      </div>
    </>
  );
}
