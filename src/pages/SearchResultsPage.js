import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../api";
import MovieCard from "../components/MovieCard";

function SearchResultsPage() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(query).then((res) => setMovies(res.data.results));
  }, [query]);

  return (
    <div>
      <h1
        style={{
          fontFamily: "monospace",
          fontSize: "2.5rem",
          marginLeft: "50px",
        }}
      >
        Search Results for "{query}"
      </h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchResultsPage;
