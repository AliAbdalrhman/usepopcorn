import { ListBox } from "./Movies";
import { WatchedBox } from "./Watched";

export default function Main({ movies, isLoading, error }) {
  return (
    <main className="main">
      <ListBox movies={movies} isLoading={isLoading} error={error} />
      <WatchedBox />
    </main>
  );
}
