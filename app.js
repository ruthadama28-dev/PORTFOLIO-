const projects = [
  {
    name: "Pharmacy Ordering System",
    desc: "A web app for ordering pharmaceutical products",
    github: "https://github.com/ruthadama28-dev/pharmacy-app"
  },
  {
    name: "Bug Tracking System",
    desc: "A system for tracking software bugs",
    github: "https://github.com/ruthadama28-dev/bug-tracker"
  }
];

const container = document.getElementById("projects");

projects.forEach(project => {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.desc}</p>
    <a href="https://ruthadama28-dev.github.io/pharmacy-app/" target="_blank">
  View Project
</a>
  `;

  container.appendChild(div);
});