import React from "react";
import "../css/fav.css"
import NavBar from "../components/navBar";
import Footer from "../components/footer";
export default function Favourites() {
  return (
    <>
      <NavBar/>
      <div className="fav">
      <h1>Your favourites <span className="heart">&#x1F493;</span> will be added here</h1>
      </div>
      <Footer/>
    </>
  );
}
