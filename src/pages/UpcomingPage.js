import React, { useEffect, useState } from "react";
import { getMovies } from "../api";
import MovieCard from "../components/MovieCard";

function UpcomingPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies("upcoming").then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div>
      <h1
        style={{
          fontFamily: "monospace",
          fontSize: "2.5rem",
          marginLeft: "50px",
        }}
      >
        Upcoming Movies
      </h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingPage;
