function listProjects(projects) {
  let container = document.getElementById("container");
  for (let i = 0; i < projects.length; i++) {
    let div = document.createElement("div");
    let details = document.createTextNode(`
            <h4>${projects[i]["title"]}</h4>
            <p>${projects[i]["desc"]}</p>
            <img>${projects[i]["imgUrl"]}</img>`);
    div.classList.add("spotlight");
    div.appendChild(details);
    console.log(div);
    container.appendChild(div);
  }
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
