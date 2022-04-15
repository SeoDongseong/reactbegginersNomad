import { useEffect, useState } from "react";
import Movie from "../components/movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const url =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
  const getMovies = async () => {
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>Movie</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
