import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { getPopularMovies } from '../../services/api';


function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => setMovies(data.results || []))
      .catch((err) => console.error(err));
  }, []);

  
    return (
    <div>
      <h1>Movies</h1>
      <div className="movies-grid">
        
        {movies.map((m) => (
  <Link to={`/movies/${m.id}`} key={m.id}>
    {m.poster_path && (
      <img
        src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
        alt={m.title}
        width="200"
      />
    )}
    <p>{m.title}</p>
  </Link>
))}
      </div>
    </div>
  );
}

export default Movies;
