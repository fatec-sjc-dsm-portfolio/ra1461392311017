import { projetos, imagensProjetos, linksProjetos } from "./data.js";

let currentProjectIndex = 0;

function createProjetoContentHTML(projeto, link) {
  const tecnologiasHtml = projeto.tecnologias
    .map((tec) => `<span class="badge">${tec}</span>`)
    .join("");
  return `
        <h2 class="titulo project-title">${projeto.titulo}</h2>
        <p class="project-description">${projeto.descricao}</p>
        <div class="project-techs">${tecnologiasHtml}</div>
        <hr />
        <h3 class="titulo-detalhe">Minha Contribuição</h3>
        <p class="project-contribution">${projeto.contribuicao}</p>
        <hr />
        <a href="${link}" target="_blank" rel="noopener noreferrer" class="project-link">Ver Detalhes do Projeto</a>
    `;
}

function updateProjectContent() {
  const projectDetailsContainer = document.getElementById(
    "project-details-container"
  );
  const projectActiveImage = document.querySelector(".project-active-image");
  const projectCounter = document.getElementById("project-counter");

  const projeto = projetos[currentProjectIndex];
  const imagem = imagensProjetos[currentProjectIndex];
  const link = linksProjetos[currentProjectIndex];

  projectDetailsContainer.classList.add("changing");
  projectActiveImage.classList.add("changing");

  setTimeout(() => {
    projectDetailsContainer.innerHTML = createProjetoContentHTML(projeto, link);
    projectActiveImage.src = imagem;
    projectActiveImage.alt = projeto.titulo;
    projectCounter.textContent = `${currentProjectIndex + 1} / ${
      projetos.length
    }`;

    projectDetailsContainer.classList.remove("changing");
    projectActiveImage.classList.remove("changing");
  }, 200);
}

document.addEventListener("DOMContentLoaded", () => {
  const allScrollPages = document.querySelectorAll(".scroll-page");
  const navLinks = document.querySelectorAll("#main-nav a");
  const prevProjectBtn = document.getElementById("prev-project-btn");
  const nextProjectBtn = document.getElementById("next-project-btn");

  // Observer para animar seções ao entrar na tela
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const navLink = document.querySelector(
          `#main-nav a[href="#${entry.target.id}"]`
        );
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          if (navLink) {
            navLinks.forEach((link) => link.classList.remove("nav-active"));
            navLink.classList.add("nav-active");
          }
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.6 }
  );

  allScrollPages.forEach((section) => observer.observe(section));

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  nextProjectBtn.addEventListener("click", () => {
    currentProjectIndex++;
    if (currentProjectIndex >= projetos.length) {
      currentProjectIndex = 0;
    }
    updateProjectContent();
  });

  prevProjectBtn.addEventListener("click", () => {
    currentProjectIndex--;
    if (currentProjectIndex < 0) {
      currentProjectIndex = projetos.length - 1;
    }
    updateProjectContent();
  });

  document.getElementById("intro-section").classList.add("active");
  updateProjectContent();
});
