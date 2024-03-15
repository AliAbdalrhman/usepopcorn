import { useState } from "react";

export function ListBox({ movies, isLoading, error, onSelectMovie }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {/* {isLoading ? <Loader /> : isOpen1 && <MovieList movies={movies} />} */}
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <MovieList movies={movies} onSelectMovie={onSelectMovie} />
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectedMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}

export function Movie({ movie, onSelectedMovie }) {
  return (
    <li onClick={() => onSelectedMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}
