import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/series">Series</NavLink>
    </nav>
  )
}

export default Navbar
