import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="nav-sides">
        <h3>Study Budz</h3>
        <input type="search" placeholder="testing" />
      </div>
      <div className="nav-sides">
        <p>
          <a href="/">Home</a>
        </p>
        <p>
          <a href="/">How to work together</a>
        </p>
        <p>
          <a href="/">How to use zoom</a>
        </p>
        <button>
          <a href="/">How to turn on a computer</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
