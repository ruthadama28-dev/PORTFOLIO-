const projects = [
  {
    name: "Pharmacy Ordering System",
    desc: "A web app for ordering pharmaceutical products",
    live: "https://ruthadama28-dev.github.io/pharmacy-app/"
  },
  {
    name: "Bug Tracking System",
    desc: "A system for tracking software bugs",
    live: "https://ruthadama28-dev.github.io/bug-tracker/"
  }
];

const container = document.getElementById("projects");

projects.forEach(project => {
  const div = document.createElement("div");
  div.classList.add("project-card"); // optional for styling

  div.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.desc}</p>
    <a href="${project.live}" target="_blank">View Project</a>
  `;

  container.appendChild(div);
});