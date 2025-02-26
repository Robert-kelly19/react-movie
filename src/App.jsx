import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Favourites from "./pages/Favourites";
import "./App.css";
import { MovieProvider } from "./context/MovieContext";
function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
