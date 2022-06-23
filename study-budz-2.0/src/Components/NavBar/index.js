import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed">
      <nav className="navbar-container">
        <div className="nav-sides">
          <h3>Study Budz</h3>
          <input type="search" placeholder="testing" />
        </div>
        <div className="nav-sides">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/how-study-budz-work">How StudyBudz Works</Link>
          </p>
          <p>
            <Link to="/how-to-work-together">How to work together</Link>
          </p>
          <button>
            <a href="/">How to turn on a computer</a>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;