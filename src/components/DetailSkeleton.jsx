import "./skeleton.css";

export default function DetailSkeleton() {
  return (
    <div className="detail">
      <div className="detail-hero skeleton skeleton-hero"></div>

      <div className="detail-content">
        <div className="detail-header">
          <div className="detail-poster">
            <div className="skeleton skeleton-poster"></div>
          </div>

          <div className="detail-info">
            <div className="skeleton skeleton-text skeleton-title"></div>

            <div className="detail-meta" style={{ gap: "1rem", marginTop: "1rem" }}>
              <div className="skeleton skeleton-text" style={{ width: "80px" }}></div>
              <div className="skeleton skeleton-text" style={{ width: "100px" }}></div>
              <div className="skeleton skeleton-text" style={{ width: "100px" }}></div>
            </div>

            <div className="detail-genres" style={{ marginTop: "1rem", gap: "0.5rem" }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="skeleton skeleton-text" style={{ width: "80px", height: "28px" }}></div>
              ))}
            </div>

            <div className="detail-actions" style={{ marginTop: "1.5rem", gap: "1rem" }}>
              <div className="skeleton skeleton-text" style={{ width: "180px", height: "40px" }}></div>
              <div className="skeleton skeleton-text" style={{ width: "150px", height: "40px" }}></div>
            </div>
          </div>
        </div>

        <div className="detail-overview" style={{ marginTop: "2rem" }}>
          <div className="skeleton skeleton-text skeleton-text-lg"></div>
          <div className="skeleton skeleton-text" style={{ marginTop: "0.5rem" }}></div>
          <div className="skeleton skeleton-text" style={{ marginTop: "0.5rem" }}></div>
          <div className="skeleton skeleton-text" style={{ marginTop: "0.5rem", width: "70%" }}></div>
        </div>

        <div className="detail-section" style={{ marginTop: "2rem" }}>
          <div className="skeleton skeleton-text skeleton-text-lg" style={{ marginBottom: "1rem" }}></div>
          <div className="cast-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="cast-card">
                <div className="skeleton skeleton-image" style={{ width: "100%", height: "200px" }}></div>
                <div className="skeleton skeleton-text" style={{ marginTop: "0.5rem" }}></div>
                <div className="skeleton skeleton-text" style={{ marginTop: "0.3rem" }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
