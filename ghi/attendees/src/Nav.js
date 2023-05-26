function Nav() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Conference App</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Location</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Conference</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Presentation</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default Nav;
