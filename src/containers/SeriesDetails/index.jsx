import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSeriesDetails, getSeriesVideos } from '../../services/api';
import '../Movies/style.css';

function SeriesDetails() {
  const { id } = useParams();
  const [series, setSeries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    getSeriesDetails(id)
      .then((data) => setSeries(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
  getSeriesVideos(id)
    .then((data) => {
      const video = data.results.find(
        (v) => v.site === 'YouTube' && v.type === 'Trailer'
      );
      setTrailer(video || null);
    })
    .catch((err) => console.error(err));
}, [id]);

  if (loading) return <p>Loading...</p>;
  if (!series || !series.name) return <p>Series not found.</p>;

  return (
    <div>
      <Link to="/series">← Back to series</Link>
      <div className="details">
        {series.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
            alt={series.name}
            width="300"
          />
        )}
        <div className="details-info">
          <h1>{series.name}</h1>
          <p>{series.overview}</p>
          <p>First air date: {series.first_air_date}</p>
          <p>Seasons: {series.number_of_seasons}</p>
          <p>Rating: {series.vote_average?.toFixed(1)}</p>
        </div>
      </div>
          {trailer && (
      <iframe
        className="trailer"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title="Series trailer"
        allowFullScreen
      />
    )}
    </div>
  );
}

export default SeriesDetails;
