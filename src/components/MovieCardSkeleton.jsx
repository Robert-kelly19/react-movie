import "./movie.css";
import "./skeleton.css";

export default function MovieCardSkeleton() {
  return (
    <div className="similar-card">
      <div className="poster">
        <div className="skeleton skeleton-card-poster"></div>
      </div>
      <div className="skeleton skeleton-text" style={{ width: "80%", height: "14px", marginTop: "10px" }}></div>
      <div className="skeleton skeleton-text" style={{ width: "50px", height: "13px" }}></div>
    </div>
  );
}
