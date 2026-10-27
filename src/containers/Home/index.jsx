import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as api from "../../services/api.js";
import './styles.css'

const IMAGE_URL = 'https://image.tmdb.org/t/p/'

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
  async function getMovies() {
    const data = await api.getPopularMovies()
    setMovies(data.results)
  }

  getMovies()
}, [])
  

  const featured = movies[0]

  if (!featured) return null

  return (
    <main className="home">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${IMAGE_URL}original${featured.backdrop_path})`,
        }}
      >
        <div className="hero-overlay">
          <h1>{featured.title}</h1>
          <p>{featured.overview}</p>
          <Link to={`/movies/${featured.id}`} className="hero-button">
            View details
          </Link>
        </div>
      </section>

      <section className="popular">
        <h2>Popular now</h2>
        <div className="cards">
          {movies.slice(1, 11).map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id} className="card">
              <img
                src={`${IMAGE_URL}w500${movie.poster_path}`}
                alt={movie.title}
              />
              <span>{movie.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
