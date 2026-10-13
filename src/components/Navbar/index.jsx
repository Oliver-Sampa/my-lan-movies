import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/movies">Movies</Link> | <Link to="/series">Series</Link>
    </nav>
  );
}

export default Navbar;
