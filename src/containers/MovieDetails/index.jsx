
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails, getMovieVideos } from '../../services/api';
import '../Movies/style.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trailer, setTrailer] = useState(null);

 useEffect(() => {
  getMovieDetails(id)
    .then((data) => setMovie(data))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
}, [id]);

useEffect(() => {
  getMovieVideos(id)
    .then((data) => {
      const video = data.results.find(
        (v) => v.site === 'YouTube' && v.type === 'Trailer'
      );
      setTrailer(video || null);
    })
    .catch((err) => console.error(err));
}, [id]);
  

  if (loading) return <p>Loading...</p>;
  if (!movie || !movie.title) return <p>Movie not found.</p>;

  
  return (
  <div>
    <Link to="/movies">← Back to movies</Link>
    <div className="details">
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="300"
        />
      )}
      <div className="details-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Release date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average?.toFixed(1)}</p>
      </div>
    </div>
        {trailer && (
      <iframe
        className="trailer"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title="Movie trailer"
        allowFullScreen
      />
    )}
  </div>
);
}

export default MovieDetails
