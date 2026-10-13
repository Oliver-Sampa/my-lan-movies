import Logo from '../../assets/logo.png'
import Navbar from '../Navbar'
import './style.css'
function Header() {
  return (
    <div>
      <img src={Logo}  className="logo" alt="logo-dev-movies" />
      <Navbar />
    </div>
  )
}

export default Header;
