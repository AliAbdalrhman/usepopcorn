import { ListBox } from "./Movies";
import { WatchedBox } from "./Watched";

export default function Main({ movies }) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  );
}
