import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Favourites from "./pages/Favourites";
import "./App.css";
import { MovieProvider } from "./context/MovieContext";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </MovieProvider>
  );
}

export default App;
