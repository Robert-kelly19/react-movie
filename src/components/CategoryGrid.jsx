import React, { useEffect, useState } from "react";
import MovieCard from "./movie";
import "./movie.css";

export default function CategoryGrid({ apiFunction, title, gridClassName = "trend-grid", mediaType = "movie" }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await apiFunction();
        setItems(data || []);
      } catch (error) {
        console.error(`Error fetching ${title}:`, error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [apiFunction, title]);

  if (loading) {
    return <div className="loading">Loading {title}...</div>;
  }

  return (
    <div className="trend">
      <h1>{title}</h1>
      <div className={gridClassName}>
        {items.length > 0 ? (
          items.map((item) => (
            <MovieCard
              movie={item}
              key={item.id}
              mediaType={item.media_type || mediaType}
            />
          ))
        ) : (
          <div>No items found</div>
        )}
      </div>
    </div>
  );
}
