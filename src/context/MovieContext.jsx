import { createContext, useContext, useState, useEffect } from "react";

const movieContext = createContext()
export const useMovieContext = () => useContext(movieContext)
export const MovieProvider = ({children }) => {
    const [favourite, setFavourite] = useState([])
    useEffect(() => {
        const storedFav = localStorage.getItem("favourite")
        if(storedFav) setFavourite(JSON.parse(storedFav))
    }, [])
    
    useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(favourite))
    }, [favourite])
    
    const addToFavourite = (movie) => {
        setFavourite(prev => [...prev, movie])
    }

    const removeFromFavourite = (movieId) => {
        setFavourite(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavourites = ((movieId) => {
        return favourite.some(movie => movie.id===movieId)
    })

    const value = {
        favourite,
        addToFavourite,
        removeFromFavourite,
        isFavourites
    }

    return <movieContext.Provider value={value}>
        {children}
    </movieContext.Provider>
}