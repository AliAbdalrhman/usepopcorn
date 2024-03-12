import { ListBox } from "./Movies";
import { WatchedBox } from "./Watched";

export default function Main({ movies, isLoading }) {
  return (
    <main className="main">
      <ListBox movies={movies} isLoading={isLoading} />
      <WatchedBox />
    </main>
  );
}
