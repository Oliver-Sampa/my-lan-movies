import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Navbar from '../Navbar'
import './style.css'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} className="logo" alt="logo-dev-movies" />
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
