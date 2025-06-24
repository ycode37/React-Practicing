import React, { useState } from "react";
import seriesList from "../api/seriesData.json";
import { MovieCard } from "./MovieCard";
import "./MovieCard.css";

const Movie = () => {
  const [Movierating, setMovierating] = useState("all");
  const [MovieGenre, setMovieGenre] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setMovierating(e.target.value);
  };

  const handleChangeGenre = (e) => {
    setMovieGenre(e.target.value);
  };

  const updatedrating = () => {
    switch (Movierating) {
      case "high":
        return 9.0;
      case "med":
        return 8.0;
      case "low":
        return 7.0;
      default:
        return 0;
    }
  };

  const filteredList = seriesList.filter((movie) => {
    const numericRating = parseFloat(movie.rating);
    const isValidRating = !isNaN(numericRating);

    const matchRating =
      Movierating === "all"
        ? true
        : isValidRating && numericRating >= updatedrating();

    const matchGenre =
      MovieGenre === "all"
        ? true
        : Array.isArray(movie.genre) && movie.genre.includes(MovieGenre);

    const matchSearch = movie.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchRating && matchGenre && matchSearch;
  });

  // Dynamically extract all unique genres from the array of arrays
  const allGenres = Array.from(
    new Set(seriesList.flatMap((m) => m.genre))
  ).sort();

  return (
    <div className="movie-container">
      <div className="filters-container">
        <select value={Movierating} onChange={handleChange}>
          <option value="all">All Ratings</option>
          <option value="high">9.0+</option>
          <option value="med">8.0+</option>
          <option value="low">7.0+</option>
        </select>

        <select value={MovieGenre} onChange={handleChangeGenre}>
          <option value="all">All Genres</option>
          {allGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name..."
        />
      </div>

      <div className="movies-grid">
        {filteredList.length > 0 ? (
          filteredList.map((curElem) => (
            <MovieCard
              key={curElem.id}
              data={curElem}
              rating={curElem.rating}
            />
          ))
        ) : (
          <p className="no-results">No results match your filter.</p>
        )}
      </div>
    </div>
  );
};

export default Movie;
