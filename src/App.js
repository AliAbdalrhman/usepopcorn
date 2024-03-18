import { NavBar } from "./components/NavBar";
import Main from "./components/Main";
import { useState } from "react";
import { useMovies } from "./useMovies";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);

  function handleSelectedMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  return (
    <>
      <NavBar movies={movies} query={query} setQuery={setQuery} />
      <Main
        movies={movies}
        isLoading={isLoading}
        error={error}
        selectedId={selectedId}
        onSelectMovie={handleSelectedMovie}
        onCloseMovie={handleCloseMovie}
      />
    </>
  );
}
