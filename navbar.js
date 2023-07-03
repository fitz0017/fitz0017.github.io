function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Kevin's Portfolio
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Github Quicklinks
              </a>
            </li>
          </ul>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                target="_blank"
                href="https://github.com/fitz0017/realtime-bus-tracker"
              >
                Realtime Bus Tracker
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                target="_blank"
                href="https://github.com/fitz0017/PacMen"
              >
                PacMen
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
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
