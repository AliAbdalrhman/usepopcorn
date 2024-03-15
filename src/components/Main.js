import { ListBox } from "./Movies";
import { WatchedBox } from "./Watched";

export default function Main({
  movies,
  isLoading,
  error,
  selectedId,
  onSelectMovie,
  onCloseMovie,
}) {
  return (
    <main className="main">
      <ListBox
        movies={movies}
        isLoading={isLoading}
        error={error}
        onSelectMovie={onSelectMovie}
        onCloseMovie={onCloseMovie}
      />

      <WatchedBox selectedId={selectedId} onCloseMovie={onCloseMovie} />
    </main>
  );
}
