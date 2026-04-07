const projects = [
  {
    name: "Pharmacy Ordering System",
    desc: "A web application for ordering pharmaceutical products with cart and tracking features."
  },
  {
    name: "Bug Tracking System",
    desc: "A system for logging, tracking, and resolving software bugs."
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