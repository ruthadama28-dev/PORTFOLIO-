const projects = [
  {
    name: "Pharmacy Ordering System",
    desc: "A web app for ordering drugs with cart and tracking"
  },
  {
    name: "Bug Tracking System",
    desc: "A system to log and track software bugs"
  }
];

const container = document.getElementById("projects");

projects.forEach(project => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.desc}</p>
  `;
  container.appendChild(div);
});