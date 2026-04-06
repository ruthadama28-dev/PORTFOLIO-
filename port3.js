const projects = [
  "Pharmacy Ordering System",
  "Bug Tracking System"
];

const container = document.getElementById("projects");

projects.forEach(project => {
  const p = document.createElement("p");
  p.textContent = project;
  container.appendChild(p);
});