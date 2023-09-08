// import {FontAwesomeIcon} from 'react-dom'
import {Link} from 'react-router-dom'
// import Cookie from 'js-cookie'

import './index.css'

const Header = () => (
  //   const {history} = props
  //   Cookie.remove('jwt_token')
  //   history.replace('/login')

  <nav>
    <ul className="first-container">
      <Link to="/" className="nav-link">
        <li>
          <img
            src="https://res.cloudinary.com/dxorhiaeo/image/upload/v1694096912/Group_7399logo_krlpfq.png"
            className="movie-logo"
            alt="login website logo"
          />
        </li>
      </Link>
      <Link to="/" className="nav-link">
        <li>Home</li>
      </Link>
      <Link to="/popular" className="nav-link">
        <li>Popular</li>
      </Link>
    </ul>
    <ul className="profile-container">
      <Link to="/search" className="nav-link">
        <li>search</li>
      </Link>

      <Link to="/account" className="nav-link">
        <li>
          <img
            src="https://res.cloudinary.com/dxorhiaeo/image/upload/v1694151436/Avatarmanprofile_eyrw48.jpg"
            alt="profile"
            className="profile-pic"
          />
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header
