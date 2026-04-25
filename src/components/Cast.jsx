import React from "react";
import "../css/cast.css"
export default function Cast({ actor }) {
  return (
    <div className="cast-card">
      <img
        src={actor.profile_path 
          ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
          : "https://via.placeholder.com/120x120?text=No+Image"
        }
        alt={actor.name}
      />
      <div className="cast-name">
        {actor.name?.split("-")[0]}
      </div>
      <div className="cast-character">
        {actor.character?.split("-")[0]}
      </div>
    </div>
  );
}
