import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/movie/get-all`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovies(data);

      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
    fetchMovieData();
  },[]);

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies?.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
