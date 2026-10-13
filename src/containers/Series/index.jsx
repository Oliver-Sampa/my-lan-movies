import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Movies/style.css';
import { getPopularSeries } from '../../services/api';

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getPopularSeries()
      .then((data) => setSeries(data.results || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Series</h1>
      <div className="movies-grid">
        {series.map((s) => (
          <Link to={`/series/${s.id}`} key={s.id}>
            {s.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${s.poster_path}`}
                alt={s.name}
                width="200"
              />
            )}
            <p>{s.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Series;
