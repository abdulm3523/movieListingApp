
import {movieListDate} from "../utility/movieDate";
import MovieCard from "./movieCard";
export default function MovieList() {
    return (
    
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movieListDate.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
      
  );
}
