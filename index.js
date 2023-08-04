function ListProjects(projects) {
  let container = document.getElementById("container");
  for (let i = 0; i < projects.length; i++) {
    let div = document.createElement("div");
    let details = document.createTextNode(`
            <h4>${projects[i]["title"]}</h4>
            <p>${projects[i]["desc"]}</p>
            <img>${projects[i]["imgUrl"]}</img>`);
    div.classList.add("spotlight");
  }
  return div;
}

const projects = [
  {
    title: "Pacman",
    desc: "Let Pacman run wild across the browser!",
    imgUrl: "TODO",
  },
  {
    title: "Eyes",
    desc: "Eyes project, details forthcoming",
    imgUrl: "TODO",
  },
  {
    title: "Real Time Bus Tracking",
    desc: "Track those busses",
    imgUrl: "TODO",
  },
];

function App() {
  return (
    <div>
      <div className="bg-info text-center callout border">
        This page under construction, please bear with me as it matures!
      </div>
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="card bio" style={{ margin: "auto" }}>
        <div className="card-body align-items-center">
          <h4 className="card-title" style={{ textDecoration: "underline" }}>
            Brief Biography
          </h4>
          <div style={{ display: "flex" }}>
            <p className="card-text align-middle" style={{ width: "66%" }}>
              Thank you for visiting! I'm Kevin, a husband and father, cloud
              engineer, and general tinkerer. I've worked in and with technology
              all of my adult life, beginning my professional career in the USAF
              and spending the last 10 years in customer engineering working
              with enterprise customers. On this page, I'd like to share some of
              the work I've done across development, infrastructure as code and
              other technologies.
              <br />
              <br />
              I've been fortunate to work with customers across multiple
              industries including manufacturing, healthcare and finance.
              <br />
              <br />
              It is an exciting time in technology and I hope to explore AI in
              depth and share those projects here as well.
            </p>
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/1WyRFRhi9WU"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
          <h6 className="display-12">Previous work:</h6>
          <ul>
            <li>Cloud Engineer at Google Cloud - where I still work today.</li>
            <li>Sales Engineer at VMware</li>
            <li>Sales Engineer at Dell EMC</li>
            <li>Storage Engineer / Sales Engineer at EMC</li>
            <li>Linguist / Cryptologist at US Air Force</li>
          </ul>
          <p>
            For more detailed information about previous work and education, or
            to get in touch -- see my{" "}
            <a
              className="link-primary"
              href="https://www.linkedin.com/in/kevin-fitzpatrick-5225a22/"
            >
              LinkedIn
            </a>{" "}
            <a href="https://www.linkedin.com/in/kevin-fitzpatrick-5225a22/">
              <i className="bi bi-linkedin" />
            </a>
          </p>
          <img
            src="https://storage.googleapis.com/cloud-resume-394913/a-10.jpg"
            className="mx-auto d-block img-thumbnail rounded"
            style={{ height: 350, width: 500 }}
          />
        </div>
      </div>
      <div className="text-center">
        <h5
          className="h2 text-center"
          style={{ marginTop: "2em", paddingBottom: ".5em" }}
          id="projects"
        >
          Projects
        </h5>
        <a target="_blank" href="https://github.com/fitz0017">
          <h8 className="align-items-center border-bottom">
            <i className="bi bi-github" /> @fitz0017{" "}
          </h8>
        </a>
      </div>
      <div
        className="container projects"
        style={{ display: "flex", marginTop: 25 }}
      >
        <hr />
        <div
          className="card"
          style={{ marginLeft: 25, marginTop: 5, width: "33%" }}
        >
          <img
            src="https://storage.googleapis.com/cloud-resume-394913/pacmen.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">PacMen Project</h5>
            <p className="card-text">
              PacMen Chaos! App has two buttons. One to add PacMen to the screen
              in a random location with a random speed, and a second to start
              the animation and have the PacMen run wild within the window area.
              PacMen should change facing direction when bouncing off the left
              and right walls.
            </p>
            <a
              href="https://github.com/fitz0017/PacMen"
              className="btn btn-primary"
            >
              Github Repo
            </a>
          </div>
        </div>
        <div
          className="card"
          style={{ marginLeft: 25, marginTop: 5, width: "33%" }}
        >
          <img
            src="https://storage.googleapis.com/cloud-resume-350620_cloudbuild/realtimebus.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Realtime Bus Tracker</h5>
            <p className="card-text">
              This tracker will show a standard, red marker for each buses'
              near-realtime location on a Google Map on the MBTA Bus Route #1.
              It updates every 15 seconds from the MBTA API. Uses standard light
              styling and default map settings.
            </p>
            <a
              href="https://github.com/fitz0017/realtime-bus-tracker"
              className="btn btn-primary"
            >
              Github Repo
            </a>
          </div>
        </div>
        <div
          className="card"
          style={{ marginLeft: 25, marginTop: 5, width: "33%" }}
        >
          <img
            src="https://storage.googleapis.com/cloud-resume-394913/eyes.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Eyes Project</h5>
            <p className="card-text">
              HTML / JS project showing mouse tracking with pair of eyes in the
              browser. Simple CSS, HTML and JS to track mouse movements.
            </p>
            <a
              href="https://github.com/fitz0017/eyes"
              className="btn btn-primary"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
