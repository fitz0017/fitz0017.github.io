function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Kevin's Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Github Quicklinks
              </a>
            </li>
          </ul>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                target="_blank"
                href="https://github.com/fitz0017/realtime-bus-tracker"
              >
                Realtime Bus Tracker
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                target="_blank"
                href="https://github.com/fitz0017/PacMen"
              >
                PacMen
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                target="_blank"
                href="https://github.com/fitz0017/eyes"
              >
                Eyes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
