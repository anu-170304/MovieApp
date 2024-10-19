import React, { useEffect, useState } from "react";
import { getMovies } from "../api";
import MovieCard from "../components/MovieCard";
import "./HomePage.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getMovies("popular", page).then((res) => {
      const fetchedMovies = res.data.results.slice(0, 18);
      setMovies(fetchedMovies);
      setTotalPages(res.data.total_pages);
    });
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <h1
        style={{
          fontFamily: "monospace",
          fontSize: "2.5rem",
          marginLeft: "50px",
        }}
      >
        Popular Movies
      </h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          style={{
            borderRadius: "10px",
            height: "50px",
            width: "150px",
            fontSize: "1.5rem",
            fontFamily: "monospace",
            color: "black",
            fontWeight: "700",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "grey";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "black";
          }}
        >
          Previous
        </button>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "1.5rem",
            fontWeight: "800",
            color: "grey",
          }}
        >
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          style={{
            borderRadius: "10px",
            height: "50px",
            width: "150px",
            fontSize: "1.5rem",
            fontFamily: "monospace",
            color: "black",
            fontWeight: "700",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "grey";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "black";
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage;
