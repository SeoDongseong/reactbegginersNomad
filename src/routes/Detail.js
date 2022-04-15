import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  return (
    <div>
      <h1>Detail</h1>
      <Link to="/">Back</Link>
      {loading ? (
        "Loading..."
      ) : (
        <div key={movie.id}>
          <img src={movie.background_image} />
          <h2>{movie.title_long}</h2>
          <img src={movie.medium_cover_image} />
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
