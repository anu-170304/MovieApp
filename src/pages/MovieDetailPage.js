import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieCredits } from "../api";
import "./MovieDetailPage.css";
import { FaStar } from "react-icons/fa";

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieDetails(id).then((res) => setMovie(res.data));
    getMovieCredits(id).then((res) => setCast(res.data.cast.slice(0, 5)));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <div className="movie-header">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <div className="movie-rating">
            <FaStar className="star-icon" />
            <span>{movie.vote_average} / 10</span>
            <span className="vote-count">({movie.vote_count} votes)</span>
          </div>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
      </div>

      <h2 style={{ fontFamily: "monospace", fontSize: "1.5rem" }}>Top Cast</h2>
      <div className="cast-list">
        {cast.map((actor) => (
          <div key={actor.cast_id} className="cast-card">
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
              className="cast-image"
            />
            <p className="cast-name">
              {actor.name} <br />
              <span className="character-name">as {actor.character}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDetailPage;
